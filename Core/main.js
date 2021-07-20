const main = new p5((p) => {
  
  input = Input.getInstance();
  activeScene = setActiveScene();
  
  setup = () => {
    p.createCanvas(1200, 1200);
    p.noStroke();
    this.activeScene.loadScene();
  }
  
  draw = () => {
    p.background(0);
    translate(600, 600);
    this.activeScene.updateScene();
    translate(-600, -600);
  }
  
  mousePressed = () => {
    this.input.mPress();
  }
  
  mouseDragged = () => {
    this.input.mDrag();
  }
  
  mouseReleased = () => {
    this.input.mRel();
  }
  
});