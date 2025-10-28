// Old MacDonald had a farm,
// Ee-aye, ee-aye, oh
// And on his/that farm he had a [Tiername],
// Ee-aye, ee-aye, oh
// With a [Tiergeräusch ×2] here and a [Tiergeräusch ×2] there
// Here a [Tiergeräusch], there a [Tiergeräusch],
// Everywhere a [Tiergeräusch ×2]
// Old MacDonald had a farm,
// Ee-aye, ee-aye, oh. 

namespace Oldmacdonald {

    const hay: Food = new Food("hay",20);
    const diesel: Food = new Food("diesel",20);
    const electricity: Food = new Food("electricity",15);
    const corn: Food = new Food("corn", 15);

    const stock: Food[] = [hay,diesel,electricity,corn];

    const ani: Animal = new Animal("Alan", "cow", hay, 4, "moo");
    const ani2: Animal = new Animal("Bro", "car", diesel, 2, "brum");
    const ani3: Animal = new Animal("Simon", "duck", corn, 5, "quack");
    const ani4: Animal = new Animal("Ray", "unrayengine", electricity, 3, "SHAW");
    const ani1: Animal = new Animal("Hanees", "sheep", hay, 3, "blend");

    const farm: Animal[] = [ani, ani1, ani2, ani3, ani4];

    

    window.addEventListener("load", hndlLoad);

    function hndlLoad(): void {
        dayCycle();
    }


    function dayCycle(): void {


        for (const animal of farm) {
            animal.sing();
            animal.eat();
        }
        for (const numb of stock){
            numb.showStock();
            numb.restock();
        }
        alert("next day");
    }

}




