class Account {
  constructor(id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if(typeof(value) !== "string" || value.length <= 0) {
      throw new Error("Unbale to set name.");
    }
    
    this._name = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if(typeof(value) !== "number" || value < 0) {
      throw new Error("Unbale to set balance.");
    }

    this._balance = value;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    const fillables = [
      "id",
      "name",
      "balance"
    ];

    for (let fillable of fillables) {
      if (accountFirst[fillable] !== accountSecond[fillable]) {
        return false;
      }
    }

    return true;
  }

  credit(amount) {
    return this.balance += amount;
  }

  debit(amount) {
    if (amount < this.balance) {
      return this.balance -= amount;
    }

    console.log("Amount exceeded balance.");
  }

  transferTo(anotherAccount, amount) {
    if (amount < this.balance) {
      anotherAccount.credit(amount);
      return this.balance -= amount;
    }

    console.log("Amount exceeded balance.");
  }

  toString() {
    return `Account id - ${this.id}, name ${this.name}, balance - ${this.balance}.`;
  }
}