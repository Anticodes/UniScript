class Transform{
  
  position;
  rotation;
  scale;
  
  constructor(x, y){
    position = new Vector(x, y);
    rotation = new Vector(0, 0);
    scale = new Vector(1, 1);
  }
}