import QuadRenderer from "../../../Core/Essentials/Components/QuadRenderer";
import Transform from "../../../Core/Essentials/Components/Transform";
import GameObject from "../../../Core/Essentials/GameObject";
import { main } from "../../../Core/main";

class FencePrefab extends GameObject {
  constructor({ name, children = [], position, scale, rotation }) {
    super({
      name,
      children,
      transform: new Transform({ position, scale, rotation }),
    });
    this.addComponent(new QuadRenderer({ color: main.color(90, 70, 30) }));
  }
}

export default FencePrefab;
