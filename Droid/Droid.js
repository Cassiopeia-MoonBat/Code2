export var Droid;
(function (Droid) {
    function getCommand(_state) {
        console.log(_state);
        return { module: "Hallo Welt", method: "BrumBrum", data: "gibdir" };
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
//# sourceMappingURL=Droid.js.map