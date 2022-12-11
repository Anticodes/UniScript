import Renderer from "../Renderer";
import { main, p5 } from "../../../main";
import UITransform from "./UITransform";

class UIRenderer extends Renderer {
  color: p5.Color;
  border: number[];
  transform: UITransform;

  constructor({ color, border = [0, 0, 0, 0] }: { color: p5.Color, border?: number[] }) {
    super();
    this.color = color;
    this.border = border;
  }

  update() {
    main.fill(this.color);
    main.rect(
      0,
      0,
      this.transform.size.x,
      this.transform.size.y,
      this.border[0],
      this.border[1],
      this.border[2],
      this.border[3]
    );
  }
}

export default UIRenderer;
