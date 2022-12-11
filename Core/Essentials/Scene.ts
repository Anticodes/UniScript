import GameObject from "./GameObject";
import Camera from "./Prefabs/Camera";
import { main, p5 } from "../main";
import Settings from "../../Settings";

class Scene {
  gameObjects: GameObject[] = [];
  uiObjects: GameObject[] = [];
  mainCamera: Camera;
  background: p5.Color;
  
  loadScene() {
    console.log("Loading the scene");
    this.background = main.color(0);
    this.hierarchy();
    this.gameObjects.forEach((gameObject) => gameObject.start());
    this.uiObjects.forEach((uiObject) => uiObject.start());
  }

  hierarchy() { }

  updateScene() {
    if(!this.mainCamera){
      main.background(0);
      main.fill(255);
      main.textSize(34);
      main.text(
        "No main camera set on the active scene",
        Settings.width / 2,
        Settings.height / 2
      );
      return;
    }
    main.background(this.background);

    main.translate(
      this.mainCamera.transform.position.x,
      this.mainCamera.transform.position.y
    );
    this.gameObjects.forEach((gameObject) => gameObject.update());

    main.translate(
      -this.mainCamera.transform.position.x,
      -this.mainCamera.transform.position.y
    );
    this.uiObjects.forEach((uiObject) => uiObject.update());
  }

  instantiate(gameObject: GameObject): GameObject {
    this.addGameObject(gameObject);
    gameObject.start();
    return gameObject;
  }

  addGameObject(gameObject: GameObject) {
    this.gameObjects.push(gameObject);
  }

  addUIObject(uiObject: GameObject) {
    this.uiObjects.push(uiObject);
  }

  setCamera(camera: Camera) {
    this.mainCamera = camera;
  }

  findGameObjectByName(name: string): GameObject | undefined {
    return this.gameObjects.find((obj) => obj.name === name);
  }

  findUIObjectByName(name: string): GameObject | undefined {
    return this.uiObjects.find((obj) => obj.name === name);
  }
}

export default Scene;
