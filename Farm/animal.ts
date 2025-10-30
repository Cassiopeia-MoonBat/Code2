namespace Oldmacdonald{

    export class Animal {

        public name : string;
        public species : string;
        public food : Food;
        public consumption: number;
        public sound: string;


        public constructor(_name:string, _species:string, _food:Food, _consumption:number, _sound:string) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.consumption = _consumption;
            this.sound = _sound;
        }


        public eat(): void {
                this.food.amount -= this.consumption;
            };
    


        public sing(): void {
            console.log(this.species);
            console.log("Old MacDonald had a farm, Ee-aye, ee-aye, oh");
            console.log("And on that farm he had a " + this.species + ",");
            console.log("Ee-aye, ee-aye, oh");
            console.log("With a " + this.sound + " " + this.sound + " here and a " + this.sound +" " + this.sound + " there");
            console.log("Here a " + this.sound + " there a " + this.sound +",");
            console.log("Everywhere a "+ this.sound + " "+ this.sound);
            console.log(" Old MacDonald had a farm, Ee-aye, ee-aye, oh.");
        } 

        public specialAction():void {}
    }

    
    
}

