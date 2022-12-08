class FarmScene extends Scene {

  hierarchy() {
    this.addGameObject(this.mainCamera = new Camera({
      name: "Main Camera",
      position: main.createVector(settings.width / 2, settings.height / 2),
    }));
    this.mainCamera.addComponent(new AnimalSpawner());
    this.addUIObject(new Text({
      name: "Info Text",
      position: main.createVector(settings.width / 2, 40),
      text: "Hayvan eklemek için herhangi bir yere tıkla!",
    }));
    this.addUIObject(input.addElement(
      new ButtonBar({
        name: "Spawn Button Bar",
        position: main.createVector(settings.width / 2, settings.height - 50),
        size: main.createVector(400, 100),
        backgroundColor: main.color(0, 10),
        children: [
          new Button({
            name: "Bunny Button",
            size: main.createVector(100, 50),
            text: "🐰 Tavşan",
            border: [
              30, 30, 30, 30,
            ],
          }),
          new Button({
            name: "Dog Button",
            size: main.createVector(100, 50),
            text: "🐶 Köpek",
            border: [
              30, 30, 30, 30,
            ],
          }),
          new Button({
            name: "Cat Button",
            size: main.createVector(100, 50),
            text: "🐱 Kedi",
            border: [
              30, 30, 30, 30,
            ],
          }),
        ]
      }))
    );
  }
}
