class Button extends GameObject {

    pressing = false;
    input = Input.getInstance();
    callback = null;

    constructor({ name, children, position, size, rotation, text, callback, backgroundColor, textColor, border } = {}) {
        super({ name, children, transform: new UITransform({ position, size, rotation }) });
        this.addComponent(new UIRenderer({ color: backgroundColor || main.color(200), border }));
        this.addChild(new Text({
            name: "Button Text",
            color: textColor,
            position,
            text,
        }));
        this.callback = callback;
    }

    isPressing() {
        return this.pressing;
    }

    mPress() {
        let pos = this.getParentPositions();
        let size = this.transform.size;
        if (pos.x - size.x / 2 < this.input.mouse.x &&
            pos.x + size.x / 2 > this.input.mouse.x &&
            pos.y - size.y / 2 < this.input.mouse.y &&
            pos.y + size.y / 2 > this.input.mouse.y) {
            this.pressing = true;
            if (this.callback != null) this.callback();
        }
        return this.pressing;
    }

    mRel() {
        this.pressing = false;
    }

    relM() {
        this.pressing = false;
    }
}
