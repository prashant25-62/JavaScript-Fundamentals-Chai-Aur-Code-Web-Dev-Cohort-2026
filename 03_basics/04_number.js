// =======================
// 🔢 SPECIAL NUMBER VALUES
// =======================

const infiniteValue = Infinity;
const negativeInfiniteValue = -Infinity;
const notANumberValue = NaN;

console.log(1 / 0);   // Infinity
console.log(-1 / 0);  // -Infinity

console.log(Number.MAX_SAFE_INTEGER); // largest safe integer
console.log(Number.MIN_SAFE_INTEGER); // smallest safe integer
console.log(Number.EPSILON);          // smallest precision difference
console.log(Number.isNaN(notANumberValue)); // true


// PARSING NUMBERS

const fuelReading = "142.75 tons";
const binaryString = "111";
const countDownString = "007";

console.log(parseInt(countDownString));     // 7
console.log(parseInt(binaryString, 2));     // 7 (binary → decimal)
console.log(parseFloat(fuelReading));       // 142.75


//  MATH METHODS

const thrustForce = 4.567;

console.log(Math.round(thrustForce)); // 5
console.log(Math.floor(thrustForce)); // 4
console.log(Math.ceil(thrustForce));  // 5
console.log(Math.trunc(thrustForce)); // 4


// ARRAY WITH MATH
const temperatureReadings = [-120, 43, 56, -23];

//  wrong
// Math.min(temperatureReadings)

// correct (spread operator)
console.log(Math.min(...temperatureReadings)); // -120


// FLOATING POINT ISSUE

console.log(0.1 + 0.2);           // 0.30000000000000004 
console.log(0.1 + 0.2 === 0.3);   // false 


// FIX FLOAT COMPARISON


function nearlyEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(nearlyEqual(0.1 + 0.2, 0.3)); // true 