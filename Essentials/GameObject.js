class GameObject{
  
  name;
  components = [];
  
  constructor(){
    
    components.push(new Transform(0, 0));
    start();
  }
  
  start(){
    components.forEach(comp => {
      comp.start();
    })
  }
  
  update(){
    components.forEach(comp => {
      comp.update();
    })
  }
  
  getComponent(className){
    components.classList.contains(className);
  }
}