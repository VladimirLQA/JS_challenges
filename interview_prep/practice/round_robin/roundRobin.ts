export { };

export interface RRBServer {
  id: string;
  address: string;
}

export class RoundRobinBalancer {
  private readonly servers: ReadonlyArray<RRBServer> = [];
  private pointer: number = 0;

  constructor(servers: RRBServer[]) {
    if (servers.length === 0) {
      throw new Error('Server pool must not be empty!');
    }

    this.servers = [...servers];
  }

  next(): RRBServer {
    const selected = this.servers[this.pointer];
    this.pointer = (this.pointer + 1) % this.servers.length;

    return selected;
  }

  getPointer() {
    return this.pointer;
  }

  getServersCount() {
    return this.servers.length;
  }
}

