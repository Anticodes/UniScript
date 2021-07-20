class Transform extends Component{
  
  position;
  rotation;
  scale;
  
  constructor(x, y){
    super();
    this.position = main.createVector(x, y);
    this.rotation = 0.0;
    this.scale = main.createVector(1, 1);
  }
}