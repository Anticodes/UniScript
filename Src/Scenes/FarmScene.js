class FarmScene extends Scene {

  hierarchy() {
    this.addGameObject(this.mainCamera = new Camera({
      name: "Main Camera",
      position: main.createVector(settings.width / 2, settings.height / 2),
    }));
    this.mainCamera.addComponent(new AnimalSpawner());
    this.addUIObject(new Text({
      name: "Info Text",
      position: main.createVector(settings.width / 2, 50),
      text: "Tavşan eklemek için herhangi bir yere tıkla!",
    }));
    this.addUIObject(input.addElement(
      new ButtonBar({
        name: "Spawn Button Bar",
        position: main.createVector(settings.width / 2, settings.height - 50),
        scale: main.createVector(40, 10),
        backgroundColor: main.color(0, 10),
        children: [
          new Button({
            name: "Bunny Button",
            scale: main.createVector(10, 5),
            text: "🐰 Tavşan",
            border: [
              3, 3, 3, 3,
            ],
          }),
          new Button({
            name: "Dog Button",
            scale: main.createVector(10, 5),
            text: "🐶 Köpek",
            border: [
              3, 3, 3, 3,
            ],
          }),
        ]
      }))
    );
  }
}