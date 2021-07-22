class BunnyController extends Component{
  
  input = Input.getInstance();
  time = Time.getInstance();
  timer = null;
  turnCompletion = null;
  
  start(){
    this.setState(this.states.WANDERING);
  }
  
  update(){
    this.stateMovement();
  }
  
  stateMovement(){
    switch(this.state){
      case this.states.IDLE:
        break;
      case this.states.WANDERING:
        this.timer = 1;
        this.setState(this.states.WANDERING.JUMPING);
        break;
      case this.states.WANDERING.JUMPING:
        this.timer -= this.time.deltaTime;
        let angle = main.map(this.timer, 0, 1, 0, main.PI);
        this.transform.scale.set(5 + main.sin(angle)*2, 5 + main.sin(angle)*2);
        this.transform.position.add(p5.Vector.fromAngle(this.transform.rotation).mult(this.time.deltaTime*100));
        if(this.timer <= 0){
          this.setState(this.states.WANDERING.DECIDING);
          this.transform.scale.set(5, 5)
        }
        break;
      case this.states.WANDERING.DECIDING:
        if (this.transform.position.x > main.windowWidth / 2 - 50 ||
            this.transform.position.x < -(main.windowWidth / 2 - 50) ||
            this.transform.position.y < -(main.windowHeight / 2 - 50) ||
            this.transform.position.y > main.windowHeight / 2 - 50) {
          this.setState(this.states.WANDERING.RETURNING);
          this.turnCompletion = main.PI;
        }else{
          this.turnCompletion = Math.random()*main.PI - main.HALF_PI;
          this.setState(this.states.WANDERING.LOOKING);
        }
        break;
      case this.states.WANDERING.LOOKING:
        this.turnCompletion += this.turnCompletion < 0 ? 0.05 : -0.05;
        this.transform.rotation += this.turnCompletion < 0 ? 0.05 : -0.05;
        if(this.turnCompletion < 0.03 && this.turnCompletion > -0.03){
          this.setState(this.states.WANDERING);
        }
        break;
      case this.states.WANDERING.RETURNING:
        this.transform.rotation += 0.05
        this.turnCompletion -= 0.05;
        if(this.turnCompletion <= 0)
          this.setState(this.states.WANDERING);
        break;
      case this.states.RUNNING:
        break;
      case this.states.EATING:
        break;
    }
  }
  
  setState(state){
    this.state = state;
  }
  
  states = {
    IDLE: 0,
    WANDERING: {
      JUMPING: 1.1,
      DECIDING: 1.2,
      LOOKING: 1.3,
      RETURNING: 1.4,
    },
    RUNNING: 2,
    EATING: 3,
  }
}