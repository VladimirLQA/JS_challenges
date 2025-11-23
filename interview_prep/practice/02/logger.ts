import { stringify } from './utils.js';

class Logger {
  private ANSI_COLORS = {
    GREEN: '\x1b[32m%s\x1b[0m',
    RED: '\x1b[31m%s\x1b[0m',
    YELLOW: '\x1b[33m%s\x1b[0m',
    CYAN: '\x1b[36m%s\x1b[0m',
  };

  private log(value: unknown, color: keyof typeof this.ANSI_COLORS) {
    const dataToLog = stringify(value);
    console.log(this.ANSI_COLORS[color], dataToLog);
  }

  public info(value: unknown) {
    this.log(value, 'GREEN');
  }

  public error(value: unknown) {
    this.log(value, 'RED');

  }

  public warning(value: unknown) {
    this.log(value, 'YELLOW');
  }
}

export const logger = new Logger();
