// Different ways to create an object

// 1. Object literals
const obj = {
  key1: "Value1",
  key2: 1,
};
//2. Using the Object() constructor function
const obj2 = Object();
//3. Object create Method
const obj3 = Object.create(null);
//4. Function Constructor
function MyFunc(name, height) {
  this.property1 = name;
  this.property2 = height;
  this.functionProp = function () {
    console.log(
      "My name is " + this.property1 + " and I am " + this.property2 + " tall."
    );
  };
}
const obj4 = new MyFunc("arjun", "6 feet");
//5. Function constructor with prototype for efficent method use
function Person(name, school) {
  this.name = name;
  this.school = school;
}
Person.prototype.statement = function () {
  console.log("I am " + this.name + " and I am in " + this.school + " school.");
};
const obj5 = new Person("arjun", "KV");
//6. Object assign method
const dummy1 = {
  car: "Tata",
  driver: "Moahan",
};
const dummy2 = {
  brand: "Proche",
  wheel: "MRF",
};
const obj6 = Object.assign({}, dummy1, dummy2);
//7. Class syntax
class Person2 {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  statement() {
    console.log(this.name, this.height);
  }
}
const obj7 = new Person2("raman", "9 feet");
