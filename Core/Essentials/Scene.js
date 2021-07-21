class Scene{
  
  gameObjects = [];
  mainCamera;
  
  loadScene(){
    console.log('Loading the scene');
    this.hierarchy();
    this.gameObjects.forEach(gameObject => gameObject.start())
  }
  
  hierarchy(){}
  
  updateScene(){
    main.background(135, 206, 235);
    this.gameObjects.forEach(gameObject => gameObject.update())
  }
  
  addGameObject(gameObject, parent){
    this.gameObjects.push(gameObject);
    gameObject.setParent(parent);
  }

  setCamera(camera){
    this.mainCamera = camera;
  }
}