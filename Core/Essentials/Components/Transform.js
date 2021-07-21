class Transform extends Component{
  
  position;
  direction;
  rotation;
  scale;
  
  constructor({position, rotation, scale}={}){
    super();
    this.position = position || main.createVector(0, 0);
    this.rotation = rotation || 0.0;
    this.scale = scale || main.createVector(1, 1);
  }
}