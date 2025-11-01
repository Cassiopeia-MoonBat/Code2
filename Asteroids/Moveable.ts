namespace L09_Asteroids {

    export class Moveable {

        public position: Vector;
        public velocity: Vector;
        public expendable: boolean = false;

        public constructor(_position?: Vector) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0,0);
        }

        public move(_timeslice: number): void {
            const offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        public draw(): void {

        }

//         public isHit(_hotspot: Vector): boolean {
//             const hitsize: number = 50 * this.size;
//             const difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
//             return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
//        }

    }
}

