namespace Script {
  import ƒ = FudgeCore;
  ƒ.Debug.info("Main Program Template running!");

  let viewport: ƒ.Viewport;
  let currentObject: ƒ.Node;
  //let object: string;
  document.addEventListener("interactiveViewportStarted", <EventListener><unknown>start);
  document.addEventListener("mousedown", hndMouseClick);

  async function start(_event: CustomEvent): Promise<void> {
    viewport = _event.detail;
    //car = carNode.getComponent(carControl);
    const carNode: ƒ.Node = viewport.getBranch().getChildByName("QueerStuffGoBRUMBRUM");
    const carGraph: ƒ.Graph = <ƒ.Graph>ƒ.Project.getResourcesByName("QueerStuffGoBRUMBRUM")[0];


    for (let i: number = 0; i < 10; i++) {
      const carInstance: ƒ.GraphInstance = await ƒ.Project.createGraphInstance(carGraph);
      const position: ƒ.Vector3 = ƒ.random.getVector3(
        new ƒ.Vector3(30, 0, 30), new ƒ.Vector3(-30, 0, -30)
      );
      carInstance.mtxLocal.translate(position);
      carNode.getParent().addChild(carInstance);
    }

    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    ƒ.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
  }


  function hndMouseClick(_event: MouseEvent): void {
    if (_event.button != 2)
      return;
    const vecScreen: ƒ.Vector2 = new ƒ.Vector2(_event.offsetX, _event.offsetY);
    const ray: ƒ.Ray = viewport.getRayFromClient(vecScreen);
    console.log(ray);

    const cars: ƒ.Node[] = viewport.getBranch().getChildrenByName("QueerStuffGoBRUMBRUM");
    for (const car of cars) {
      const vecDistance: ƒ.Vector3 = ray.getDistance(car.mtxWorld.translation);
      console.log(vecDistance.magnitude); 
      car.getComponent(ƒ.ComponentMaterial).clrPrimary = ƒ.Color.CSS("yellow");
      if (vecDistance.magnitude < 2){
        currentObject = car;
        car.getComponent(ƒ.ComponentMaterial).clrPrimary = ƒ.Color.CSS("green");
      }
    }
  }





  function update(/*_event: Event*/): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W]) || ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ARROW_UP]))
      currentObject.getComponent(CustomComponentScript).move("w");
    if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S]) || ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ARROW_DOWN]))
      currentObject.getComponent(CustomComponentScript).move("s");
    if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A]) || ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ARROW_LEFT]))
      currentObject.getComponent(CustomComponentScript).move("a");
    if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D]) || ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ARROW_RIGHT]))
      currentObject.getComponent(CustomComponentScript).move("d");


    viewport.draw();
    ƒ.AudioManager.default.update();
  }






}

// An object of a class, can be replaced by any object of an subclass