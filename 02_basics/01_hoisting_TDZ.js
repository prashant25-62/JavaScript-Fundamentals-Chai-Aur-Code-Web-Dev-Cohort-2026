// VAR example (hoisting behavior)
userAge = 65;
console.log(userAge); // undefined due to hoisting

var userAge = 24;
console.log(userAge);

userAge = 45;
console.log(userAge);


// LET example (temporal dead zone)
// accountAge = 65;
// console.log(accountAge); // Error: Cannot access before initialization

let accountAge = 24;
console.log(accountAge);

accountAge = 45;
console.log(accountAge);


// Block scope example
if (true) {
  let hiddenTreasure = "Gold coins";
}

// console.log(hiddenTreasure); // Error: not accessible outside block


// Correct way using outer scope variable
let accessibleTreasure;

if (true) {
  accessibleTreasure = "Gold coins";
}

console.log(accessibleTreasure); // Works fine


// Notes:
// Variables declared outside can be accessed inside blocks
// Variables declared inside blocks cannot be accessed outside

// This is because of lexical scope in JavaScript:
// Inner scope → can access outer variables
// Outer scope → cannot access inner variables