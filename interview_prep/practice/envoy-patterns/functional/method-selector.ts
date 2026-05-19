export type Actions = {
  deposit: (_amount: number) => number;
  withdraw: (_amount: number) => number;
  balance: () => number;
  someSpecificMethod: () => number;
};

export function makeAccountWithSelector(initialBalance: number) {
  let balance = initialBalance;

  return <K extends keyof Actions>(method: K): Actions[K] => {
    switch (method) {
    case 'deposit':
      return ((amount: number) => {
        balance += amount;
        return balance;
      }) as Actions[K];
    case 'withdraw':
      return ((amount: number) => {
        if (amount > balance) throw new Error('Insufficient funds');
        balance -= amount;
        return balance;
      }) as Actions[K];
    case 'balance':
      return () => balance;
    default:
      throw new Error('This action is not allowed');
    }
  };
}

const account = makeAccountWithSelector(100);
console.log(account('deposit')(30));
console.log(account('withdraw')(20));
console.log(account('balance')());
