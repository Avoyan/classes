class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._pay = pay;
  }

  get program() {
    return this._program;
  }

  set program(value) {
    if(typeof(value) !== "string" || value.length <= 0) {
      throw new Error("Unbale to set program.");
    }

    this._program = value;
    this.setExams(value);
  }

  get pay() {
    return this._pay;
  }

  set pay(value) {
    if(typeof(value) !== "number" || value < 0) {
      throw new Error("Unbale to set pay.");
    }
    
    this._pay = value;
  }

  toString() {
    return `Hi i'm a teacher, my name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old, my gender is ${this.gender}.
I teach ${this.program}. My salary is ${this.pay}.`;
  }  
}