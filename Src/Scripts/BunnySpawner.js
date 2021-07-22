class BunnySpawner extends Component {

    input = Input.getInstance();
    settings = Settings.getInstance();

    update() {
        if (input.pressing) {
            this.settings.activeScene.addGameObject(new BunnyPrefab({
                name: "Bunny",
                position: main.createVector(main.mouseX - this.settings.width/2, main.mouseY - this.settings.height/2),
                scale: main.createVector(5, 5),
            }));
            this.input.pressing = false;
        }
    }
}