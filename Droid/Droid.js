export var Droid;
(function (Droid) {
    function getCommand(_state) {
        console.log(_state);
        const command = {
            module: "Chassis",
            method: "move",
            data: "forward"
        };
        const random = Math.floor(Math.random() * 5);
        command.data = ["forward", "back", "left", "right", "stop"][random];
        console.log(command.data);
        return command;
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
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
//# sourceMappingURL=Droid.js.map