import Component from "../Component";
import { p5 } from "../../../main";

class UITransform extends Component {
  position: p5.vector;
  size: p5.vector;
  rotation: number;

  constructor({
    position = p5.createVector(0, 0),
    size = p5.createVector(10, 10),
    rotation = 0.0,
  }) {
    super();
    this.position = position;
    this.rotation = rotation;
    this.size = size;
  }
}

export default UITransform;
