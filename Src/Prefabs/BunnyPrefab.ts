import Transform from "../../Core/Essentials/Components/Transform";
import GameObject from "../../Core/Essentials/GameObject";
import { main } from "../../Core/main";
import BunnyController from "../Scripts/Bunny/BunnyController";
import BunnyRenderer from "../Scripts/Bunny/BunnyRenderer";
import BunnyShadowRenderer from "../Scripts/Bunny/BunnyShadowRenderer";

class BunnyPrefab extends GameObject {
  constructor({ name, children = [], position, scale, rotation }) {
    super({
      name,
      children,
      transform: new Transform({ position, scale, rotation }),
    });
    this.addComponent(new BunnyShadowRenderer({ color: main.color(0, 128) }));
    this.addComponent(new BunnyRenderer({}));
    this.addComponent(new BunnyController());
  }
}

export default BunnyPrefab;
