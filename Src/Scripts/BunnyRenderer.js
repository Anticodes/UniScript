class BunnyRenderer extends QuadRenderer{

    constructor(color){
        super(color);
    }

    update(){
        super.update();
        main.stroke(255);
        main.line(0, 0, 10, 0);
        main.noStroke();
    }
}