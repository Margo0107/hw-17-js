class BankAccount {
  constructor(startBalance) {
    this.balance = startBalance;
  }

  getBalance() {
    return this.balance;
  }

  depisit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
const account1 = new BankAccount(1000);
console.log(account1.getBalance());

account1.depisit(500);
console.log(account1.getBalance());

account1.withdraw(200);
console.log(account1.getBalance());
