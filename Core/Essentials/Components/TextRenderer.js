class TextRenderer extends Renderer {

    color;
    text;

    constructor({text, color}={}) {
        super();
        this.text = text || "";
        this.color = color || main.color(200, 200, 200);
    }

    update() {
        main.fill(this.color);
        main.text(this.text, 0, 0);
    }
}