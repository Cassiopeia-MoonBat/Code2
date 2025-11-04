"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Vector {
        x = 0;
        y = 0;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static getRandom(_minLength, _maxLength) {
            const vector = new Vector(0, 0);
            const length = _minLength + Math.random() * (_maxLength - _minLength);
            const direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
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
        copy() {
            const copy = new Vector(this.x, this.y);
            return copy;
        }
    }
    L09_Asteroids.Vector = Vector;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Vector.js.map