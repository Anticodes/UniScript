class Component {
  
  transform;
  gameObject;
  isActive;
  
  constructor(){
    this.isActive = true;
    this.gameObject = null;
    this.transform = null;
  }
  
  _start(){
    this.start();
  }
  _update(){
    this.update();
  }
  start(){}
  update(){}
  
  setActive(bool){
    this.isActive = bool;
  }
}