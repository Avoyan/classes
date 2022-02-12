class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if(typeof(value) !== "string" || value.length <= 0) {
      throw new Error("Unbale to set title.");
    }
    
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if(!value instanceof Author) {
      throw new Error("Unbale to set author.");
    }

    this._author = value;
  }
  
  get price() {
    return this._price;
  }

  set price(value) {
    if(typeof(value) !== "number" || value < 0) {
      throw new Error("Unbale to set price.");
    }

    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if(typeof(value) !== "number" || value <= 0) {
      throw new Error("Unbale to set quantity.");
    }

    this._quantity = value;
  }

  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    return `The title of the book is ${this.title}, the name of the author is ${this.author.name}.
The price of the book is ${this.price}, the number of copies is ${this.quantity}. Book's profit - ${this.getProfit()}`;
  }
}