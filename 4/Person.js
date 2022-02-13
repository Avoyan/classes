class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if(typeof(value) !== "string" || value.length <= 0) {
      throw new Error("Unbale to set first name.");
    }

    this._firstName = value;
  }
  
  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if(typeof(value) !== "string" || value.length <= 0) {
      throw new Error("Unbale to set last name.");
    }

    this._lastName = value;
  }
  
  get gender() {
    return this._gender;
  }

  set gender(value) {
    const genders = ['Male', 'Female'];
    const index = genders.findIndex(el => value.toLowerCase() === el.toLowerCase())

    if(index < 0) {
      throw new Error("Unbale to set email.");
    }

    this._gender = genders[index];
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if(typeof(value) !== "number" || value < 0) {
      throw new Error("Unbale to set age.");
    }

    this._age = value;
  }

  toString() {
    return `Person first name is ${this.firstName}, last name is ${this.lastName}, gender is ${this.gender}, age is ${this.age}.`;
  }
}