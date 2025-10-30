"use strict";
var Oldmacdonald;
(function (Oldmacdonald) {
    class Cow extends Oldmacdonald.Animal {
        specialAction() {
            console.log("Screams in agony");
        }
    }
    Oldmacdonald.Cow = Cow;
})(Oldmacdonald || (Oldmacdonald = {}));
//# sourceMappingURL=cow.js.map