import { makeAccountWithSelector } from './method-selector.ts';

export function send(obj: any, message: string, ...args: any[]) {
  const method = obj(message);

  return method(...args);
}

const account = makeAccountWithSelector(100);
console.log(send(account, 'deposit', 50));
console.log(send(account, 'balance'));
console.log(send(account, 'withdraw', 20));
