class DogRenderer extends QuadRenderer {

    tailAngle = 0;

    constructor(color) {
        super(color);
        this.border = [
            3, 5, 5, 3,
        ];
    }

    update() {
        this.tailAngle += .1;
        super.update();
        main.scale(1/this.transform.scale.x, 1/this.transform.scale.y);
        main.push();
        main.scale(this.transform.scale.x, this.transform.scale.x);
        main.fill(187, 140, 83);
        main.push();
        main.translate(2, -1.5);
        main.rotate(-.2);
        main.ellipse(0, 0, 1, 2);
        main.rotate(.2);
        main.translate(0, 3)
        main.rotate(.2);
        main.ellipse(0,  0, 1, 2);
        main.pop();
        main.translate(-5, 0);
        main.rotate(Math.sin(this.tailAngle));
        main.ellipse(-2, 0, 4, 1);
        main.pop();
    }
}