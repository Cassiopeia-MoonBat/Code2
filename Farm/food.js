"use strict";
var Oldmacdonald;
(function (Oldmacdonald) {
    class Food {
        type;
        amount;
        constructor(_type, _amount) {
            this.type = _type;
            this.amount = _amount;
        }
        showStock() {
            console.log(this.type + this.amount);
        }
        restock() {
            if (this.amount <= 5) {
                this.amount += 10;
            }
        }
    }
    Oldmacdonald.Food = Food;
})(Oldmacdonald || (Oldmacdonald = {}));
//# sourceMappingURL=food.js.map