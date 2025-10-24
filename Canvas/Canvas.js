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
        let v1 = { x1: 100, x2: 300 };
        let v2 = { x1: 20, x2: 600 };
        let v3 = { x1: 600, x2: 0 };
        let colorfill = "#e26190ff";
        let colorstroke = "#44138430";
        drawTriangle(v1, v2, v3, colorfill, colorstroke);
        for (let i = 0; i <= 200; i++) {
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            function getRandomNumber() {
                return Math.floor(Math.random() * 400);
            }
            let v1 = { x1: getRandomNumber(), x2: getRandomNumber() };
            let v2 = { x1: getRandomNumber(), x2: getRandomNumber() };
            let v3 = { x1: getRandomNumber(), x2: getRandomNumber() };
            let colorfill = getRandomColor();
            let colorstroke = getRandomColor();
            drawTriangle(v1, v2, v3, colorfill, colorstroke);
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map