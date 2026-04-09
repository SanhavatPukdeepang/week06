const Zoo = require("/Zoo.js");
const Animal = require("./animals/Animal.js");
const Bird = require("./animals/Bird.js");
const Mammal = require("./animals/Mammal.js");

console.log(typeof Zoo);

const myZoo = new Zoo("The JS Terminal Zoo");

console.log(typeof myZoo);

// Create instances
const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "brown");

// Add them to the zoo
myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

// Run the routine
myZoo.showAllAnimals();
