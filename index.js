// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

function convertToNumber(str) {
    try {
      const num = Number(str);
      return num;
    if (Number.isNaN(num)) { 
        throw new Error("Invalid number"); 
    }
    return num; 

} catch (error) {
    return error.message;
    }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));


// Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.


function getPerson(person){
    try{
        if (typeof person !== "object" || !person.name || !person.age){
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}

console.log(getPerson({name:"mithun" , age:20}));
console.log(getPerson({name:"mithun"}));
console.log(getPerson(["name","mithun"]));
    

// Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.

class Car{
    constructor (company, model, year){
        this.company = company;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}}`
    }
}

const mycar = new Car("skoda","Rapid" , 2022);
console.log(mycar.getDescription());


// Employee Class Challenge

// Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

class Employee {
    constructor(name , position ,salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
}

const employee1 = new Employee("prabir kumar", "Software Engineer", 80000);

console.log(employee1.getSalary());



// Implementing a Person Class with Default Values

// Create a class called Person with two properties: name and age. The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person {
    constructor(name = "unknown" , age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person("mithun" , 20);
console.log(person1.getDetails());

const person2 = new Person();
console.log(person2.getDetails());


// using static method to add two Numbers with a calculator class

// Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.

class calculator {
    static add(num1 , num2){
        return num1 + num2;
    }
}
const result = calculator.add(5,10);



// Password Checker.

// Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User{
    constructor(username , password){
        this.username = username;
        this.password = password;
    }
    getPassword(){
        return this.password.replace(/./g, "*")
    }
    setpassword(newPassword){
    let containsNumber = false;
    let containsUppercase = false;
    for (let i = 0; i < newPassword.length; i++) {
        const char = newpassword.charAt(i);
        if(!isNaN(char)){
            containsNumber = true;
        } else if (char === char.toUpperCase()){
            containsUppercase = true;
        }
    }
    if (newPassword.length >= 8 && containsNumber && containsUppercase){
        this.password = newPassword;
    } else { 
        console.log( "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
        );
    }
}
}

const user4 = new User("johndoe","Password123");
console.log(User.getPassword());

user4.setpassword("mypassword");
user4.setpassword("MyPassword");
user4.setpassword("Mypassword123");
console.log(User.getPassword());

//




//Adding a Method to a Prototype

// Create a prototype object called Student with a property name. Add a method called printDetails to the prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the name "Mithun" and call the printDetails method.

function Student(name) {
    this.name = name;
}
 Student.prototype.printdetails = function () {
    console.log(`Hello, my name is ${this.name}`);
 }

 const Student = new Student("mithun");
 Student.printdetails();

 //

 // Cheak the presence using Clousers

//  Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.

function numbercheaker(numbers){
    return function (num){
        return numbers.includes(num);
    };
}

const arr = [1,2,3,4,5];
const cheaknum = numbercheaker(arr);
console.log(cheaknum(3));
console.log(cheaknum(6));

//

//Filter by Category

// Write a function that takes an array of products and returns a function that filters the array by a given product category. The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input.

function filterByCategory(products) {
    return function (category) {
      return products.filter(function (product) {
        return product.category === category;
      });
    };
  }
  
  // Expected Output
  
  var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];
  
  var clothingProducts = filterByCategory(products)("Clothing");
  
  console.log(clothingProducts);

  //





