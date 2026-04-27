export interface WRRServer {
  id: string;
  host: string;
  port: number;
  weight: number;
  healthy: boolean;
}

export interface WRRServerState {
  server: WRRServer;
  effectiveWeight: number;
  currentWeight: number;
  fails: number;
}

export interface PickResult {
  server: WRRServer;
  index: number;
  snapshot: ReadonlyArray<number>; // current weight values after pick
}

export type RemoveStrategy = 'immediate' | 'drain';
