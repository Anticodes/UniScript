class QuadRenderer extends Component{
  
  color;
  
  constructor(color){
    super();
    this.color = color || main.color(200, 200, 200);
  }
  
  update(){
    const tf = this.transform;
    main.push();
    main.fill(this.color);
    main.translate(tf.position.x, tf.position.y);
    main.scale(tf.scale.x, tf.scale.y);
    main.rotate(tf.rotation);
    main.rect(0, 0, 10, 10);
    main.pop();
  }
}