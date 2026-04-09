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

module.exports = Animal;
