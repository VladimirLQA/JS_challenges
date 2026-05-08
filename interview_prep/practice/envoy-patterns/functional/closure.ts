function createWithdraw(initialBalance: number) {
  let balance = initialBalance;

  return (amount: number): number => {
    if (amount > balance) {
      throw new Error('Insufficient funds');
    }
    balance -= amount;
    return balance;
  };
}

// Usage
const withdraw = createWithdraw(100);
console.log(withdraw(30));  // 70
console.log(withdraw(20));  // 50
