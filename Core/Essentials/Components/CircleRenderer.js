class CircleRenderer extends Renderer {

  color;

  constructor(color) {
    super();
    this.color = color || main.color(200, 200, 200);
  }

  update() {
    main.fill(this.color);
    main.ellipse(0, 0, 10, 10);
  }
}