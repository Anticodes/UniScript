class CatPrefab extends GameObject {

  constructor({ name, children, position, scale, rotation } = {}) {
    super({ name, children, transform: new Transform({ position, scale, rotation }) });
    this.addComponent(new CatShadowRenderer(main.color(0, 128)));
    this.addComponent(new CatRenderer({
      color: main.color(107)
    }));
    this.addComponent(new CatController());
  }
}
