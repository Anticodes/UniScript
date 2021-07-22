class BunnyRenderer extends CircleRenderer{

    constructor(color){
        super(color);
        
    }

    update(){
        super.update();
        main.push();
        main.fill(255)
        main.triangle(4, -2, -3, -5, -2, -6);
        main.triangle(4,  2, -3,  5, -2,  6);
        main.ellipse(-4, 0, 2, 2);
        main.pop();
    }
}