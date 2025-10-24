"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", hnddraw);
    function hnddraw() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.width = 500;
        canvas.height = 400;
        crc2.fillStyle = "#159365ff";
        crc2.fillRect(60, 60, crc2.canvas.width, crc2.canvas.height);
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
        crc2.strokeStyle = "#6f4306ff"; //color of the line/stroke
        crc2.closePath(); //does close the circle at the angle points (straight line)
        crc2.stroke(); //Executes the pathline
        crc2.beginPath();
        crc2.ellipse(70, 150, 6, 60, 5, 120, 180, false);
        crc2.stroke(); //Executes the pathline
        crc2.beginPath();
        crc2.lineTo(200, 300);
        crc2.lineTo(300, 300);
        crc2.lineTo(300, 100);
        crc2.lineTo(200, 300);
        crc2.fillStyle = "#7266b1e3";
        crc2.stroke();
        crc2.fill();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map