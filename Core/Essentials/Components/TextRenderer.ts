import UIRenderer from "./UIComponents/UIRenderer";
import { main, p5 } from "../../main";

class TextRenderer extends UIRenderer {
  text: string;

  constructor({ text, color }: { text: string, color: p5.Color }) {
    super({ color });
    this.text = text;
  }

  update() {
    main.fill(this.color);
    main.text(this.text, 0, 0);
  }
}

export default TextRenderer;
