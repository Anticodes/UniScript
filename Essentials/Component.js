class Component {
  
  isActive = true;
  gameObject;
  transform;
  
  constructor(gameObject, transform){
    this.gameObject = gameObject;
    this.transform = transform;
  }
  
  start();
  update();
  
  setActive(bool){
    isActive = bool;
  }
}