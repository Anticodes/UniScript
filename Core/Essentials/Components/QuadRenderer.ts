import Renderer from "./Renderer";
import { main, p5 } from "../../main";

class QuadRenderer extends Renderer {
  color: p5.Color;
  border: number[];

  constructor({ color = main.color(200, 200, 200), border = [0, 0, 0, 0] }) {
    super();
    this.color = color;
    this.border = border;
  }

  update() {
    main.fill(this.color);
    main.rect(
      0,
      0,
      10,
      10,
      this.border[0],
      this.border[1],
      this.border[2],
      this.border[3]
    );
  }
}

export default QuadRenderer;