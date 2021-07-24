class DogPrefab extends GameObject{
  
    constructor({name, children, position, scale, rotation}={}){
      super({name: name, children: children, position: position, scale: scale, rotation: rotation});
      this.addComponent(new DogShadowRenderer(main.color(0, 128)));
      this.addComponent(new DogRenderer({
          color: main.color(247, 198, 107)
      }));
      this.addComponent(new DogController());
    }
  }