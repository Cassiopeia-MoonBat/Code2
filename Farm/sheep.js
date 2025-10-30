"use strict";
var Oldmacdonald;
(function (Oldmacdonald) {
    class Sheep extends Oldmacdonald.Animal {
        specialAction() {
            console.log("gives the farmer weed");
        }
    }
    Oldmacdonald.Sheep = Sheep;
})(Oldmacdonald || (Oldmacdonald = {}));
//# sourceMappingURL=sheep.js.map