function add (a, b) {
  return a + b;
}

console.log(add(3,1));

//spread
var toAdd = [9, 5];
console.log(add(...toAdd));
//add(toAdd[0], toAdd[1]);

//To RUN:
//node playground/spread.js

//4
//14


//More
var groupA = ['Jen', 'Steve', 'Mary'];
var groupB = ['YO', 'HACK', 'JULIE'];

var final = [...groupB, 3, ...groupA];
console.log(final);
console.log(final);

var person = ['Andrew', 25];
var personTWO = ['Jen', 29];

console.log(...person, ...personTWO);

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTWO);


var name = ['Mike', 'Ben'];
var final = ['Andrew'];

final.forEach(function(name){
  console.log('Hi ' + name);
});
