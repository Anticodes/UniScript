class QuadRenderer extends Renderer{
  
  color;
  
  constructor(color){
    super();
    this.color = color || main.color(200, 200, 200);
  }
  
  update(){
    main.fill(this.color);
    main.rect(0, 0, 10, 10);
  }
}