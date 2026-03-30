// Function hoisting example
displayMessage();

function displayMessage() {
    console.log("jkjk");
}


// Function with parameters
function greetUser(firstName, lastName, nickname) {
    console.log(`Hey ${firstName}, ${lastName}, ${nickname}`);
}

greetUser("abc", "unknown", "zz");


// Function with return value
function addNumbers(numA, numB) {
    return numA + numB;
}

console.log(addNumbers(10, 7));


// Function returning another function
function outerFunction() {
    function innerFunction() {
        // empty function
    }

    console.log("hehehe");
    return innerFunction;
}

const returnedFunction = outerFunction();
returnedFunction();


// Another example of returning function
function outerFunctionTwo() {
    function innerFunctionTwo() {
        console.log("hello");
    }

    console.log("hehehe");
    return innerFunctionTwo;
}

const returnedFunctionTwo = outerFunctionTwo();
returnedFunctionTwo(); // hehe hello


// Higher-order function example
function processFunction(inputFunction) {
    return inputFunction() + 10;
}

function provideValue() {
    return 10;
}

console.log(processFunction(provideValue));



