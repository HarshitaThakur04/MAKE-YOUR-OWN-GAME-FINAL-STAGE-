class Ground {
    constructor(x,y,width,height) {
    this.body=createSprite(x,y,width,height)
    this.body.shapeColor="Black"
    this.body.visible=false
    }
    display(){
      this.body.visible=true
    }
  };
