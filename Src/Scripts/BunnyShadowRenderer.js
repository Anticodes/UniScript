class BunnyShadowRenderer extends CircleRenderer {

  offset = main.createVector(1, 1);

  constructor(color) {
    super(color);
  }

  update() {
    super.update();
    main.push();
    main.triangle(4, -2, -3, -5, -2, -6);
    main.triangle(4, 2, -3, 5, -2, 6);
    main.ellipse(-4, 0, 2, 2);
    main.pop();
  }
}