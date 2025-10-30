"use strict";
var Oldmacdonald;
(function (Oldmacdonald) {
    class Duck extends Oldmacdonald.Animal {
        specialAction() {
            console.log("commits Murder");
        }
    }
    Oldmacdonald.Duck = Duck;
})(Oldmacdonald || (Oldmacdonald = {}));
//# sourceMappingURL=duck.js.map