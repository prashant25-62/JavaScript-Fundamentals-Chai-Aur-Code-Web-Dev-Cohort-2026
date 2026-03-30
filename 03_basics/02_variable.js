// Block scope example

if (true) {
  var leakyTreasure = "Gold coins";
}

if (true) {
  let leakyTreasure_01 = "Gold coins";
}

// console.log(leakyTreasure_01); //  error

for (let i = 0; i < 10; i++) {
  //
}

for (let j = 0; j < 10; j++) {
  //
}

console.log(leakyTreasure); //  works


let shipSpeed = 22;
let privateLog = "secret"; 
const MONGODB_URI = ""; 
let userName = "hitesh";

// Object mutation allowed
const treasureChest = {
  gold: 100,
  rubies: 50,
  maps: 2,
};

treasureChest.gold = 150; // allowed

// Array mutation allowed
const crewRoster = ["Alok", "Abhinav", "Tasnish"];
crewRoster.push("Vraj"); // 
crewRoster[0] = "Shubham"; // 

console.log(crewRoster);

// Not allowed
// crewRoster = ["Someone"];