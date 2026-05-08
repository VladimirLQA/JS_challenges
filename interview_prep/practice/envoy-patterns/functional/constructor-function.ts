function makeAccount(initialBalance: number) {
  let balance = initialBalance;

  return {
    deposit: (amount: number) => { balance += amount; return balance; },
    withdraw: (amount: number) => {
      if (amount > balance) throw new Error('Insufficient funds');
      balance -= amount;
      return balance;
    },
    getBalance: () => balance,
  };
}

// Usage
const acc1 = makeAccount(100);
const acc2 = makeAccount(500);
console.log(acc1.deposit(50));   // 150
console.log(acc2.withdraw(100)); // 400
