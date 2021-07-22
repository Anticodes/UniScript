class BunnySpawner extends Component {

    input = Input.getInstance();
    settings = Settings.getInstance();

    update() {
        if (input.pressing) {
            this.settings.activeScene.addGameObject(new BunnyPrefab({
                name: "Bunny",
                position: main.createVector(main.mouseX - this.settings.width/2, main.mouseY - this.settings.height/2),
                scale: main.createVector(8.5, 8.5),
                rotation: Math.random()*main.PI,
            }));
            this.input.pressing = false;
        }
    }
}