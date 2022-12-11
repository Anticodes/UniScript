import Transform from "../../Core/Essentials/Components/Transform";
import GameObject from "../../Core/Essentials/GameObject";
import { main } from "../../Core/main";
import CatController from "../Scripts/Cat/CatController";
import CatRenderer from "../Scripts/Cat/CatRenderer";
import CatShadowRenderer from "../Scripts/Cat/CatShadowRenderer";

class CatPrefab extends GameObject {
  constructor({ name, children = [], position, scale, rotation }) {
    super({
      name,
      children,
      transform: new Transform({ position, scale, rotation }),
    });
    this.addComponent(new CatShadowRenderer({ color: main.color(0, 128) }));
    this.addComponent(new CatRenderer({ color: main.color(107) }));
    this.addComponent(new CatController());
  }
}

export default CatPrefab;
