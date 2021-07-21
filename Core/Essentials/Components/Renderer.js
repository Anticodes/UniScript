class Renderer extends Component{


    _update(){
        const tf = this.transform;
        main.push();
        main.translate(tf.position.x, tf.position.y);
        main.scale(tf.scale.x, tf.scale.y);
        main.rotate(tf.rotation);
        this.update();
        main.pop();
    }
}