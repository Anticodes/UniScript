var Input = (function() {
  class InputClass {
    pressing = false;
    buttons = [];
  
    addButton(pos, scale, text) {
      this.buttons.add(new Button(pos, scale, text));
    }
  
    addButton(pos, scale) {
      this.buttons.add(new Button(pos, scale));
    }
  
    update() {
      this.mouse = main.createVector(main.mouseX, main.mouseY);
      for (button in this.buttons)
        button.update();
    }
  
    mPress() {
      this.pressing = true;
      for (button in this.buttons)
        button.mPress();
    }
  
    mDrag() {
    }
  
    mRel() {
      this.pressing = false;
      for (button in this.buttons)
        button.mRel();
    }
  
    isPressed(button) {
      return this.buttons.get(button).isPressing();
    }
  }
  var instance;
  return {
    getInstance: function() {
      if (instance == null) {
        instance = new InputClass();
        instance.constructor = null;
      }
      return instance;
    }
  };
})();

class Button{
  
  constructor(pos, radius, text){
    this.pos = pos;
    this.radius = radius;
    this.text = text || "";
    this.isActive = true;
    this.pressing = false;
  }
  
  update(){
    if(!this.isActive)return;
    this.render();
  }
  
  render(){
    main.fill(255, 128);
    main.ellipse(this.pos.x*this.scale, this.pos.y*this.scale, this.radius*(this.pressing?1.2:1), this.radius*(this.pressing?1.2:1));
    main.text(this.text, this.pos.x*this.scale, this.pos.y*this.scale);
  }
  
  isPressing(){
    return this.pressing;
  }
  
  mPress(){
    if(!this.isActive || this.pressing)return;
    if(main.dist(this.pos.x*this.scale, this.pos.y*this.scale, main.mouseX, main.mouseY) < this.radius){
      this.pressing = true;
      return;
    }
  }
  
  mRel(){
    if(!this.isActive)return;
    this.pressing = false;
  }
  
  relM(){
    this.pressing = false;
  }
}

function touchStarted(){
  this.input.mPress();
}
  
function touchMoved(){
  this.input.mDrag();
}
  
function touchEnded(){
  this.input.mRel();
}