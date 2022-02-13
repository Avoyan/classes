let eli = new Employee(1, "Elliote", "Alderson", "Sys admin", 2000, 160);
console.log(eli.getFullName());
console.log(eli.getAnnularSalary());
console.log(eli.raiseSalary(20));

console.log("#####################################################");

let charles = new Author("Charles Dickens", "charles@gmail.com", "Female");
charles.gender = "male";
console.log(charles.toString());

let citiesBook = new Book("A Tale of Two Cities", charles, 800, 200);
console.log(citiesBook.toString());

console.log("#####################################################");

let acc1 = new Account(1, "Account_1", 200);
acc1.credit(1000);
console.log(acc1.toString());
acc1.debit(200);
console.log(acc1.toString());

let acc2 = new Account(2, "Account_2", 550);
acc1.transferTo(acc2, 250);
console.log(acc1.toString());
console.log(acc2.toString());

let acc3 = new Account(1, "Account_1", 750);
console.log(Account.identifyAccounts(acc1, acc3));

console.log("#####################################################");

let eliStud = new Student("Elliote", "Alderson", "Male", 19, ["math", "physics", "chemistry", "biology"], 1, 400);
eliStud.passExam("math", 60);
eliStud.passExam("physics", 60);
eliStud.passExam("chemistry", 60);
console.log(eliStud.toString());
eliStud.passExam("biology", 60);
console.log(eliStud.toString());

let edTeach = new Teacher("Edward", "Alderson", "Male", 38, "Computer science", 120);
console.log(edTeach.toString());
console.log("#####################################################");