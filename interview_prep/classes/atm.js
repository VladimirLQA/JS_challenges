class Atm {
  _total = 0;
  vault = {
    5000: 0,
    2000: 0,
    1000: 0,
    500: 0,
    100: 0,
    50: 0,
  };
  _accept = [];

  constructor() {
    this._accept = Object.keys(this.vault);
  }

  deposit(bills) {
    if (bills.length === 0) {
      console.log('Error: Put money in the bill acceptor');
      return;
    }

    const rejectedBills = [];

    const amount = bills.reduce((acc, bill) => {
      if (bill in this.vault) {
        this.vault[bill] += 1;
        acc += bill;
      } else {
        rejectedBills.push(bill);
      }
      return acc;
    }, 0);

    this._total += amount;
    console.log(
      'Deposited',
      amount,
      rejectedBills.length > 0
        ? 'Take back rejected biils [ ' + rejectedBills.join(', ') + ' ]'
        : '',
    );
  }

  withdraw(amount) {
    if (amount === 0) {
      console.log('Error: Specify exact amount');
      return;
    }

    if (amount > this._total) {
      console.log('Error: Not enough funds in the account');
      return;
    }

    const denominations = Object.keys(this.vault).map(Number);
    let targetAmount = amount;
    const withrawal = {};

    for (let i = denominations.length - 1; i >= 0; i--) {
      const amount = denominations[i];
      const count = this.vault[amount];

      if (count > 0) {
        const billsNeeded = Math.min(Math.floor(targetAmount / amount), count);
        if (billsNeeded > 0) {
          withrawal[amount] = billsNeeded;
          targetAmount -= billsNeeded * amount;
        }
      }
    }

    if (targetAmount > 0) {
      console.log(
        'Error: Cannot dispense the exact amount.' +
        ' Insufficient bills for the request.',
      );
      return;
    }

    for (const bill in withrawal) {
      this.vault[bill] -= withrawal[bill];
    }

    this._total -= amount;
    console.log('Amount issued', amount);
  }
}

const atm = new Atm();
atm.deposit([5000, 1000, 5000, 500, 100, 50, 50]);
atm.deposit([500, 10, 5]);
atm.withdraw(3500);
atm.withdraw(2100);
