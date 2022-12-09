import GameObject from "../GameObject";
import Transform from "./Transform";
import UITransform from "./UIComponents/UITransform";

class Component {
  transform: Transform | UITransform;
  gameObject?: GameObject;
  isActive: boolean;

  constructor() {
    this.isActive = true;
  }

  _start() {
    this.start();
  }
  _update() {
    if (this.isActive) this.update();
  }
  start() {}
  update() {}

  setActive(bool: boolean) {
    this.isActive = bool;
  }
}

export default Component;
