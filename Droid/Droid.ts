export namespace Droid {

    interface Command {
        module: string,
        method: string,
        data: string
    }

    
    
    export function getCommand(_state: object): Command {

        console.log(_state);
        const command: Command = {
            module: "Chassis",
            method: "move", 
            data: "forward"
        }
        const random: number = Math.floor(Math.random()*5);

        command.data=["forward","back","left","right","stop"][random];
        console.log(command.data);

        return command
    }
}


//let count: number = 0;

    //export function getCommand(_state: object): Command {
        //console.log(_state);
        //count ++;
        //if (count %2 !== 0){
        //    return {module: "Chassis", method: "move", data: "forward"}
        //    }
        //else{
        //    return {module: "Chassis", method: "move", data: "left"}
        //    }
        //}




