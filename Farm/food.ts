namespace Oldmacdonald{

    export class Food {
        

        public type: string;
        public amount: number;

        public constructor (_type:string,_amount:number) {

            this.type = _type;
            this.amount = _amount;
            
        }
        
        public showStock() : void { 
            console.log(this.type + this.amount);

        }

        public restock(): void {
            if (this.amount <= 5){
            this.amount += 10;
            }
            
        }


    }
    
}