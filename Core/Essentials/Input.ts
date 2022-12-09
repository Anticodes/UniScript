import { p5 } from "../main";
import GameObject from "./GameObject";

class Input {
  pressing: boolean = false;
  elements: any[] = [];
  mouse?: p5.Vector;

  addElement(element: GameObject) {
    return this.elements[this.elements.push(element) - 1];
  }

  update(mouseX: number, mouseY: number) {
    this.mouse.set(mouseX, mouseY);
  }

  mPress(mouseX: number, mouseY: number) {
    this.update(mouseX, mouseY);
    let found = this.elements.find(
      (element) => "mPress" in element && element.mPress()
    );
    this.pressing = found === undefined;
  }

  mDrag() {}

  mRel(mouseX: number, mouseY: number) {
    this.update(mouseX, mouseY);
    this.pressing = false;
    this.elements.forEach((element) => "mRel" in element && element.mRel());
  }
}

export default new Input();
