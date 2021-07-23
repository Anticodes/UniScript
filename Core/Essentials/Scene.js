class Scene{
  
  gameObjects = [];
  uiObjects = [];
  mainCamera;
  
  loadScene(){
    console.log('Loading the scene');
    this.hierarchy();
    this.gameObjects.forEach(gameObject => gameObject.start());
    this.uiObjects.forEach(uiObject => uiObject.start());
  }
  
  hierarchy(){}
  
  updateScene(){
    main.background(126, 200, 80);
    this.gameObjects.forEach(gameObject => gameObject.update());
    this.uiObjects.forEach(uiObject => uiObject.update());
  }

  instantiate(gameObject){
    this.addGameObject(gameObject);
    gameObject.start();
    return gameObject;
  }
  
  addGameObject(gameObject){
    this.gameObjects.push(gameObject);
  }

  addUIObject(uiObject){
    this.uiObjects.push(uiObject);
  }

  setCamera(camera){
    this.mainCamera = camera;
  }

  findGameObjectByName(name){
    return this.gameObjects.find(obj => obj.name === name);
  }

  findUIObjectByName(name){
    return this.uiObjects.find(obj => obj.name === name);
  }
}