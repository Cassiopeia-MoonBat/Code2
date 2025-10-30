"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Vector {
        x = 0;
        y = 0;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        ;
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            const length = _minLength + Math.random() * (_maxLength - _minLength);
            const direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            const copy = new Vector(this.x, this.y);
            return copy;
        }
    }
    L09_Asteroids.Vector = Vector;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Vector.js.map