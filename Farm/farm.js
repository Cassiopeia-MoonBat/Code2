"use strict";
// Old MacDonald had a farm,
// Ee-aye, ee-aye, oh
// And on his/that farm he had a [Tiername],
// Ee-aye, ee-aye, oh
// With a [Tiergeräusch ×2] here and a [Tiergeräusch ×2] there
// Here a [Tiergeräusch], there a [Tiergeräusch],
// Everywhere a [Tiergeräusch ×2]
// Old MacDonald had a farm,
// Ee-aye, ee-aye, oh. 
var Oldmacdonald;
(function (Oldmacdonald) {
    const hay = new Oldmacdonald.Food("hay", 20);
    const diesel = new Oldmacdonald.Food("diesel", 20);
    const electricity = new Oldmacdonald.Food("electricity", 15);
    const corn = new Oldmacdonald.Food("corn", 15);
    const stock = [hay, diesel, electricity, corn];
    const ani = new Oldmacdonald.Animal("Alan", "cow", hay, 4, "moo");
    const ani2 = new Oldmacdonald.Animal("Bro", "car", diesel, 2, "brum");
    const ani3 = new Oldmacdonald.Animal("Simon", "duck", corn, 5, "quack");
    const ani4 = new Oldmacdonald.Animal("Ray", "unrayengine", electricity, 3, "SHAW");
    const ani1 = new Oldmacdonald.Animal("Hanees", "sheep", hay, 3, "blend");
    const farm = [ani, ani1, ani2, ani3, ani4];
    window.addEventListener("load", hndlLoad);
    function hndlLoad() {
        dayCycle();
    }
    function dayCycle() {
        for (const animal of farm) {
            animal.sing();
            animal.eat();
            animal.specialAction();
        }
        for (const numb of stock) {
            numb.showStock();
            numb.restock();
        }
        alert("next day");
    }
})(Oldmacdonald || (Oldmacdonald = {}));
//# sourceMappingURL=farm.js.map