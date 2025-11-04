namespace L09_Asteroids {

    export class Projectile extends Moveable {
        public lifetime: number = 2;
        //private maxLifetime: number;

        public constructor(_position: Vector, _velocity: Vector) {
            super(_position);
            this.velocity = _velocity.copy();
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-1, -1, 3, 3);
            crc2.restore();
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;

        }


    }


}