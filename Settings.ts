import Scene from "./Core/Essentials/Scene";
import FarmScene from "./Src/Scenes/FarmScene";

class Settings {
  //Only change these values
  width: number = 640;
  height: number = 480;
  isTransformAnchorCenter: boolean = true;
  activeScene: Scene = new FarmScene();

  initialize(main: any) {
    this.width = main.windowWidth;
    this.height = main.windowHeight;
  }
}

export default new Settings();
