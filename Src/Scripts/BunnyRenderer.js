class BunnyRenderer extends CircleRenderer{

    constructor(color){
        super(color);
    }

    update(){
        super.update();
        main.push();
        main.stroke(255);
        main.line(4, -2, -1, -6);
        main.line(4,  2, -1,  6);
        main.fill(255);
        main.ellipse(-4, 0, 1, 1);
        main.pop();
    }
}