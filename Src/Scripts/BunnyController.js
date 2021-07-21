class BunnyController extends Component{
  
  timer = 0;
  time = Time.getInstance();
  
  start(){
    this.state = this.states.IDLE;
  }
  
  update(){
    this.timer += this.time.deltaTime;
    if(this.timer >= 3)this.state = this.states.WANDERING;
    if(this.timer >= 8)this.state = this.states.IDLE;
    this.stateMovement();
  }
  
  stateMovement(){
    switch(this.state){
      case this.states.IDLE:
        break;
      case this.states.WANDERING:
        this.transform.rotation += Math.random()/50-.01;
        console.log();
        this.transform.position.add(p5.Vector.fromAngle(this.transform.rotation));
        break;
      case this.states.RUNNING:
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