class BunnyPrefab extends GameObject{
  
  constructor(name, children){
    super(name, children);
    this.addComponent(new QuadRenderer());
    this.addComponent(new BunnyController());
    console.log(this.getComponent("BunnyController").isActive);
  }
}