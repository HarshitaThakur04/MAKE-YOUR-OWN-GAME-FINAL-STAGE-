class Basket {
    constructor(x,y,width,height) {
      this.body=createSprite(x,y,width,height)
      this.body.shapeColor="yellow"
      this.body.visible=false
    }
    display(){
      this.body.visible=true
    }
  };
