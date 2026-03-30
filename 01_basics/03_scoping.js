// VAR vs LET vs CONST - SCOPING

// VAR - Function Scoped
function varScopeExample() {
    if (true) {
        var varMessage = "Hello from var";
    }

    console.log("var scope:", varMessage); //Accessible
}

varScopeExample();


// LET - Block Scoped
function letScopeExample() {
    if (true) {
        let letMessage = "Hello from let";
        console.log("let inside block:", letMessage); //Accessible
    }

    // next line will throw ReferenceError
    // console.log("let outside block:", letMessage);
}

letScopeExample();


// CONST - Block Scoped
function constScopeExample() {
    if (true) {
        const constMessage = "Hello from const";
        console.log("const inside block:", constMessage); //Accessible
    }

    //  next line will throw ReferenceError
    // console.log("const outside block:", constMessage);
}

constScopeExample();


// Reassignment Example
let mutableValue = 10;
mutableValue = 20; // allowed
console.log("let reassigned:", mutableValue);

const fixedValue = 50;
// next line will throw TypeError
// fixedValue = 100;
console.log("const value:", fixedValue);


// Loop Scope Difference
for (var i = 0; i < 3; i++) {
    // loop with var
}
console.log("var loop i:", i); // 3 values

for (let j = 0; j < 3; j++) {
    // loop with let
}
// next line will throw ReferenceError
// console.log("let loop j:", j);
