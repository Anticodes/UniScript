class BunnyPrefab extends GameObject{
  
  constructor({name, children, position, scale, rotation}={}){
    super({name, children, transform: new Transform({ position, scale, rotation }) });
    this.addComponent(new BunnyShadowRenderer(main.color(0, 128)));
    this.addComponent(new BunnyRenderer());
    this.addComponent(new BunnyController());
  }
}
