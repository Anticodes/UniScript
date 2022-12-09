import CircleRenderer from "../../../Core/Essentials/Components/CircleRenderer";
import { main, p5 } from "../../../Core/main";

class BunnyShadowRenderer extends CircleRenderer {
  offset = main.createVector(1, 1);

  constructor(color: p5.Color = undefined) {
    super(color);
  }

  update() {
    main.push();
    main.rotate(-this.transform!.rotation);
    main.translate(this.offset.x, this.offset.y);
    main.rotate(this.transform!.rotation);
    main.fill(this.color);
    main.ellipse(0, 0, 10, 10);
    /*main.triangle(4, -2, -3, -5, -2, -6);
    main.triangle(4, 2, -3, 5, -2, 6);
    main.ellipse(-4, 0, 2, 2);*/
    main.pop();
  }
}

export default BunnyShadowRenderer;
