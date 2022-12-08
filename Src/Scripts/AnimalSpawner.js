class AnimalSpawner extends Component {

    input = Input.getInstance();
    settings = Settings.getInstance();
    spawnerBar;

    start(){
        this.spawnerBar = settings.activeScene.findUIObjectByName("Spawn Button Bar");
    }

    update() {
        if (input.pressing) {
            switch(this.spawnerBar.selectedButton){
                case 0: this.settings.activeScene.instantiate(new BunnyPrefab({
                    name: "Bunny",
                    position: main.createVector(this.input.mouse.x, this.input.mouse.y),
                    scale: main.createVector(5, 5),
                    rotation: Math.random()*main.TWO_PI,
                }));
                break;
                case 1: this.settings.activeScene.instantiate(new DogPrefab({
                    name: "Dog",
                    position: main.createVector(this.input.mouse.x, this.input.mouse.y),
                    scale: main.createVector(16, 5),
                    rotation: Math.random()*main.TWO_PI,
                }));
                break;
                case 2: this.settings.activeScene.instantiate(new CatPrefab({
                  name: "Cat",
                  position: main.createVector(this.input.mouse.x, this.input.mouse.y),
                  scale: main.createVector(9, 3),
                  rotation: Math.random() * main.TWO_PI,
                }));
                break;
            }
            this.input.pressing = false;
        }
    }
}
