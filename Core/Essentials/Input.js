var Input = (function() {
  class InputClass {
    pressing = false;
    elements = [];
    mouse = null;

    addElement(element){
      return this.elements[this.elements.push(element)-1];
    }
  
    update() {
      this.mouse.set(main.mouseX, main.mouseY);
    }
  
    mPress() {
      this.pressing = true;
      console.log(this.mouse.x, this.mouse.y);
      this.elements.forEach(element => element.mPress())
    }
  
    mDrag() {
    }
  
    mRel() {
      this.pressing = false;
      this.elements.forEach(element => element.mRel())
    }
  
    isPressed(element) {
      return this.elements.get(element).isPressing();
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