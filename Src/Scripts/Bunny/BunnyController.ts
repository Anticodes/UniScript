import Component from "../../../Core/Essentials/Components/Component";
import Transform from "../../../Core/Essentials/Components/Transform";
import Time from "../../../Core/Essentials/Time";
import { main, p5 } from "../../../Core/main";
import BunnyShadowRenderer from "./BunnyShadowRenderer";

class BunnyController extends Component {
  transform: Transform;
  timer: number;
  turnCompletion: number;
  shadow: BunnyShadowRenderer;
  state: number;
  prevPos: p5.Vector;
  firstScale: p5.Vector;

  start() {
    this.setState(this.states.FALLING);
    this.timer = 0.5;
    this.shadow = this.gameObject!.getComponent(
      "BunnyShadowRenderer"
    ) as BunnyShadowRenderer;
    this.firstScale = this.transform.scale.copy();
  }

  update() {
    this.stateMovement();
  }

  stateMovement() {
    let angle: number;
    switch (this.state) {
      case this.states.IDLE:
        break;
      case this.states.WANDERING.INIT:
        this.timer = 1;
        this.prevPos = this.transform.position.copy();
        this.setState(this.states.WANDERING.JUMPING);
        break;
      case this.states.WANDERING.JUMPING:
        this.timer -= Time.deltaTime;
        angle = main.map(this.timer, 0, 1, 0, main.PI);
        this.transform.scale.set(
          this.firstScale.x + main.sin(angle) * 2,
          this.firstScale.y + main.sin(angle) * 2
        );
        this.shadow.offset.set(1 + main.sin(angle), 1 + main.sin(angle));
        this.transform.position.add(
          p5.Vector.fromAngle(this.transform.rotation).mult(
            Time.deltaTime * 100
          )
        );
        if (this.timer <= 0) {
          this.setState(this.states.WANDERING.DECIDING);
          this.transform.scale.set(this.firstScale.x, this.firstScale.y);
          this.shadow.offset.set(1, 1);
        }
        break;
      case this.states.WANDERING.DECIDING:
        if (
          this.transform.position.x < 125 ||
          this.transform.position.x > main.windowWidth - 125 ||
          this.transform.position.y > main.windowHeight - 125 ||
          this.transform.position.y < 125
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
      JUMPING: 1.1,
      DECIDING: 1.2,
      LOOKING: 1.3,
      RETURNING: 1.4,
    },
    FALLING: 2,
    EATING: 3,
  };
}

export default BunnyController;
