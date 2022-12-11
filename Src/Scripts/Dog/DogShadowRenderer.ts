import QuadRenderer from "../../../Core/Essentials/Components/QuadRenderer";
import { main, p5 } from "../../../Core/main";

class DogShadowRenderer extends QuadRenderer {
  offset = main.createVector(1, 1);

  constructor({ color }: { color: p5.Color }) {
    super({ color, border: [3, 5, 5, 3] });
  }

  update() {
    main.push();
    main.rotate(-this.transform.rotation);
    main.translate(this.offset.x, this.offset.y);
    main.rotate(this.transform.rotation);
    main.fill(this.color);
    main.rect(0, 0, 10, 10, 3, 5, 5, 3);
    main.pop();
  }
}

export default DogShadowRenderer;
