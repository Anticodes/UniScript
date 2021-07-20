class Scene{
  
  gameObjects = [];
  
  loadScene(){
    console.log('Loading the scene');
    this.hierarchy();
    this.gameObjects.forEach(gameObject => gameObject.start())
  }
  
  hierarchy(){}
  
  updateScene(){
    this.gameObjects.forEach(gameObject => gameObject.update())
  }
  
  addGameObject(gameObject, parent){
    this.gameObjects.push(gameObject);
    gameObject.setParent(parent);
  }
}