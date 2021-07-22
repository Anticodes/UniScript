class Text extends UIObject {

    constructor({name, children, position, scale, rotation, text}={}){
        super({name: name, children: children, position: position, scale: scale, rotation: rotation});
        this.addComponent(new TextRenderer({ text: text, color: main.color(0), }));
    }
}