import { type RemoveStrategy, type WRRServer } from './types.ts';
import { SmoothWeightedRoundRobin } from './smoothWeightedRoundRobin.ts';

export class ServerPool {
  private servers: Map<string, WRRServer> = new Map();
  private wrr: SmoothWeightedRoundRobin;
  private draining: Set<string> = new Set();

  constructor(initial: WRRServer[] = []) {
    initial.forEach((s) => this.servers.set(s.id, s));
    this.wrr = new SmoothWeightedRoundRobin(Array.from(this.servers.values()));
  }

  add(server: WRRServer): void {
    this.servers.set(server.id, server);
    this._rebuild();
  }

  remove(id: string, strategy: RemoveStrategy = 'drain'): void {
    if (strategy === 'drain') {
      const s = this.servers.get(id);
      if (s) {
        // Set weight=0 means no new request to server
        s.weight = 0;
        this.draining.add(id);
      }
    } else {
      this.servers.delete(id);
    }
    this._rebuild();
  }

  finalizeDrain(id: string): void {
    this.draining.delete(id);
    this.servers.delete(id);
    this._rebuild();

  }

  markHealthy(id: string, healthy: boolean): void {
    const s = this.servers.get(id);
    if (s) {
      s.healthy = healthy;
      this._rebuild();
    }
  }

  next() {
    return this.wrr.pick();
  }

  onSuccess(index: number) {
    return this.wrr.onSuccess(index);
  }

  onFailure(index: number) {
    return this.wrr.onFailure(index);
  }

  stats(): string[] {
    return Array.from(this.servers.values())
      .map((server) => `${server.id}\nw=${server.weight}\nhealthy=${server.healthy}\n${this.draining.has(server.id) ? ' [draining]' : ''}`);
  }

  private _rebuild(): void {
    const active = Array.from(this.servers.values())
      .filter((s) => s.healthy && s.weight > 0);
    this.wrr = new SmoothWeightedRoundRobin(active);
  }
}
