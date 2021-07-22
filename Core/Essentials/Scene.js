class Scene{
  
  gameObjects = [];
  uiObjects = [];
  mainCamera;
  
  loadScene(){
    console.log('Loading the scene');
    this.hierarchy();
  }
  
  hierarchy(){}
  
  updateScene(){
    main.background(135, 206, 235);
    this.gameObjects.forEach(gameObject => gameObject.update());
    this.uiObjects.forEach(uiObject => uiObject.update());
  }
  
  addGameObject(gameObject){
    this.gameObjects.push(gameObject);
    gameObject.start();
  }

  addUIObject(uiObject){
    this.uiObjects.push(uiObject);
    uiObject.start();
  }

  setCamera(camera){
    this.mainCamera = camera;
  }
}