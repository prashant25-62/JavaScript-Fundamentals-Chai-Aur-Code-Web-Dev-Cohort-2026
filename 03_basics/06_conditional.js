//  PLAYER CONDITION

const playerHealth = 75;
const hasShield = true;
const hasSword = false;

if (playerHealth <= 30 && hasShield) {
  console.log("Shield activated due to low health");
}


// ACCESS CONTROL


const isLoggedIn = true;
const hasCourseAccess = false;

if (isLoggedIn || hasCourseAccess) {
  console.log("User can watch videos");
}


// COURSE STATUS


const courseLaunched = true; // fixed spelling


//  SWITCH CASE


const chosenPath = "left";

switch (chosenPath) {
  case "right":
    console.log("User selected right");
    break;

  case "top":
    console.log("User selected top");
    break;

  case "left":
    console.log("User selected left"); //  fixed
    break;

  default:
    console.log("Jiska koi nhi hota, uska default hota h"); //  now prints
}