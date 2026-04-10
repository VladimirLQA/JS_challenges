import { beforeEach, describe, test } from 'node:test';
import { RoundRobinBalancer, RRBServer } from './roundRobin.ts';
import assert from 'node:assert/strict';

function makeServers(count: number): RRBServer[] {
  return Array.from(
    { length: count },
    (_, i) => ({ id: `server-${i}`, address: `10.0.0.${i}:8080` }),
  );
}

describe('Round Robin balancer algorightm', () => {
  describe('Initialize banalancer', () => {
    test('should return correct servers count in pool', () => {
      const pool = makeServers(3);
      const balancer = new RoundRobinBalancer(pool);

      assert.strictEqual(balancer.getServersCount(), 3);
    });

    test('should not mutate balancer pool after initial pool update', () => {
      const pool = makeServers(3);
      const balancer = new RoundRobinBalancer(pool);
      pool.push({ id: 'fake', address: '0.0.0.0' });

      assert.strictEqual(balancer.getServersCount(), 3);
    });

    test('throw on empty pool', () => {
      assert.throws(
        () => new RoundRobinBalancer([]),
        (err) => {
          assert(err instanceof Error);
          assert(/Server pool must not be empty!/.test(err.message));

          return true;
        },
        'unexpected error',
      );
    });
  });

  describe('Distribution', () => {
    let balancer: RoundRobinBalancer;

    beforeEach(() => {
      const pool = makeServers(3);
      balancer = new RoundRobinBalancer(pool);
    });

    test('should distribute requests in order', () => {
      assert.strictEqual(balancer.next().id, 'server-0', '1st request > server-0');
      assert.strictEqual(balancer.next().id, 'server-1', '2nd request > server-1');
      assert.strictEqual(balancer.next().id, 'server-2', '3rd request > server-2');
    });

    test('should wrap around to 1st server', () => {
      balancer.next();
      balancer.next();
      balancer.next();

      assert.strictEqual(balancer.next().id, 'server-0', '4th request > server-0');
    });

    test('should receive exactly one request per cycle per server', () => {
      const SERVERS_COUNT = 4;
      const pool = makeServers(SERVERS_COUNT);
      const balancer = new RoundRobinBalancer(pool);
      const counts = new Map(pool.map((server) => [server.id, 0]));

      for (let i = 0; i < SERVERS_COUNT * 3; i += 1) {
        const server = balancer.next();
        counts.set(server.id, counts.get(server.id)! + 1);
      }

      for (const [id, count] of counts) {
        assert.strictEqual(
          count,
          3,
          `${id} server should have 3 requests`,
        );
      }
    });

  });
});
