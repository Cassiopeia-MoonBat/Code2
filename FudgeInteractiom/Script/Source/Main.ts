namespace Script {
  import ƒ = FudgeCore;
  ƒ.Debug.info("Main Program Template running!");

  let viewport: ƒ.Viewport;
  //let cuba: ƒ.Node;
  document.addEventListener("interactiveViewportStarted", <EventListener>start);

  function start(_event: CustomEvent): void {
    viewport = _event.detail;
    //const cubaNode: ƒ.Node = viewport.getBranch().getChildByName("QueerStuffGOBRUMBRUM");
    //cuba = cubaNode.getComponent(CubaControl);
    document.addEventListener("mousemove", hndMouse);

    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    ƒ.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
  }

   function hndMouse(_event: MouseEvent): void{
    viewport.getBranch().getChildByName("QueerStuffGoBRUMBRUM").getComponent(CustomComponentScript).rotater(_event.movementX);

  }

  function update(/*_event: Event*/): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W]))
      viewport.getBranch().getChildByName("QueerStuffGoBRUMBRUM").getComponent(CustomComponentScript).move("w");
    if(ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S]))
      viewport.getBranch().getChildByName("QueerStuffGoBRUMBRUM").getComponent(CustomComponentScript).move("s");
      
  

    viewport.draw();
    ƒ.AudioManager.default.update();
  }


 

}