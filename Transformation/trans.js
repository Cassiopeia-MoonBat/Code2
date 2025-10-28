"use strict";
var Coord;
(function (Coord) {
    window.addEventListener("load", hndcanvas);
    let canvas;
    let crc2;
    function hndcanvas() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = 600;
        canvas.height = 600;
        lesGo();
    }
    function lesGo() {
        crc2.strokeStyle = "orange";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(200, 0);
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 200);
        crc2.closePath();
        crc2.stroke();
    }
    //I am far behind...
})(Coord || (Coord = {}));
var Classes;
(function (Classes) {
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
    }
    const v1 = new Vector(2, 3);
    v1.scale(2);
    console.log(v1);
})(Classes || (Classes = {}));
//# sourceMappingURL=trans.js.map