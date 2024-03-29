class GameObject{
  
  name;
  parent;
  transform;
  childs;
  components;
  
  
  constructor({ name, children, transform }={}){
    this.components = [];
    this.childs = [];
    children && children.forEach(child => {
      this.addChild(child);
    });
    this.name = name;
    this.parent = null;
    this.transform = transform || new Transform({position: main.createVector(0, 0), scale: main.createVector(1, 1), rotation: main.createVector(0, 0)});
    this.addComponent(this.transform);
  }
  
  start(){
    this.components.forEach(comp => comp._start());
    this.childs.forEach(child => child.start());
  }
  
  update(){
    this.components.forEach(comp => comp._update());
    this.childs.forEach(child => child.update());
  }
  
  setParent(gameObject){
    this.parent = gameObject;
  }
  
  addChild(gameObject){
    gameObject.setParent(this);
    this.childs.push(gameObject);
  }
  
  addComponent(component){
    this.components.push(component);
    component.transform = this.transform;
    component.gameObject = this;
  }
  
  getComponent(className){
    return this.components.find(val => val.constructor.name == className);
  }

  getParentPositions(){
    if(this.parent != null)
      return this.transform.position.copy().add(this.parent.getParentPositions());
    return this.transform.position.copy();
  }
}
