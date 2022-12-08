const main = new p5((p) => {

  p.disableFriendlyErrors = true;
  input = Input.getInstance();
  settings = null;
  activeScene = null;

  p.setup = () => {
    settings = Settings.getInstance();
    input.mouse = main.createVector(0, 0);
    activeScene = settings.activeScene;
    console.log(settings.width, settings.height);
    const cnv = p.createCanvas(settings.width, settings.height);
    //cnv.style('display', 'block');
    cnv.position(0, 0);
    p.noStroke();
    if (settings.isTransformAnchorCenter) {
      p.rectMode(p.CENTER);
      p.textAlign(p.CENTER, p.CENTER);
    }
    this.activeScene.loadScene();
  }

  p.draw = () => {
    Input.getInstance().update();
    Time.getInstance().update();
    if (this.activeScene.mainCamera) {
      p.translate(this.activeScene.mainCamera.transform.position.x, this.activeScene.mainCamera.transform.position.y)
      this.activeScene.updateScene();
    }else{
      p.background(0);
      p.fill(255);
      p.textSize(34);
      p.text("No main camera set on the active scene", settings.width/2, settings.height/2);
    }
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
