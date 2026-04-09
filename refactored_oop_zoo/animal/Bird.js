const Animal = require("./Animal");

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

module.exports = Bird;
