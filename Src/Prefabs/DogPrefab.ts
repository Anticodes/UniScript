import Transform from "../../Core/Essentials/Components/Transform";
import GameObject from "../../Core/Essentials/GameObject";
import { main } from "../../Core/main";
import DogController from "../Scripts/Dog/DogController";
import DogRenderer from "../Scripts/Dog/DogRenderer";
import DogShadowRenderer from "../Scripts/Dog/DogShadowRenderer";

class DogPrefab extends GameObject {
  constructor({ name, children = [], position, scale, rotation }) {
    super({
      name,
      children,
      transform: new Transform({ position, scale, rotation }),
    });
    this.addComponent(new DogShadowRenderer(main.color(0, 128)));
    this.addComponent(
      new DogRenderer({
        color: main.color(247, 198, 107),
      })
    );
    this.addComponent(new DogController());
  }
}

export default DogPrefab;
