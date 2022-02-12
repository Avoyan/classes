let eli = new Employee(1, "Elliote", "Alderson", "Sys admin", 2000, 160);
console.log(eli.getFullName());
console.log(eli.getAnnularSalary());
console.log(eli.raiseSalary(20));

let charles = new Author("Charles Dickens", "charles@gmail.com", "Female");
charles.gender = "male";
console.log(charles.toString());

let citiesBook = new Book("A Tale of Two Cities", charles, 800, 200);
console.log(citiesBook.toString());

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
