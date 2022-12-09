import Transform from "./Components/Transform";
import UITransform from "./Components/UIComponents/UITransform";
import Component from "./Components/Component";
import { p5 } from "../main";

interface GameObjectConstructor {
  name: string;
  children?: GameObject[];
  transform?: Transform | UITransform;
}

class GameObject {
  name: string;
  parent?: GameObject;
  transform: Transform | UITransform;
  childs: GameObject[] = [];
  components: Component[] = [];

  constructor({
    name,
    children = [],
    transform = new Transform({}),
  }: GameObjectConstructor) {
    children.forEach((child: GameObject) => {
      this.addChild(child);
    });
    this.name = name;
    this.transform = transform;
    this.addComponent(this.transform);
  }

  start() {
    this.components.forEach((comp) => comp._start());
    this.childs.forEach((child) => child.start());
  }

  update() {
    this.components.forEach((comp) => comp._update());
    this.childs.forEach((child) => child.update());
  }

  setParent(gameObject: GameObject) {
    this.parent = gameObject;
  }

  addChild(gameObject: GameObject) {
    gameObject.setParent(this);
    this.childs.push(gameObject);
  }

  addComponent(component: Component) {
    this.components.push(component);
    component.transform = this.transform;
    component.gameObject = this;
  }

  getComponent(className: string): Component | undefined {
    return this.components.find((val) => val.constructor.name == className);
  }

  getParentPositions(): p5.Vector {
    if (this.parent !== undefined)
      return this.transform.position
        .copy()
        .add(this.parent.getParentPositions());
    return this.transform.position.copy();
  }
}

export default GameObject;
