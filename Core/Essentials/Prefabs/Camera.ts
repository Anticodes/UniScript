import Transform from "../Components/Transform";
import GameObject from "../GameObject";

class Camera extends GameObject {
  constructor({ name, position }) {
    super({ name, transform: new Transform({ position }) });
  }
}

export default Camera;
