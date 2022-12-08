class Text extends GameObject {

    constructor({name, children, position, size, rotation, text, textColor}={}){
        super({name, children, transform: new UITransform({ position, size, rotation }) });
        this.addComponent(new TextRenderer({ text, color: textColor || main.color(0), }));
    }
}
