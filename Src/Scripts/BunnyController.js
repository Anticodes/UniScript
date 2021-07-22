class BunnyController extends Component{
  
  input = Input.getInstance();
  runCompletion = 0;
  
  start(){
    this.state = this.states.IDLE;
  }
  
  update(){
    if(input.pressing){
      if(this.state == this.states.IDLE)
        this.state = this.states.WANDERING;
      else if(this.state == this.states.WANDERING)
        this.state = this.states.IDLE;
    }
    if(this.state != this.states.RUNNING
    &&(this.transform.position.x > main.windowWidth/2-100
    || this.transform.position.x < -(main.windowWidth/2-100)
    || this.transform.position.y < -(main.windowHeight/2-100)
    || this.transform.position.y > main.windowHeight/2-100)){
      this.state = this.states.RUNNING;
      this.runCompletion = 0;
    }
    this.stateMovement();
  }
  
  stateMovement(){
    switch(this.state){
      case this.states.IDLE:
        break;
      case this.states.WANDERING:
        this.transform.rotation += Math.random()/50-.01;
        main.text(this.transform.position.toString(), -100, -100);
        this.transform.position.add(p5.Vector.fromAngle(this.transform.rotation));
        break;
      case this.states.RUNNING:
        this.transform.rotation += 0.01;
        this.runCompletion += 0.01;
        this.transform.position.add(p5.Vector.fromAngle(-this.transform.rotation));
        if(this.runCompletion >= main.PI){
          this.state = this.states.WANDERING;
        }
        break;
      case this.states.EATING:
        break;
    }
  }
  
  states = {
    IDLE: 0,
    WANDERING: 1,
    RUNNING: 2,
    EATING: 3
  }
}