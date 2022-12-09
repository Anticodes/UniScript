import Component from "./Component";
import { main } from "../../main";

class Renderer extends Component {
  _update() {
    const tf = this.transform!;
    const pp = this.gameObject!.getParentPositions();
    main.push();
    main.translate(pp.x, pp.y);
    main.rotate(tf.rotation);
    if ("scale" in tf) main.scale(tf.scale.x, tf.scale.y);
    this.update();
    main.pop();
  }
}

export default Renderer;
