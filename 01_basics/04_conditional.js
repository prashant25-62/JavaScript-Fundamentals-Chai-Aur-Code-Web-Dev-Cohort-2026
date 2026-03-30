const isLoggedIn = true;
const currentTemperature = 41;

// Temperature check
if (currentTemperature === 40) {
    console.log("Temperature is exactly 40");
} else {
    console.log("Temperature is not 40");
}

console.log("Execution continues...");

// Score example
const userScore = 200;

if (userScore > 100) {
    let userAbility = "fly";
    console.log(`User ability: ${userAbility}`);
}

// Balance check
const accountBalance = 1000;

if (accountBalance > 500) {
    console.log("Balance is greater than 500");
    console.log("Eligible for basic services");
}

if (accountBalance < 500) {
    console.log("Balance is less than 500");
} else if (accountBalance < 750) {
    console.log("Balance is less than 750");
} else if (accountBalance < 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balance is less than 1200");
}

// Login methods
const hasDebitCard = true;
const loginViaGoogle = false;
const loginViaEmail = true;

// Purchase condition
if (isLoggedIn && hasDebitCard && 2 === 3) {
    console.log("User is allowed to purchase the course");
}

// Login check
if (loginViaGoogle || loginViaEmail) {
    console.log("User successfully logged in");
}