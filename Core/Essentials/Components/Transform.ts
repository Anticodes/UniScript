import Component from "./Component";
import { p5 } from "../../main";

class Transform extends Component {
  position: p5.Vector;
  rotation: number;
  scale: p5.Vector;

  constructor({
    position = p5.createVector(0, 0),
    rotation = 0.0,
    scale = p5.createVector(1, 1),
  }) {
    super();
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }
}

export default Transform;
