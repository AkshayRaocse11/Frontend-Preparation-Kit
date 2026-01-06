// {}, new Object(), Object.create()
// Creating objects in JavaScript offers several methods:
//
// 	Object literals ({}): Simplest and most popular approach. Define key-value pairs within curly braces.
//  Object() constructor: Use new Object() with dot notation to add properties.
//  Object.create(): Create new objects using existing objects as prototypes, inheriting properties and methods.
// 	Constructor functions: Define blueprints for objects using functions, creating instances with new.
// 	ES2015 classes: Structured syntax similar to other languages, using class and constructor keywords.
const employee = {
	name: "Employee",
	age: 35,
	phone: 48
}

const employee2 = new Object({
	name: "Employee",
	age: 35,
	phone: 48
});

const employee3 = Object.create(employee);
employee3.place = "India";

function employeeDetails(name,age,phone){
	this.name = name;
	this.age = age;
	this.phone = phone;
}

const employeeDetails2 = new employeeDetails("Employee",35,48);

class EmployeeDetails{
	constructor(name,age,phone) {
		this.name=name;
		this.age=age;
		this.phone=phone;
	}
	
	greet(){
		console.log(`welcome to creating object${this.name}`);
	}
}

const employeeDetails3 = new EmployeeDetails("Employee",35,48);