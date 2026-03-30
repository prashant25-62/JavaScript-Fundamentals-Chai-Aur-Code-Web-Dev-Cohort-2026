// Demonstrating hoisting with var
console.log("User age before initialization:", userAge);

var userAge = 20;

console.log("User age after initialization:", userAge);


// Key concept:
// Only declaration is hoisted, not initialization
// var, let, and const are all hoisted
// But only var is initialized (with undefined)
// let and const stay in TDZ until declared and give reference error 



// Demonstrating dynamic typing in JavaScript
// js loosely typed 
var userValue;

userValue = 10;
console.log("Current value:", userValue);

userValue = 100;
console.log("Updated value:", userValue);

userValue = "unknown";
console.log("Final value:", userValue);





// conditional 2:20:00

// loops

// for while do while  for each for of for in map iterators filter reduce entries keys