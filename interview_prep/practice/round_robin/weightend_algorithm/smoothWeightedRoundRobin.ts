import { WRRServerState, WRRServer, PickResult } from './types.ts';

export class SmoothWeightedRoundRobin {
  private states: WRRServerState[] = [];

  constructor(servers: WRRServer[]) {
    this.load(servers);
  }

  load(servers: WRRServer[]): void {
    this.states = servers
      .filter((server: WRRServer) => server.weight > 0 && server.healthy)
      .map((server) => ({
        server,
        currentWeight: 0,
        effectiveWeight: server.weight,
        fails: 0,
      }));
  }

  pick(): PickResult | null {
    const active = this.states.filter((state) => state.server.healthy);
    if (active.length === 0) return null;

    // eslint-disable-next-line no-return-assign
    const total = active.reduce((sum, s) => sum += s.effectiveWeight, 0); // could be potential bug due to gathering weight from `active` ones and not `states` as it is

    // Step 1 - every server earns its weight
    for (const s of active) s.currentWeight += s.effectiveWeight;

    // Step 2 - winner = highest currentWeight
    let winner = active[0];
    let winnerIndex = this.states.indexOf(active[0]);

    for (let i = 1; i < active.length; i += 1) {
      if (active[i].currentWeight > winner?.currentWeight) {
        winner = active[i];
        winnerIndex = this.states.indexOf(active[i]);
      }
    }

    // Step 3 - penalise winner to smooth the next round
    winner.currentWeight -= total;

    // Interleaved sequence, never bursty
    return {
      server: winner.server!,
      index: winnerIndex,
      snapshot: this.states.map((s) => s.currentWeight),
    };
  }

  onSuccess(index: number): void {
    const s = this.states[index];
    if (!s) return;
    s.fails = 0;

    if (s.effectiveWeight < s.server.weight) {
      s.effectiveWeight = Math.min(s.server.weight, s.effectiveWeight + 1);
    }
  }

  onFailure(index: number): void {
    const s = this.states[index];
    if (!s) return;
    s.fails += 1;
    s.effectiveWeight = Math.max(1, s.effectiveWeight - 1);

    if (s.fails > 3) s.server.healthy = false;
  }
}
