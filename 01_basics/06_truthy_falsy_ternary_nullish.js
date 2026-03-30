// User email array check
const userEmailList = [];

if (userEmailList) {
    console.log("User email list exists");
} else {
    console.log("User email list is missing");
}

// Falsy values
// false, 0, -0, 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}

// Check if email array is empty
if (userEmailList.length === 0) {
    console.log("Email list is empty");
}

// Empty object check
const userProfile = {};

if (Object.keys(userProfile).length === 0) {
    console.log("User profile object is empty");
}

// Nullish Coalescing Operator (??)
let resultValue;

// resultValue = 5 ?? 10
// resultValue = null ?? 10
// resultValue = undefined ?? 15
resultValue = null ?? 10 ?? 20;

console.log(resultValue);

// Ternary Operator example
const icedTeaCost = 100;

icedTeaCost <= 80
    ? console.log("Price is less than or equal to 80")
    : console.log("Price is greater than 80");