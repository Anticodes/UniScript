class FarmScene extends Scene {

  hierarchy() {
    this.gameObjects.push(this.mainCamera = new Camera("Main Camera"));
    this.gameObjects.push(new BunnyPrefab({
      name: "Bunny",
      scale: main.createVector(10, 10),
    }));
  }
}