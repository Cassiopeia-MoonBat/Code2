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
    //let cuba: ƒ.Node;
    document.addEventListener("interactiveViewportStarted", start);
    function start(_event) {
        viewport = _event.detail;
        //const cubaNode: ƒ.Node = viewport.getBranch().getChildByName("QueerStuffGOBRUMBRUM");
        //cuba = cubaNode.getComponent(CubaControl);
        document.addEventListener("mousemove", hndMouse);
        ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, update);
        ƒ.Loop.start(); // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
    }
    function hndMouse(_event) {
        viewport.getBranch().getChildByName("QueerStuffGoBRUMBRUM").getComponent(Script.CustomComponentScript).rotater(_event.movementX);
    }
    function update( /*_event: Event*/) {
        // ƒ.Physics.simulate();  // if physics is included and used
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W]))
            viewport.getBranch().getChildByName("QueerStuffGoBRUMBRUM").getComponent(Script.CustomComponentScript).move("w");
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S]))
            viewport.getBranch().getChildByName("QueerStuffGoBRUMBRUM").getComponent(Script.CustomComponentScript).move("s");
        viewport.draw();
        ƒ.AudioManager.default.update();
    }
})(Script || (Script = {}));
//# sourceMappingURL=Script.js.map