class BankAccount {
  #balance = 0;

  // положить
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        'Теперь на балансе -',
        this.#balance
      );
    };
  };

  // снять
  withdraw(amount) {
    if (
      amount > 0 &&
      this.#balance >= amount) {
      this.#balance -= amount;
      console.log(
        'Теперь на балансе -',
        this.#balance
      );
    };
  };

  getBalance() {
    console.log(
      'На балансе -',
      this.#balance);
  };
};

const account = new BankAccount();
account.deposit(20000);
account.deposit(30000);

account.withdraw(25000);
account.withdraw(25000);

account.getBalance();