class Employee {
  constructor(id, firstName, lastName, position, salary, workingHours) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._position = position;
    this._salary = salary;
    this._workingHours = workingHours;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if(typeof(value) !== "number" || value < 0) {
      throw new Error("Unbale to set id.");
    }

    this._id = value;
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

  get position() {
    return this._position;
  }

  set position(value) {
    if(typeof(value) !== "string" || value.length <= 0) {
      throw new Error("Unbale to set position.");
    }

    this._position = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    if(typeof(value) !== "number" || value < 0) {
      throw new Error("Unbale to set salary.");
    }

    this._salary = value;
  }
  
  get workingHours() {
    return this._workingHours;
  }

  set workingHours(value) {
    if(typeof(value) !== "number" || value <= 0) {
      throw new Error("Unbale to set working hours.");
    }

    this._workingHours = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAnnularSalary() {
    return this.salary * 12;
  }

  raiseSalary(percent) {
    this.salary *= (1 + percent / 100);
    return this.salary;  
  }
}