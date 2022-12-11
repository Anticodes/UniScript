import { p5 } from "../../main";
import Component from "../Components/Component";
import Transform from "../Components/Transform";
import GameObject from "../GameObject";

class Camera extends GameObject {
  constructor({ name, position, components }: { name: string, position: p5.Vector, components?: Component[] }) {
    super({ name, transform: new Transform({ position }), components });
  }
}

export default Camera;
