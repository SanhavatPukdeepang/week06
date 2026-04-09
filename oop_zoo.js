/**
 * THE BASE CLASS (Encapsulation)
 * We use standard methods like 'getStatus()' to view data.
 */
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; // The underscore is our "Please don't touch" sign
  }

  // A standard method to check status (Instead of a Getter)
  getStatus() {
    if (this._hunger <= 0) return "Full";
    if (this._hunger <= 20) return "Satisfied";
    return "Hungry";
  }

  // Logic to change internal state
  eat() {
    if (this._hunger <= 0) {
      console.log(`${this.name} is already full!`);
    } else {
      this._hunger = this._hunger - 10;
      console.log(`${this.name} ate. Hunger is now ${this._hunger}.`);
    }
  }

  makeSound() {
    console.log(`${this.name} makes a generic animal sound.`);
  }
}

/**
 * INHERITANCE
 * Bird gets everything from Animal via 'extends'
 */

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species); // Calls the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingSpan) {
    super(name, species); // Sends name/species to the Animal constructor
    this.wingSpan = wingSpan;
  }

  // POLYMORPHISM
  // Replacing the generic sound with a bird-specific one
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }

  fly() {
    console.log(`${this.name} spreads wings (${this.wingSpan}) and flies!`);
  }
}

/**
 * THE ZOO MANAGER
 * A class to hold and run our animal objects
 */
class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the ${this.zooName}.`);
  }

  showAllAnimals() {
    console.log(`\n--- Welcome to ${this.zooName} ---`);
    this.animals.forEach((animal) => {
      // Accessing properties and calling methods
      // console.log("here ->", animal);
      // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal)));
      console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`);
      animal.makeSound();
      animal.eat();
      console.log("-------------------");
    });
  }
}

// --- EXECUTION ---

const myZoo = new Zoo("The JS Terminal Zoo");

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
