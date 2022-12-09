import { main } from "../../../main";
import UITransform from "../../Components/UIComponents/UITransform";
import GameObject from "../../GameObject";
import Input from "../../Input";
import UIRenderer from "../../Components/UIComponents/UIRenderer";
import Text from "./Text";

class Button extends GameObject {
  pressing = false;
  callback?: Function;
  transform: UITransform;

  constructor({
    name,
    size,
    text,
    children = undefined,
    position = undefined,
    rotation = undefined,
    callback = undefined,
    backgroundColor = main.color(200),
    textColor = undefined,
    border,
  }) {
    super({
      name,
      children,
      transform: new UITransform({ position, size, rotation }),
    });
    this.addComponent(new UIRenderer({ color: backgroundColor, border }));
    this.addChild(
      new Text({
        name: "Button Text",
        textColor,
        position,
        text,
      })
    );
    this.callback = callback;
  }

  isPressing(): boolean {
    return this.pressing;
  }

  mPress(): boolean {
    let pos = this.getParentPositions();
    let size = this.transform.size;
    if (
      pos.x - size.x / 2 < Input.mouse.x &&
      pos.x + size.x / 2 > Input.mouse.x &&
      pos.y - size.y / 2 < Input.mouse.y &&
      pos.y + size.y / 2 > Input.mouse.y
    ) {
      this.pressing = true;
      if (this.callback !== undefined) this.callback();
    }
    return this.pressing;
  }

  mRel() {
    this.pressing = false;
  }

  relM() {
    this.pressing = false;
  }
}

export default Button;
