class FarmScene extends Scene {

  hierarchy() {
    this.gameObjects.push(this.mainCamera = new Camera("Main Camera"));
    for(let i = 0; i < 10; i++)this.gameObjects.push(new BunnyPrefab({
      name: "Bunny",
      scale: main.createVector(5, 5),
    }));
  }
}