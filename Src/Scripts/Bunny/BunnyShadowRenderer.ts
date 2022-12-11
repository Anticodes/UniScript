import CircleRenderer from "../../../Core/Essentials/Components/CircleRenderer";
import { main, p5 } from "../../../Core/main";

class BunnyShadowRenderer extends CircleRenderer {
  offset = main.createVector(1, 1);

  constructor({ color }: { color: p5.Color }) {
    super({ color });
  }

  update() {
    main.push();
    main.rotate(-this.transform!.rotation);
    main.translate(this.offset.x, this.offset.y);
    main.rotate(this.transform!.rotation);
    main.fill(this.color);
    main.ellipse(0, 0, 10, 10);
    main.pop();
  }
}

export default BunnyShadowRenderer;
