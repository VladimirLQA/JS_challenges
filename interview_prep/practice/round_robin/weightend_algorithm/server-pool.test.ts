import assert from 'node:assert/strict';
import { ServerPool } from './server-pool.ts';
import { describe, it } from 'node:test';

describe('distribution', () => {
  it('should respects weights ratios over a full cycle', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 5, healthy: true },
      { id: 'b', host: '', port: 0, weight: 2, healthy: true },
      { id: 'c', host: '', port: 0, weight: 1, healthy: true },
    ]);

    const record: Record<string, number> = {};
    const totalWeight = 5 + 2 + 1;

    for (let i = 0; i < totalWeight; i += 1) {
      const p = pool.next()!;
      record[p?.server.id] = (record[p?.server.id] ?? 0) + 1;
    }

    assert.equal(record['a'], 5);
    assert.equal(record['b'], 2);
    assert.equal(record['c'], 1);
  });

  it('distributes smoothly - no consecutive burst of the same server', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 3, healthy: true },
      { id: 'b', host: '', port: 0, weight: 1, healthy: true },
    ]);

    const picks = Array.from({ length: 8 }, () => pool.next()!.server.id);

    for (let i = 0; i < picks.length - 3; i += 1) {
      const quad = picks.slice(i, i + 4);
      assert.ok(
        !quad.every((id) => id === 'a'),
        `Burst of 4 detected at ${i}: ${quad}`,
      );
    }
  });
});

describe('Edge cases', () => {
  it('returns null when pool is empty', () => {
    const pool = new ServerPool([]);

    assert.equal(pool.next()!, null);
  });
  it('returns null when all servers are unhealthy', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 3, healthy: false },
    ]);

    assert.equal(pool.next()!, null);
  });
  it('handles single server - always returns it', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 4, healthy: true },
    ]);
    for (let i = 0; i < 10; i += 1) {
      assert.equal(pool.next()!.server.id, 'a');
    }
  });
  it('handles equal weights - across all servers', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 2, healthy: true },
      { id: 'b', host: '', port: 0, weight: 2, healthy: true },
      { id: 'c', host: '', port: 0, weight: 2, healthy: true },
    ]);

    const picks = Array.from({ length: 6 }, () => pool.next()?.server.id);

    assert.equal(picks.filter((id) => id === 'a').length, 2);
    assert.equal(picks.filter((id) => id === 'b').length, 2);
    assert.equal(picks.filter((id) => id === 'c').length, 2);
  });
});

describe('failure handling', () => {
  it('degrades effectiveWeight on failure', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 5, healthy: true },
      { id: 'b', host: '', port: 0, weight: 1, healthy: true },
    ]);

    for (let i = 0; i < 10; i += 1) {
      const pick = pool.next()!;
      if (pick.server.id === 'a') pool.onFailure(pick.index); break;
    }
    for (let i = 0; i < 10; i += 1) {
      const pick = pool.next()!;
      if (pick.server.id === 'a') pool.onFailure(pick.index); break;
    }

    const record: Record<string, number> = { a: 0, b: 0 };
    for (let i = 0; i < 100; i += 1) {
      const pick = pool.next()!;
      record[pick.server.id]++;
    }

    assert.ok(record['b'] > 10, `Expected b to win more, actual: ${record['b']}`);
  });

  it('mark server unhealthy after > 3 consecutive failures', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 3, healthy: true },
      { id: 'b', host: '', port: 0, weight: 1, healthy: true },
    ]);

    const firstPick = pool.next()!;
    assert.equal(firstPick.server.id, 'a', '[precondition]: a is picked first');
    const aIdx = firstPick.index;
    pool.onFailure(aIdx);
    pool.onFailure(aIdx);
    pool.onFailure(aIdx);
    pool.onFailure(aIdx);

    for (let i = 0; i < 10; i += 1) {
      assert.equal(pool.next()!.server.id, 'b');
    }
  });
  it('recovers effectiveWeight on success', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 3, healthy: true },
      { id: 'b', host: '', port: 0, weight: 1, healthy: true },
    ]);

    const firstPick = pool.next()!;
    assert.equal(firstPick.server.id, 'a', '[precondition]: a is picked first');
    const aIdx = firstPick.index;
    pool.onFailure(aIdx);
    pool.onFailure(aIdx);
    pool.onFailure(aIdx);

    assert.equal(pool.next()!.server.id, 'b', 'server b is picked after a degraded');

    for (let i = 0; i < 3; i++) {
      pool.onSuccess(aIdx);   // each success restores +1
    }
    console.log(pool);

    assert.equal(pool.next()!.server.id, 'a', 'server a is picked after restored');
  });
});

describe('topology', () => {
  it('includes newly added server in rotation', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 1, healthy: true },
    ]);

    pool.add({ id: 'b', host: '', port: 0, weight: 1, healthy: true });
    const ids = new Set(
      Array.from({ length: 20 }, () => pool.next()!.server.id),
    );

    assert.ok(ids.has('b'), 'b should appear after being added');
  });

  it('immediate remove stops server from being picked', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 3, healthy: true },
      { id: 'b', host: '', port: 0, weight: 3, healthy: true },
    ]);

    pool.remove('a', 'immediate');

    for (let i = 0; i < 20; i++) {
      assert.equal(pool.next()!.server.id, 'b');
    }
  });

  it('drain stops new picks but allows finalize', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 3, healthy: true },
      { id: 'b', host: '', port: 0, weight: 3, healthy: true },
    ]);

    pool.remove('a', 'drain');

    for (let i = 0; i < 20; i++) {
      assert.equal(pool.next()!.server.id, 'b', '"a" must not appear after drain');
    }

    pool.finalizeDrain('a');

    assert.equal(pool.next()!.server.id, 'b', 'after "finalize" b works');
  });

  it('markHealthy restores a server to rotation', () => {
    const pool = new ServerPool([
      { id: 'a', host: '', port: 0, weight: 1, healthy: false },
      { id: 'b', host: '', port: 0, weight: 1, healthy: true },
    ]);

    pool.markHealthy('a', true);

    const ids = new Set(
      Array.from({ length: 20 }, () => pool.next()!.server.id),
    );
    assert.ok(ids.has('a'), 'a should re-enter rotation after markHealthy');
  });
});
