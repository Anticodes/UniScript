class ButtonBar extends UIObject {

    selectedColor = null;
    input = Input.getInstance();

    constructor({ name, children, position, scale, rotation, backgroundColor, selectedColor } = {}) {
        super({ name: name, children: children, position: position, scale: scale, rotation: rotation });
        this.addComponent(new QuadRenderer({ color: backgroundColor || main.color(255, 128) }));
        this.selectedColor = selectedColor || main.color(200, 100, 100);
    }

    addChild(gameObject) {
        if (this.selectedButton == null) this.selectedButton = 0;
        super.addChild(gameObject);
    }

    start() {
        let len = this.childs.length;
        let off = -Math.ceil(-len / 2);
        for (let i = Math.ceil(-len / 2); i < Math.ceil(len / 2); i++) {
            this.childs[i + off].transform.position.set(120 * i + (len % 2 === 0 ? 60 : 0), 0);
        }
    }

    update() {
        super.update();
        if (this.selectedButton == null) return;
        let selected = this.childs[this.selectedButton].getComponent("QuadRenderer");
        let pp = this.childs[this.selectedButton].getParentPositions();
        let tf = this.childs[this.selectedButton].transform;
        main.push()
        main.translate(pp.x, pp.y);
        main.rotate(tf.rotation);
        main.scale(10, 10);
        main.stroke(this.selectedColor);
        main.fill(0, 0);
        main.rect(0, 0, tf.scale.x, tf.scale.y, selected.border[0], selected.border[1], selected.border[2], selected.border[3]);
        main.pop();
    }

    mPress() {
        let index = this.childs.findIndex(button => button.mPress());
        console.log(index);
        this.selectedButton = index > -1 ? index : this.selectedButton;
        let pos = this.getParentPositions();
        let sca = this.transform.scale;
        if (pos.x - sca.x * 10 < this.input.mouse.x &&
            pos.x + sca.x * 10 > this.input.mouse.x &&
            pos.y - sca.y * 10 < this.input.mouse.y &&
            pos.y + sca.y * 10 > this.input.mouse.y) {
            return true;
        }
        return false;
    }

    mRel() {
        this.childs.findIndex(button => button.mRel());
    }
}