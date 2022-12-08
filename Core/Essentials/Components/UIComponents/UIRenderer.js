class UIRenderer extends Renderer{
  
  color;
  border;
  
  constructor({color, border}={}){
    super();
    this.color = color || main.color(200, 200, 200);
    this.border = border || [0, 0, 0, 0];
  }
  
  update(){
    main.fill(this.color);
    main.rect(0, 0, this.transform.size.x, this.transform.size.y, this.border[0], this.border[1], this.border[2], this.border[3]);
  }
}
