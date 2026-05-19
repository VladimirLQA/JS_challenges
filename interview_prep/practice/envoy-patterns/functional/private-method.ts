type Actions = {
  deposit: (_amount: number) => number;
  withdraw: (_amount: number) => number;
  getLog: () => string[];
};

function makeAccountWithSelector(initialBalance: number) {
  let balance = initialBalance;
  const logs: string[] = [];

  const log = (operation: string, amount: number) =>
    logs.push(`${operation}: ${amount} (balance: ${balance})`);

  return <K extends keyof Actions>(method: K): Actions[K] => {
    switch (method) {
    case 'deposit':
      return ((amount: number) => {
        balance += amount;
        log(method, amount);
        return balance;
      }) as Actions[K];
    case 'withdraw':
      return ((amount: number) => {
        if (amount > balance) throw new Error('Insufficient funds');
        balance -= amount;
        log(method, amount);
        return balance;
      }) as Actions[K];
    case 'getLog':
      return (() => [...logs]) as Actions[K];
    default:
      throw new Error('This action is not allowed');
    }
  };
}

const account = makeAccountWithSelector(100);
console.log(account('deposit')(30));
console.log(account('withdraw')(20));
console.log(account('getLog')());
