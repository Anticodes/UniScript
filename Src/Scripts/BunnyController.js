class BunnyController extends Component{
  
  time;
  
  start(){
    this.state = this.states.IDLE;
  }
  
  update(){
    this.time += Time.deltaTime;
    if(this.time >= 3)this.state = this.states.WANDERING;
    if(this.time >= 8)this.state = this.states.IDLE;
    
  }
  
  stateMovement(){
    switch(this.state){
      case this.states.IDLE:
        break;
      case this.states.WANDERING:
        this.transform.rotation += Math.random()/50-.01
        this.transform.position.add(this.transform.position.heading());
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