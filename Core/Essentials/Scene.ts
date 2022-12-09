import GameObject from "./GameObject";
import Camera from "./Prefabs/Camera";
import { main } from "../main";

class Scene {
  gameObjects: GameObject[] = [];
  uiObjects: GameObject[] = [];
  mainCamera: Camera;

  loadScene() {
    console.log("Loading the scene");
    this.hierarchy();
    this.gameObjects.forEach((gameObject) => gameObject.start());
    this.uiObjects.forEach((uiObject) => uiObject.start());
  }

  hierarchy() {}

  updateScene() {
    main.background(126, 200, 80);
    this.gameObjects.forEach((gameObject) => gameObject.update());
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
