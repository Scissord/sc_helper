class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Текущий счет - ${this.#balance}.`);
    };
  };

  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
      console.log(`Текущий счет - ${this.#balance}.`);
    };
  };

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Алексей");
account.deposit(10000);
account.deposit(5000);

account.withdraw(15000);
