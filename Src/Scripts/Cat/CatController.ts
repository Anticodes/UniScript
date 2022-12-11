import Component from "../../../Core/Essentials/Components/Component";
import Transform from "../../../Core/Essentials/Components/Transform";
import Time from "../../../Core/Essentials/Time";
import { main, p5 } from "../../../Core/main";
import CatShadowRenderer from "./CatShadowRenderer";

class CatController extends Component {
  transform: Transform;
  timer: number;
  turnCompletion: number;
  shadow: CatShadowRenderer;
  state: number;
  prevPos: p5.Vector;
  firstScale: p5.Vector;

  start() {
    this.setState(this.states.FALLING);
    this.timer = 0.5;
    this.shadow = this.gameObject!.getComponent(
      "CatShadowRenderer"
    ) as CatShadowRenderer;
    this.firstScale = this.transform.scale.copy();
  }

  update() {
    this.stateMovement();
  }

  stateMovement() {
    let angle, curve;
    switch (this.state) {
      case this.states.IDLE:
        break;
      case this.states.WANDERING.INIT:
        this.timer = 2;
        this.prevPos = this.transform.position.copy();
        this.setState(this.states.WANDERING.RUNNING);
        break;
      case this.states.WANDERING.RUNNING:
        this.timer -= Time.deltaTime;
        angle = main.map(this.timer, 0, 1, 0, main.PI * 2);
        curve = main.sin(angle) / 4;
        this.transform.scale.set(
          this.firstScale.x + (curve > 0 ? curve : -curve),
          this.firstScale.y + (curve > 0 ? curve : -curve)
        );
        this.shadow.offset.set(
          1 + (curve > 0 ? curve / 2 : -curve / 2),
          1 + (curve > 0 ? curve / 2 : -curve / 2)
        );
        this.transform.position.add(
          p5.Vector.fromAngle(this.transform.rotation).mult(Time.deltaTime * 50)
        );
        if (this.timer <= 0) {
          this.setState(this.states.WANDERING.DECIDING);
          this.transform.scale.set(this.firstScale.x, this.firstScale.y);
          this.shadow.offset.set(1, 1);
        }
        break;
      case this.states.WANDERING.DECIDING:
        if (
          this.transform.position.x < -main.windowWidth / 2 + 150 ||
          this.transform.position.x > main.windowWidth / 2 - 150 ||
          this.transform.position.y > main.windowHeight / 2 - 150 ||
          this.transform.position.y < -main.windowHeight / 2 + 150
        ) {
          this.setState(this.states.WANDERING.RETURNING);
          this.turnCompletion = main.PI;
        } else {
          this.turnCompletion = Math.random() * main.PI - main.HALF_PI;
          this.setState(this.states.WANDERING.LOOKING);
        }
        break;
      case this.states.WANDERING.LOOKING:
        this.turnCompletion += this.turnCompletion < 0 ? 0.05 : -0.05;
        this.transform.rotation += this.turnCompletion < 0 ? 0.05 : -0.05;
        if (this.turnCompletion < 0.03 && this.turnCompletion > -0.03) {
          this.setState(this.states.WANDERING.INIT);
        }
        break;
      case this.states.WANDERING.RETURNING:
        this.transform.rotation += 0.05;
        this.turnCompletion -= 0.05;
        if (this.turnCompletion <= 0) this.setState(this.states.WANDERING.INIT);
        break;
      case this.states.FALLING:
        angle = main.map(this.timer, 0, 1, 0, main.HALF_PI);
        this.transform.scale.set(
          this.firstScale.x + main.sin(angle) * 5,
          this.firstScale.y + main.sin(angle) * 5
        );
        this.timer -= Time.deltaTime;
        if (this.timer <= 0) {
          this.setState(this.states.WANDERING.INIT);
          this.transform.scale.set(this.firstScale.x, this.firstScale.y);
        }
        break;
      case this.states.EATING:
        break;
    }
  }

  setState(state: number) {
    this.state = state;
  }

  states = {
    IDLE: 0,
    WANDERING: {
      INIT: 1.0,
      RUNNING: 1.1,
      DECIDING: 1.2,
      LOOKING: 1.3,
      RETURNING: 1.4,
    },
    FALLING: 2,
    EATING: 3,
  };
}

export default CatController;
