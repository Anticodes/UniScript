class Button extends UIObject {

    pressing = false;
    input = Input.getInstance();
    callback = null;

    constructor({ name, children, position, scale, rotation, text, callback, backgroundColor, textColor, border } = {}) {
        super({ name: name, children: children, position: position, scale: scale, rotation: rotation });
        this.addComponent(new QuadRenderer({ color: backgroundColor || main.color(200), border: border }));
        this.addChild(new Text({
            name: "Button Text",
            position: position,
            text: text,
            color: textColor,
        }));
        this.callback = callback;
    }

    isPressing() {
        return this.pressing;
    }

    mPress() {
        let pos = this.getParentPositions();
        let sca = this.transform.scale;
        if (pos.x - sca.x * 5 < this.input.mouse.x &&
            pos.x + sca.x * 5 > this.input.mouse.x &&
            pos.y - sca.y * 5 < this.input.mouse.y &&
            pos.y + sca.y * 5 > this.input.mouse.y) {
            this.pressing = true;
            this.input.pressing = false;
            if (this.callback != null) this.callback();
            return this.pressing;
        }
    }

    mRel() {
        this.pressing = false;
    }

    relM() {
        this.pressing = false;
    }
}