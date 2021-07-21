class BunnyPrefab extends GameObject{
  
  constructor({name, children, position, scale, rotation}={}){
    super({name: name, children: children, position: position, scale: scale, rotation: rotation});
    this.addComponent(new BunnyRenderer());
    this.addComponent(new BunnyController());
  }
}