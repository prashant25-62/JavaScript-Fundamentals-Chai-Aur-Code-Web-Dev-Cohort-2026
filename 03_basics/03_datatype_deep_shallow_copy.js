
// PRIMITIVE TYPES


// string
const weaponTitle = "Flame Sword";
console.log("Weapon:", weaponTitle, "| Type:", typeof weaponTitle);

// number
const baseAttackPower = 75;
const attackMultiplier = 1.5;

console.log(typeof baseAttackPower);   // number
console.log(typeof attackMultiplier);  // number

// boolean
const userLoggedIn = true;

// undefined
let bonusAbility; // declared but not assigned → undefined

// null
let curseEffect = null;
let apiResponse = null;
console.log(typeof apiResponse); //  "object" (JS bug)


// SYMBOL (UNIQUE VALUE)

const runeIdOne = Symbol("rune_of_fire");
const runeIdTwo = Symbol("rune_of_fire");

console.log(
  "Rune:",
  runeIdOne.toString(),
  "| Type:",
  typeof runeIdOne
);


// OBJECTS & ARRAYS

const playerStats = {
  playerName: "Deepak",
  playerLevel: 12,
  playerClass: "Ranger",
};

console.log("Player:", playerStats, "| Type:", typeof playerStats);

// array
const playerInventory = ["Flame Sword", "Health Potion", "Shield"];
console.log(
  "Inventory:",
  playerInventory,
  "| Type:",
  typeof playerInventory
);

// correct way to check array
console.log(Array.isArray(playerInventory)); //  true

//  FUNCTION TYPE

function castFireSpell() {
  return "Fireball";
}

console.log("Spell Type:", typeof castFireSpell); // function


//  TYPE CHECKS


console.log(typeof "chaicode");      // string
console.log(typeof 42);              // number
console.log(typeof 42n);             // bigint
console.log(typeof true);            // boolean
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object (bug)
console.log(typeof Symbol());        // symbol
console.log(typeof {});              // object
console.log(typeof []);              // object
console.log(typeof function () {});  // function

//  PRIMITIVE COPY (VALUE)

let originalHealth = 100;
let copiedHealth = originalHealth;

copiedHealth = 80;

console.log("Original HP:", originalHealth); // 100
console.log("Copied HP:", copiedHealth);     // 80


// OBJECT COPY (REFERENCE)


const originalWeapon = {
  name: "Flame Sword",
  damage: 75,
  type: "Fire",
};

const copiedWeapon = originalWeapon;

// modifies original too 
copiedWeapon.damage = 100;

console.log("Original Weapon Damage:", originalWeapon.damage); // 100


// SHALLOW COPY ISSUE

const originalArmor = {
  name: "Iron Plate",
  defence: 80,
  buff: {
    fire: 10,
  },
};

// shallow copy
const shallowArmorCopy = { ...originalArmor };

// nested object still shared 
shallowArmorCopy.buff.fire = 90;

console.log(originalArmor.buff.fire); // 90 


// DEEP COPY (CORRECT)

const originalPotion = {
  name: "Health",
  effects: { heal: 40, mana: 30 },
};

// deep clone
const deepPotionCopy = structuredClone(originalPotion);

deepPotionCopy.effects.heal = 0;

console.log(deepPotionCopy.effects.heal);   // 0
console.log(originalPotion.effects.heal);   // 40 


//  EDGE CASES

console.log(typeof null === "object"); // true (JS bug)

// wrong usage (fixed)
// Array.isArray(); 


//  NOTES
// "use strict"; // enables strict mode

// JS primitive types:
// number, string, boolean, null, undefined, bigint, symbol

// Non-primitive:
// object, array, function

// Key rules:
// - primitives → copy by value
// - objects → copy by reference
// - spread (...) → shallow copy
// - structuredClone() → deep copy
// - typeof null → "object" (historical bug)