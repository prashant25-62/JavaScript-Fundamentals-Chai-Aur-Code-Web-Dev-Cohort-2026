// STRING CREATION

const agentCodeName = "Shadow Fox";
const backupCodeName = String("Night Owl"); // fixed typo
const formattedName = `Agent ${agentCodeName}`;

console.log(formattedName);

//  STRING IMMUTABILITY

let interceptedMessage = "HELLO";
interceptedMessage[0] = "J"; //  no effect (strings are immutable)
console.log(interceptedMessage); // "HELLO"


// STRING METHODS


const missionCode = "OMEGA-8";

console.log(missionCode.length);     // length
console.log(missionCode.charAt(99)); // "" (empty string)
console.log(missionCode[99]);        // undefined
console.log(missionCode.at(-1));     // "8" (last char)

//  CASE CONVERSION

const rawSignal = "ThE EaGLE has LandeD";
console.log(rawSignal.toLowerCase()); // "the eagle has landed"


// SEARCHING


const missionMessage = "The drop point is at Dock 7. Repeat: Dock 7";

console.log(missionMessage.indexOf("Dock")); // first occurrence index

// slice does NOT modify original
const partialMessage = missionMessage.slice(0, 12);
console.log(partialMessage);


//  SPLIT - ARRAY


const rawOrders = "    move-north|hold-position|extract-vip";
const ordersArray = rawOrders.trim().split("|"); // trim added
console.log("Split:", ordersArray);

// string - char array
const distressSignal = "SOS".split("");
console.log(distressSignal);           // ["S","O","S"]
console.log(typeof distressSignal);    // object
console.log(Array.isArray(distressSignal)); // true 


//  STRING PADDING
const missionId = "42";
console.log(missionId.padStart(6, "0")); // "000042"


//  TEMPLATE STRING

const spellCard = `
++==========================
| Spell: ${distressSignal.join("")} |
++==========================
`;

console.log(spellCard);


// VOID OPERATOR

console.log(void "hitesh"); // undefined
console.log(void 2);        // undefined


//  OBJECT NULLING

let storeInventory = { name: "Kirana", goods: 2 };
console.log(storeInventory);

storeInventory = null; // reference removed
console.log(storeInventory); // null