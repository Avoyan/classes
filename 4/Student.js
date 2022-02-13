class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._year = year;
    this._fee = fee;

    this.setExams(program);
  }

  get program() {
    return this._program;
  }

  set program(value) {
    if(typeof(value) !== "object" || value.length <= 0) {
      throw new Error("Unbale to set program.");
    }

    this._program = value;
    this.setExams(value);
  }
  
  get year() {
    return this._year;
  }

  set year(value) {
    if(typeof(value) !== "number" || value <= 0) {
      throw new Error("Unbale to set year.");
    }
    
    this._year = value;
  }

  get fee() {
    return this._fee;
  }

  set fee(value) {
    if(typeof(value) !== "number" || value < 0) {
      throw new Error("Unbale to set fee.");
    }
    
    this._fee = value;
  }

  setExams(program) {
    this.__exams = program.reduce((ex, prog) => ({ ...ex, [prog]: 0}), {});
  }

  passExam(program, grade) {
    if (!program in this.__exams) {
      throw new Error("Exam not found in the program.");
    }

    this.__exams[program] = grade;
    this.checkExams();
  }

  checkExams() {
    if (Object.values(this.__exams).every(e => e >= 50)) {
      this.year++;
      this.setExams(this.program);
    }
  }

  toString() {
    return `Hi i'm a student, my name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old, my gender is ${this.gender}.
I'm in my ${this.year}th year at university. My tuition fee is ${this.fee}.`;
  }  
}