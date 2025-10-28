namespace Coord {

    window.addEventListener("load", hndcanvas);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function hndcanvas(): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        canvas.width = 600;
        canvas.height = 600;
        lesGo();
    }

    function lesGo(): void {

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


}

namespace Classes {


    class Vector {
        
        public x: number = 0;
        public y: number = 0;

        public constructor(_x: number, _y: number) {
        this.set(_x, _y);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        };

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }

    const v1: Vector = new Vector(2, 3);
    v1.scale(2);
    console.log(v1);




}