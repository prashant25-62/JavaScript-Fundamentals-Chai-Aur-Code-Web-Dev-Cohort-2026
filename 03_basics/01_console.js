//console.log

const evidenceClue = "Muddy footprint near the window";
console.log("Clue found: ", evidenceClue);

const personName = "Dipesh";
const personAge = 20;
console.log("Suspect: ", personName, "| Age: ", personAge);


//warn/error

console.warn("Warning: Fingerprint evidence detected");
console.error("Warning: Fingerprint evidence detected");


//table

const investigationLog = [
  { id: 1, item: "Muddy footprint", location: "Window sill" },
  { id: 2, item: "Broken glass", location: "Living room" },
  { id: 3, item: "Red fiber strand", location: "Door handle" },
];
console.table(investigationLog);


//group

console.group("Group starts");
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.groupEnd();


// in browser

console.count("CodeTracker");
console.count("CodeTracker");
console.count("CodeTracker");
console.count("CodeTracker");


// console.time("timer starts now");

// let matchCounter = 0;
// for (let i = 0; i < 1_000_000; i++) {
//   matchCounter++;
// }
// console.timeEnd();

// console.log("CodeTracker");
// console.log("CodeTracker");
// console.log("CodeTracker");
// console.log("CodeTracker");