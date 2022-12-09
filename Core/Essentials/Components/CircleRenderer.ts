import Renderer from "./Renderer";
import { main, p5 } from "../../main";

class CircleRenderer extends Renderer {
  color: p5.Color;

  constructor(color = main.color(200, 200, 200)) {
    super();
    this.color = color;
  }

  update() {
    main.fill(this.color);
    main.ellipse(0, 0, 10, 10);
  }
}

export default CircleRenderer;
