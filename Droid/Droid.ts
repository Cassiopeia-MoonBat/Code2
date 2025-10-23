export namespace Droid {

    interface Command {
        module: string,
        method: string,
        data: string
    }



    export function getCommand(_state: object): Command {
        console.log(_state);
        return {module: "Hallo Welt", method: "BrumBrum", data: "gibdir"}
    }
}