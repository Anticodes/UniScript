import Component from "./Component";
import { main, p5 } from "../../main";

class Transform extends Component {
  position: p5.Vector;
  scale: p5.Vector;
  rotation: number;

  constructor({
    position = main.createVector(0, 0),
    scale = main.createVector(1, 1),
    rotation = 0.0,
  }: {
    position?: p5.Vector,
    scale?: p5.Vector,
    rotation?: number
  }) {
    super();
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }
}

export default Transform;
