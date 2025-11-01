"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Projectile extends L09_Asteroids.Moveable {
        lifetime = 2;
        constructor(_position, _velocity) {
            super(_position);
            this.velocity = _velocity.copy();
        }
        draw() {
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.strokeRect(-1, -1, 3, 3);
            L09_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    L09_Asteroids.Projectile = Projectile;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Projectile.js.map