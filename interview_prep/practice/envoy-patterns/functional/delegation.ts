import { makeAccountWithSelector, type Actions } from './method-selector.ts';
import { getBalance, deposit } from './generic-function.ts';
import { send } from './message-passing-interface.ts';

function makeSomeAnotherAccount(initialBalance: number, rate: number) {
  const baseAccount = makeAccountWithSelector(initialBalance);

  return <K extends keyof Actions>(method: K): Actions[K] => {
    if (method === 'someSpecificMethod') {
      return () => {
        const interest = getBalance(baseAccount) * rate;
        return deposit(baseAccount, interest);

      };
    }
    return baseAccount(method);
  };
}

const savings = makeSomeAnotherAccount(20, 1.5);

console.log('delegation > deposit: ', send(savings, 'deposit', 10));
console.log('delegation > someSpecificMethod: ', send(savings, 'someSpecificMethod'));

