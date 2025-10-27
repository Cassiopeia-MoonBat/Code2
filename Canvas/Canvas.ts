namespace Canvas {

    window.addEventListener("load", hnddraw);


    type Vector = {
        x1: number,
        x2: number,
    }

    function hnddraw(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        canvas.width = 900;
        canvas.height = 900;

        const radius: number = Number(prompt("Radius of the pizzza"))!;
        const amount: number = Number(prompt("Amount of pieces"))!;

        



        function drawTriangle(_v1: Vector, _v2: Vector, _v3: Vector, _colorfill: string, _colorstroke: string): void {
            const pathtriangle: Path2D = new Path2D();
            pathtriangle.moveTo(_v1.x1, _v1.x2);
            pathtriangle.lineTo(_v2.x1, _v2.x2);
            pathtriangle.lineTo(_v3.x1, _v3.x2);
            pathtriangle.lineTo(_v1.x1, _v1.x2);
            crc2.fillStyle = _colorfill;
            crc2.strokeStyle = _colorstroke;
            crc2.fill(pathtriangle);
            crc2.stroke(pathtriangle);
        }


        // let v1: Vector = {x1: 100,x2: 300};
        // let v2: Vector = {x1: 20,x2: 600};
        // let v3: Vector = {x1: 600,x2: 0};
        // let colorfill = "#e26190ff";
        // let colorstroke = "#44138430";


        // drawTriangle(v1,v2,v3,colorfill,colorstroke);



        for (let i: number = 0; i <= 200; i++) {

            function getRandomColor(): string {
                const letters: string = '0123456789ABCDEF';
                let color: string = '#';
                for (let i: number = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function getRandomNumber(): number {
                return Math.floor(Math.random() * 400);
            }

            const v1: Vector = { x1: getRandomNumber(), x2: getRandomNumber() };
            const v2: Vector = { x1: getRandomNumber(), x2: getRandomNumber() };
            const v3: Vector = { x1: getRandomNumber(), x2: getRandomNumber() };
            const colorfill: string = getRandomColor();
            const colorstroke: string = getRandomColor();


            drawTriangle(v1, v2, v3, colorfill, colorstroke);




            pizzzaCalc(radius, amount);
        }






        function pizzzaCalc(_radius: number, _amount: number): void {
            const center: Vector = { x1: 600, x2: 200 };
            const step: number = 2 * Math.PI / _amount;
            const coordX : Vector[]= [];

            for (let i: number = 0; i < _amount; i++) {
                const calc : Vector = {x1: Math.sin(step*i)*_radius ,x2: Math.cos(step*i)*_radius};
                
                coordX.push({x1: calc.x1+center.x1, x2: calc.x2+center.x2});
            }

            for (let i: number = 0; i < _amount; i++) {
                drawTriangle(center, coordX[i], coordX[(i+1) % _amount], "#000000", "#FFFF00");
            }
        }


    }







    //function drewTiangle() {

    // crc2.fillStyle = "#159365ff";
    // crc2.fillRect(60, 60, crc2.canvas.width, crc2.canvas.height);


    // crc2.beginPath();
    // crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    // crc2.strokeStyle = "#6f4306ff"; //color of the line/stroke
    // crc2.closePath(); //does close the circle at the angle points (straight line)
    // crc2.stroke(); //Executes the pathline


    // crc2.beginPath();
    // crc2.ellipse(70,150,6,60,5,120,180,false);
    // crc2.stroke(); //Executes the pathline

    // for(let i: number =0; i <= 100; i++){
    //     crc2.beginPath();
    //     crc2.lineTo(200 + 2*i,300);
    //     crc2.lineTo(300 + 2*i,300 -i);
    //     crc2.lineTo(300 + 2*i,100);
    //     crc2.lineTo(200 + 2*i,300 - i);
    //     crc2.fillStyle = "#7266b1e3";
    //     crc2.stroke();
    //     crc2.fill();
    // }

    // let path: Path2D = new Path2D();
    // path.arc(60, 60, 50, 0, 2 * Math.PI);
    // crc2.stroke(path);

    //} 








}