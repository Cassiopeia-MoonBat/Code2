"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid extends L09_Asteroids.Moveable {
        size;
        type;
        constructor(_size, _position) {
            super(_position);
            this.velocity = L09_Asteroids.Vector.getRandom(60, 100);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        // public move(_timeslice: number): void {
        //     //console.log("Asteroid move");
        //     const offset: Vector = new Vector(this.velocity.x,this.velocity.y);
        //     offset.scale(_timeslice);
        //     this.position.add(offset);
        //     if(this.position.x < 0)
        //         this.position.x += crc2.canvas.width;
        //     if(this.position.y < 0)
        //         this.position.y += crc2.canvas.height;
        //     if(this.position.x > crc2.canvas.width)
        //         this.position.x -= crc2.canvas.width;
        //     if (this.position.y > crc2.canvas.height)
        //         this.position.y -= crc2.canvas.height;
        // }
        draw() {
            //console.log("Asteroid.draw");
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.scale(this.size, this.size);
            L09_Asteroids.crc2.translate(-50, -50);
            L09_Asteroids.crc2.lineWidth = 1 / this.size;
            L09_Asteroids.crc2.stroke(L09_Asteroids.asteroidPaths[this.type]);
            L09_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            const hitsize = 50 * this.size;
            const difference = new L09_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map