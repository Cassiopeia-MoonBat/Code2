"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", hnddraw);
    function hnddraw() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.width = 900;
        canvas.height = 4000;
        function drawTriangle(_v1, _v2, _v3, _colorfill, _colorstroke) {
            let pathtriangle = new Path2D();
            pathtriangle.moveTo(_v1.x1, _v1.x2);
            pathtriangle.lineTo(_v2.x1, _v2.x2);
            pathtriangle.lineTo(_v3.x1, _v3.x2);
            pathtriangle.lineTo(_v1.x1, _v1.x2);
            crc2.fillStyle = _colorfill;
            crc2.strokeStyle = _colorstroke;
            crc2.fill(pathtriangle);
            crc2.stroke(pathtriangle);
        }
        let v1 = { x1: 10, x2: 0 };
        let v2 = { x1: 20, x2: 3000 };
        let v3 = { x1: 10, x2: 0 };
        let colorfill = "#e26190ff";
        let colorstroke = "#44138430";
        drawTriangle(v1, v2, v3, colorfill, colorstroke);
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map