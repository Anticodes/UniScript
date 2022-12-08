class UITransform extends Component{
  
  position;
  rotation;
  size;
  
  constructor({position, rotation, size}={}){
    super();
    this.position = position || main.createVector(0, 0);
    this.rotation = rotation || 0.0;
    this.size = size || main.createVector(10, 10);
  }
}
