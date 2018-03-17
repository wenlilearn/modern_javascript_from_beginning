// // var, let and const
//
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);
//
// // init variable
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);
//
// // variable naming
// // letters, numbers, _, $
// // Can't start with a number
//
// // multiple word convention
// // camelcase
// var firstName = 'John';
// // sneakcase
// var first_name = "Sara";

//let =~ var
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Const: Can't change or to be reassigned
// const name = "john";
// console.log(name);
//
// // name = 'Sara';
//
// const greeting;

const person = {
  name: 'john',
  age: 30
}

person.name = "Sara";
person.age = 32;
k
// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
// NOTE: Error!!!
// numbers = [];
console.log(numbers);

// NOTE: recommend: const unless value change, iterator, initialize
// const won't reassign
