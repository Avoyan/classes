class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
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

  get email() {
    return this._email;
  }

  set email(value) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(typeof(value) !== "string" || value.length <= 0 || !re.test(value)) {
      throw new Error("Unbale to set email.");
    }

    this._email = value;
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

  toString() {
    return `Hi i'm the author, my name is ${this.name}, my email - ${this.email}, my gender is ${this.gender}.`;
  }
}