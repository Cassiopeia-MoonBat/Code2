"use strict";
var Oldmacdonald;
(function (Oldmacdonald) {
    class Animal {
        name;
        species;
        food;
        consumption;
        sound;
        constructor(_name, _species, _food, _consumption, _sound) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.consumption = _consumption;
            this.sound = _sound;
        }
        eat() {
            this.food.amount -= this.consumption;
        }
        ;
        sing() {
            console.log(this.species);
            console.log("Old MacDonald had a farm, Ee-aye, ee-aye, oh");
            console.log("And on that farm he had a " + this.species + ",");
            console.log("Ee-aye, ee-aye, oh");
            console.log("With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there");
            console.log("Here a " + this.sound + " there a " + this.sound + ",");
            console.log("Everywhere a " + this.sound + " " + this.sound);
            console.log(" Old MacDonald had a farm, Ee-aye, ee-aye, oh.");
        }
    }
    Oldmacdonald.Animal = Animal;
})(Oldmacdonald || (Oldmacdonald = {}));
//# sourceMappingURL=animal.js.map