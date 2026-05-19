import { makeAccountWithSelector } from './method-selector.ts';

export function deposit(account: any, amount: number) {
  return account('deposit')(amount);
}

function withdraw(account: any, amount: number) {
  return account('withdraw')(amount);
}

export function getBalance(account: any) {
  return account('balance')();
}

const acc = makeAccountWithSelector(1000);
console.log(deposit(acc, 100));
console.log(withdraw(acc, 20));
console.log(getBalance(acc));
