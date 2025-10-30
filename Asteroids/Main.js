"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleLoad);
    const asteroids = [];
    function handleLoad(_event) {
        console.log("fick dich linter, hier haste", _event);
        //console.log("Asteroids Starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Asteroids.crc2 = canvas.getContext("2d");
        L09_Asteroids.crc2.fillStyle = "black";
        L09_Asteroids.crc2.strokeStyle = "white";
        L09_Asteroids.createPaths();
        //console.log("Asteroids paths", asteroidPaths);
        createAsterods(5);
        //createShip();
        //canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        //console.log("Shoot Laser");
        const hotspot = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (const asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new L09_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        const index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsterods(_nAsteroids) {
        //console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new L09_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        //ship.draw();
        //handleCollisions();
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map