class Renderer extends Component{

    _update(){
        const tf = this.transform;
        const pp = this.gameObject.getParentPositions();
        main.push();
        main.translate(pp.x, pp.y);
        main.rotate(tf.rotation);
        if(tf.scale) main.scale(tf.scale.x, tf.scale.y);
        this.update();
        main.pop();
    }
}
