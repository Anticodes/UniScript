class GameObject{
  
  name;
  parent;
  transform;
  childs;
  components;
  
  
  constructor({name, children, position, scale, rotation}={}){
    this.components = [];
    this.childs = [];
    children && children.forEach(child => {
      child.setParent(this);
      this.addChild(child);
    });
    this.name = name;
    this.parent = null;
    this.transform = new Transform({position: position, scale: scale, rotation: rotation});
    this.addComponent(this.transform);
  }
  
  start(){
    this.components.forEach(comp => comp._start())
    this.childs.forEach(child => child.start())
  }
  
  update(){
    this.components.forEach(comp => comp._update())
    this.childs.forEach(child => child.update());
  }
  
  setParent(gameObject){
    this.parent = gameObject;
    this.parent && this.parent.addChild(this);
  }
  
  addChild(gameObject){
    this.childs.push(gameObject);
    child.start();
  }
  
  addComponent(component){
    this.components.push(component);
    component.transform = this.transform;
    component.gameObject = this;
  }
  
  getComponent(className){
    return this.components.find(val => val.constructor.name == className);
  }
}