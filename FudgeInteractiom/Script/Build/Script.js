"use strict";
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    ƒ.Project.registerScriptNamespace(Script); // Register the namespace to FUDGE for serialization
    class CustomComponentScript extends ƒ.ComponentScript {
        // Register the script as component for use in the editor via drag&drop
        static { this.iSubclass = ƒ.Component.registerSubclass(CustomComponentScript); }
        constructor() {
            super();
            // Properties may be mutated by users in the editor via the automatically created user interface
            this.message = "CustomComponentScript added to ";
            this.raymond = 0;
            // Activate the functions of this component as response to events
            this.hndEvent = (_event) => {
                switch (_event.type) {
                    case "componentAdd" /* ƒ.EVENT.COMPONENT_ADD */:
                        ƒ.Debug.log(this.message, this.node);
                        break;
                    case "componentRemove" /* ƒ.EVENT.COMPONENT_REMOVE */:
                        this.removeEventListener("componentAdd" /* ƒ.EVENT.COMPONENT_ADD */, this.hndEvent);
                        this.removeEventListener("componentRemove" /* ƒ.EVENT.COMPONENT_REMOVE */, this.hndEvent);
                        break;
                    case "nodeDeserialized" /* ƒ.EVENT.NODE_DESERIALIZED */:
                        ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, this.update);
                        // if deserialized the node is now fully reconstructed and access to all its components and children is possible
                        break;
                }
            };
            this.update = ( /*_event: Event*/) => {
            };
            this.rotater = (_mouseX) => {
                const node = this.node;
                const cmpTransform = node.getComponent(ƒ.ComponentTransform);
                cmpTransform.mtxLocal.rotateY(_mouseX);
            };
            this.move = (_direction) => {
                const node = this.node;
                const cmpTransform = node.getComponent(ƒ.ComponentTransform);
                if (_direction == "w")
                    cmpTransform.mtxLocal.translateZ(1);
                if (_direction == "s")
                    cmpTransform.mtxLocal.translateZ(-1);
                if (_direction == "a")
                    cmpTransform.mtxLocal.rotateY(5);
                if (_direction == "d")
                    cmpTransform.mtxLocal.rotateY(-5);
            };
            // Don't start when running in editor
            if (ƒ.Project.mode == ƒ.MODE.EDITOR)
                return;
            // Listen to this component being added to or removed from a node
            this.addEventListener("componentAdd" /* ƒ.EVENT.COMPONENT_ADD */, this.hndEvent);
            this.addEventListener("componentRemove" /* ƒ.EVENT.COMPONENT_REMOVE */, this.hndEvent);
            this.addEventListener("nodeDeserialized" /* ƒ.EVENT.NODE_DESERIALIZED */, this.hndEvent);
        }
        ;
    }
    Script.CustomComponentScript = CustomComponentScript;
})(Script || (Script = {}));
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    ƒ.Debug.info("Main Program Template running!");
    let viewport;
    let currentObject;
    //let object: string;
    document.addEventListener("interactiveViewportStarted", start);
    document.addEventListener("mousedown", hndMouseClick);
    async function start(_event) {
        viewport = _event.detail;
        //car = carNode.getComponent(carControl);
        const carNode = viewport.getBranch().getChildByName("QueerStuffGoBRUMBRUM");
        const carGraph = ƒ.Project.getResourcesByName("QueerStuffGoBRUMBRUM")[0];
        for (let i = 0; i < 10; i++) {
            const carInstance = await ƒ.Project.createGraphInstance(carGraph);
            const position = ƒ.random.getVector3(new ƒ.Vector3(30, 0, 30), new ƒ.Vector3(-30, 0, -30));
            carInstance.mtxLocal.translate(position);
            carNode.getParent().addChild(carInstance);
        }
        ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, update);
        ƒ.Loop.start(); // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
    }
    function hndMouseClick(_event) {
        if (_event.button != 2)
            return;
        const vecScreen = new ƒ.Vector2(_event.offsetX, _event.offsetY);
        const ray = viewport.getRayFromClient(vecScreen);
        console.log(ray);
        const cars = viewport.getBranch().getChildrenByName("QueerStuffGoBRUMBRUM");
        for (const car of cars) {
            const vecDistance = ray.getDistance(car.mtxWorld.translation);
            console.log(vecDistance.magnitude);
            if (vecDistance.magnitude < 3)
                currentObject = car;
        }
    }
    function update( /*_event: Event*/) {
        // ƒ.Physics.simulate();  // if physics is included and used
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W]) || ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ARROW_UP]))
            currentObject.getComponent(Script.CustomComponentScript).move("w");
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S]) || ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ARROW_DOWN]))
            currentObject.getComponent(Script.CustomComponentScript).move("s");
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A]) || ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ARROW_LEFT]))
            currentObject.getComponent(Script.CustomComponentScript).move("a");
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D]) || ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ARROW_RIGHT]))
            currentObject.getComponent(Script.CustomComponentScript).move("d");
        viewport.draw();
        ƒ.AudioManager.default.update();
    }
})(Script || (Script = {}));
// An object of a class, can be replaced by any object of an subclass
//# sourceMappingURL=Script.js.map