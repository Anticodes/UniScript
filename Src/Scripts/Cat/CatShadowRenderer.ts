import QuadRenderer from "../../../Core/Essentials/Components/QuadRenderer";
import { main } from "../../../Core/main";

class CatShadowRenderer extends QuadRenderer {
  offset = main.createVector(1, 1);

  constructor(color) {
    super({ color: color });
  }

  update() {
    main.push();
    main.rotate(-this.transform.rotation);
    main.translate(this.offset.x, this.offset.y);
    main.rotate(this.transform.rotation);
    main.fill(this.color);
    main.rect(0, 0, 10, 10, 3, 6, 6, 3);
    /*main.triangle(4, -2, -3, -5, -2, -6);
    main.triangle(4, 2, -3, 5, -2, 6);
    main.ellipse(-4, 0, 2, 2);*/
    main.pop();
  }
}

export default CatShadowRenderer;
