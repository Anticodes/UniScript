const main = new p5((p) => {
  
  input = Input.getInstance();
  settings = null;
  activeScene = null;
  
  p.setup = () => {
    settings = Settings.getInstance();
    activeScene = settings.activeScene;
    console.log(settings.width, settings.height);
    const cnv = p.createCanvas(settings.width, settings.height);
    //cnv.style('display', 'block');
    cnv.position(0, 0);
    p.noStroke();
    if(settings.isTransformAnchorCenter){
      p.rectMode(p.CENTER);
      p.textAlign(p.CENTER);
    }
    this.activeScene.loadScene();
  }
  
  p.draw = () => {
    Input.getInstance().update();
    Time.getInstance().update();
    p.translate(settings.width/2, settings.height/2);
    p.translate(this.activeScene.mainCamera.transform.position.x, this.activeScene.mainCamera.transform.position.y)
    this.activeScene.updateScene();
    p.translate(-this.activeScene.mainCamera.transform.position.x, -this.activeScene.mainCamera.transform.position.y)
    p.translate(-settings.width/2, -settings.height/2);
  }
  
  p.mousePressed = () => {
    this.input.mPress();
  }
  
  p.mouseDragged = () => {
    this.input.mDrag();
  }
  
  p.mouseReleased = () => {
    this.input.mRel();
  }
  
});