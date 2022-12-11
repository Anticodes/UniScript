import CircleRenderer from "../../../Core/Essentials/Components/CircleRenderer";
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
    this.addComponent(new CircleRenderer({ color: main.color(100, 80, 40) }));
  }
}

export default FencePrefab;
