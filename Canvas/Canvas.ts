namespace Canvas {

    window.addEventListener("load", hnddraw);
    

    function hnddraw () : any {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        canvas.width = 900;
        canvas.height = 4000;
        

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




        type Vector = {
            x1: number,
            x2: number,
        }

        function drawTriangle (_v1: Vector, _v2: Vector, _v3: Vector, _colorfill : string, _colorstroke: string) {
            let pathtriangle: Path2D = new Path2D();
            pathtriangle.moveTo(_v1.x1,_v1.x2);
            pathtriangle.lineTo(_v2.x1,_v2.x2);
            pathtriangle.lineTo(_v3.x1,_v3.x2);
            pathtriangle.lineTo(_v1.x1,_v1.x2);
            crc2.fillStyle = _colorfill;
            crc2.strokeStyle = _colorstroke;
            crc2.fill(pathtriangle);
            crc2.stroke(pathtriangle);
        }


        let v1: Vector = {x1: 100,x2: 300};
        let v2: Vector = {x1: 20,x2: 600};
        let v3: Vector = {x1: 600,x2: 0};
        let colorfill = "#e26190ff";
        let colorstroke = "#44138430";


        drawTriangle(v1,v2,v3,colorfill,colorstroke);
    


    for (let i=0;i<=200;i++) {

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function getRandomNumber(){
            return Math.floor(Math.random()*400);
        }

        let v1: Vector = {x1: getRandomNumber() ,x2: getRandomNumber()};
        let v2: Vector = {x1: getRandomNumber(),x2: getRandomNumber() };
        let v3: Vector = {x1:getRandomNumber() ,x2: getRandomNumber()};
        let colorfill = getRandomColor();
        let colorstroke = getRandomColor();


        drawTriangle(v1,v2,v3,colorfill,colorstroke);
    }


    }












}