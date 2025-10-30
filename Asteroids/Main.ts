namespace L09_Asteroids {

    window.addEventListener("load", handleLoad);

    const asteroids: Asteroid[] = [];

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("fick dich linter, hier haste", _event);
        //console.log("Asteroids Starting");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        createPaths();
        //console.log("Asteroids paths", asteroidPaths);

        createAsterods(5);
        //createShip();

        //canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);

    }

    function shootLaser(_event: MouseEvent): void {
        //console.log("Shoot Laser");
        const hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        const asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }

    function getAsteroidHit(_hotspot: Vector) : Asteroid | null{
        for (const asteroid of asteroids){
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    
    function breakAsteroid(_asteroid: Asteroid): void {
        
        if(_asteroid.size > 0.3) {
            for (let i: number = 0; i<2; i++){
                const fragment: Asteroid = new Asteroid(_asteroid.size /2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }

        const index: number = asteroids.indexOf(_asteroid);
        asteroids.splice(index,1);
    }


    function createAsterods(_nAsteroids: number): void {
        //console.log("Create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            const asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0,0,crc2.canvas.width,crc2.canvas.height);

        for (const asteroid of asteroids) {
            asteroid.move(1/50);
            asteroid.draw();
        }

        //ship.draw();
        //handleCollisions();
    }





}