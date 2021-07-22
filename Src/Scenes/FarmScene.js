class FarmScene extends Scene {

  hierarchy() {
    this.addGameObject(this.mainCamera = new Camera({
      name: "Main Camera",
    }));
    this.mainCamera.addComponent(new BunnySpawner());
    this.addGameObject(new BunnyPrefab({
      name: "Bunny",
      scale: main.createVector(5, 5),
    }));
    this.addUIObject(new Text({
      name: "InfoText",
      position: main.createVector(0, -settings.height / 2 + 50),
      text: "Tavşan eklemek için herhangi bir yere tıkla!",
    }));
  }
}