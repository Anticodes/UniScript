import { main, p5 } from "../../../main";
import UIRenderer from "../../Components/UIComponents/UIRenderer";
import UITransform from "../../Components/UIComponents/UITransform";
import GameObject from "../../GameObject";
import Input from "../../Input";
import Button from "./Button";

class ButtonBar extends GameObject {
  selectedColor: p5.Color;
  selectedButton?: number;
  transform: UITransform;

  constructor({
    name,
    children,
    position,
    size,
    rotation = undefined,
    backgroundColor = main.color(255, 128),
    selectedColor = main.color(200, 100, 100),
  }) {
    super({
      name,
      children,
      transform: new UITransform({ position, size, rotation }),
    });
    this.addComponent(new UIRenderer({ color: backgroundColor }));
    this.selectedColor = selectedColor;
  }

  addChild(gameObject: GameObject) {
    if (this.selectedButton === undefined) this.selectedButton = 0;
    super.addChild(gameObject);
  }

  start() {
    let len = this.childs.length;
    let off = -Math.ceil(-len / 2);
    for (let i = Math.ceil(-len / 2); i < Math.ceil(len / 2); i++) {
      this.childs[i + off].transform.position.set(
        120 * i + (len % 2 === 0 ? 60 : 0),
        0
      );
    }
  }

  update() {
    super.update();
    if (this.selectedButton === undefined) return;
    let selected = this.childs[this.selectedButton].getComponent(
      "UIRenderer"
    ) as UIRenderer;
    let pp = this.childs[this.selectedButton].getParentPositions();
    let tf = this.childs[this.selectedButton].transform as UITransform;
    main.push();
    main.translate(pp.x, pp.y);
    main.rotate(tf.rotation);
    main.stroke(this.selectedColor);
    main.fill(0, 0);
    main.rect(
      0,
      0,
      tf.size.x,
      tf.size.y,
      selected.border[0],
      selected.border[1],
      selected.border[2],
      selected.border[3]
    );
    main.pop();
  }

  mPress(): boolean {
    let index = this.childs.findIndex((button) => (button as Button).mPress());
    this.selectedButton = index > -1 ? index : this.selectedButton;
    let pos = this.getParentPositions();
    let size = this.transform.size;
    if (
      pos.x - size.x / 2 < Input.mouse.x &&
      pos.x + size.x / 2 > Input.mouse.x &&
      pos.y - size.y / 2 < Input.mouse.y &&
      pos.y + size.y / 2 > Input.mouse.y
    ) {
      return true;
    }
    return false;
  }

  mRel() {
    this.childs.findIndex((button) => (button as Button).mRel());
  }
}

export default ButtonBar;
