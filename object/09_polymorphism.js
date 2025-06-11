function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function (balance) {
  if (this.balance <= balance) {
    console.log(`Saldo insuficiente: ${this.balance}`);
    return;
  }

  this.balane -= balance;
  this.seeBalance();
};

Account.prototype.deposit = function (balance) {
  this.balance += balance;
  this.seeBalance();
};

Account.prototype.seeBalance = function () {
  console.log(
    `Ag/c: ${this.agency}/${this.account}\nSaldo: CAD ${this.balance}`
  );
};

function CurrentAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function (balance) {
  if (this.balance + this.limit < balance) {
    console.log(
      `Saldo insuficiente: ${this.balance + this.limit}.\nSaldo em conta: ${
        this.balance
      }.\nLimite disponível: ${this.limit}`
    );

    return;
  }

  this.balance -= balance;
  this.seeBalance();
};

function SavingsAccount(agency, account, balance) {
  Account.call(this, agency, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

const account = new SavingsAccount(12, 2344, 0);
account.deposit(10);
account.withdraw(100);
account.withdraw(1);
