class Component {
  
  transform;
  gameObject;
  isActive;
  
  constructor(){
    this.isActive = true;
    this.gameObject = null;
    this.transform = null;
  }
  
  start(){}
  update(){}
  
  setActive(bool){
    this.isActive = bool;
  }
}