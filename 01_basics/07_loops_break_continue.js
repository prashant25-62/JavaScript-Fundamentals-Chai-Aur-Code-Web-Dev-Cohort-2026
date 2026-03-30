// Basic for loop
for (let counter = 0; counter <= 10; counter++) {
    const currentValue = counter;

    if (currentValue === 5) {
        // console.log("5 is the best number");
    }

    // console.log(currentValue);
}

// Nested loops (multiplication table)
for (let outerNumber = 1; outerNumber <= 10; outerNumber++) {
    // console.log(`Outer loop value: ${outerNumber}`);

    for (let innerNumber = 1; innerNumber <= 10; innerNumber++) {
        // console.log(`Inner loop value ${innerNumber} with outer loop ${outerNumber}`);
        // console.log(outerNumber + '*' + innerNumber + ' = ' + outerNumber * innerNumber);
    }
}

// Array iteration
let superheroList = ["flash", "batman", "superman"];

// console.log(superheroList.length);

for (let index = 0; index < superheroList.length; index++) {
    const heroName = superheroList[index];
    // console.log(heroName);
}

// Break example
for (let number = 1; number <= 20; number++) {
    if (number === 5) {
        console.log(`Detected number 5`);
        break;
    }

    console.log(`Current number is ${number}`);
}

// Continue example
for (let number = 1; number <= 20; number++) {
    if (number === 5) {
        console.log(`Detected number 5`);
        continue;
    }

    console.log(`Current number is ${number}`);
}