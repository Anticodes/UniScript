import p5 from "p5";
import Input from "./Essentials/Input";
import Settings from "../Settings";
import Time from "./Essentials/Time";

let main: any;

new p5((p: any) => {
  p.disableFriendlyErrors = true;
  main = p;

  p.setup = () => {
    Input.mouse = p.createVector(0, 0);
    Settings.initialize(p);
    p.activeScene = Settings.activeScene;
    console.log(Settings.width, Settings.height);
    const cnv = p.createCanvas(Settings.width, Settings.height);
    //cnv.style('display', 'block');
    cnv.position(0, 0);
    p.noStroke();
    if (Settings.isTransformAnchorCenter) {
      p.rectMode(p.CENTER);
      p.textAlign(p.CENTER, p.CENTER);
    }
    p.activeScene.loadScene();
  };

  p.draw = () => {
    Input.update(p.mouseX, p.mouseY);
    Time.update(p.millis());
    p.activeScene.updateScene();
  };

  p.mousePressed = () => {
    Input.mPress(p.mouseX, p.mouseY);
  };

  p.mouseDragged = () => {
    Input.mDrag();
  };

  p.mouseReleased = () => {
    Input.mRel(p.mouseX, p.mouseY);
  };
});

export { main, p5 };
