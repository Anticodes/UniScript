import UITransform from "../../Components/UIComponents/UITransform";
import TextRenderer from "../../Components/TextRenderer";
import GameObject from "../../GameObject";
import { main } from "../../../main";

class Text extends GameObject {
  constructor({
    name,
    children = [],
    position,
    size = undefined,
    rotation = undefined,
    text = "",
    textColor = main.color(0),
  }) {
    super({
      name,
      children,
      transform: new UITransform({ position, size, rotation }),
    });
    this.addComponent(new TextRenderer({ text, color: textColor }));
  }
}

export default Text;
