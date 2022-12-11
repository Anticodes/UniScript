import Component from "../Component";
import { main, p5 } from "../../../main";

class UITransform extends Component {
  position: p5.vector;
  size: p5.vector;
  rotation: number;

  constructor({
    position = main.createVector(0, 0),
    size = main.createVector(10, 10),
    rotation = 0.0,
  }: {
    position?: p5.Vector,
    size?: p5.Vector,
    rotation?: number
  }) {
    super();
    this.position = position;
    this.rotation = rotation;
    this.size = size;
  }
}

export default UITransform;
