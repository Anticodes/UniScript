import UIRenderer from "./UIComponents/UIRenderer";
import { main } from "../../main";

class TextRenderer extends UIRenderer {
  text: string;

  constructor({ text = "", color = main.color(200, 200, 200) }) {
    super({ color });
    this.text = text;
  }

  update() {
    main.fill(this.color);
    main.text(this.text, 0, 0);
  }
}

export default TextRenderer;
