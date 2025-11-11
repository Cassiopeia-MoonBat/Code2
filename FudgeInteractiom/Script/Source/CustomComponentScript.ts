namespace Script {
  import ƒ = FudgeCore;
  ƒ.Project.registerScriptNamespace(Script);  // Register the namespace to FUDGE for serialization

  export class CustomComponentScript extends ƒ.ComponentScript {
    // Register the script as component for use in the editor via drag&drop
    public static readonly iSubclass: number = ƒ.Component.registerSubclass(CustomComponentScript);
    // Properties may be mutated by users in the editor via the automatically created user interface
    public message: string = "CustomComponentScript added to ";

    public raymond: number = 0;
    public mouse: MouseEvent;

    public constructor() {
      super();

      // Don't start when running in editor
      if (ƒ.Project.mode == ƒ.MODE.EDITOR)
        return;

      // Listen to this component being added to or removed from a node
      
      this.addEventListener(ƒ.EVENT.COMPONENT_ADD, this.hndEvent);
      this.addEventListener(ƒ.EVENT.COMPONENT_REMOVE, this.hndEvent);
      this.addEventListener(ƒ.EVENT.NODE_DESERIALIZED, this.hndEvent);
    };

    // Activate the functions of this component as response to events
    public hndEvent = (_event: Event): void => {
      switch (_event.type) {
        case ƒ.EVENT.COMPONENT_ADD:
          ƒ.Debug.log(this.message, this.node);
          break;
        case ƒ.EVENT.COMPONENT_REMOVE:
          this.removeEventListener(ƒ.EVENT.COMPONENT_ADD, this.hndEvent);
          this.removeEventListener(ƒ.EVENT.COMPONENT_REMOVE, this.hndEvent);
          break;
        case ƒ.EVENT.NODE_DESERIALIZED:
          ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, this.update);
          // if deserialized the node is now fully reconstructed and access to all its components and children is possible
          break;
      }

    };  

    public update = (/*_event: Event*/): void => {
      
    };

    public rotater = (_mouseX: number) : void => {
      const node: ƒ.Node = this.node;
      const cmpTransform: ƒ.ComponentTransform = node.getComponent(ƒ.ComponentTransform);
      cmpTransform.mtxLocal.rotateY(_mouseX);
    
    };

    public move = (_direction: string): void => {
      const node: ƒ.Node = this.node;
      const cmpTransform: ƒ.ComponentTransform = node.getComponent(ƒ.ComponentTransform);
      if(_direction == "w")
        cmpTransform.mtxLocal.translateZ(1);
      if(_direction == "s")
        cmpTransform.mtxLocal.translateZ(-1);
      if(_direction == "a")
        cmpTransform.mtxLocal.rotateY(5);
      if(_direction == "d")
        cmpTransform.mtxLocal.rotateY(-5);
    
    };

    // protected reduceMutator(_mutator: ƒ.Mutator): void {
    //   // delete properties that should not be mutated
    //   // undefined properties and private fields (#) will not be included by default
    // }
  }
}