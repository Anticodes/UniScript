class CatRenderer extends QuadRenderer {

  tailAngle = 0;

  constructor(color) {
    super(color);
    this.border = [
      3, 6, 6, 3,
    ];
  }

  update() {
    this.tailAngle += .02;
    super.update();
    main.scale(1 / this.transform.scale.x, 1 / this.transform.scale.y);
    main.push();
    main.scale(this.transform.scale.x, this.transform.scale.x);
    main.fill(200);
    main.triangle(1.5, -1, 3, -1.5, 2.5, -0.2);
    main.triangle(1.5, 1, 3, 1.5, 2.5, 0.2);
    main.translate(-5.25, 0);
    main.rotate(Math.sin(this.tailAngle)*.5);
    main.ellipse(-2, 0, 5, 1);
    main.pop();
  }
}