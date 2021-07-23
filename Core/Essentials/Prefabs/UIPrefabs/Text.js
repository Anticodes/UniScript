class Text extends UIObject {

    constructor({name, children, position, scale, rotation, text, textColor}={}){
        super({name: name, children: children, position: position, scale: scale, rotation: rotation});
        this.addComponent(new TextRenderer({ text: text, color: textColor || main.color(0), }));
    }
}