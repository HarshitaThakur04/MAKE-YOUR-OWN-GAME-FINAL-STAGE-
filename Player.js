class Player {
    constructor(x,y,width,height) {
      this.body=createSprite(x,y,width,height)
      this.body.shapeColor="red"
      this.body.visible=false
     
    }
    display(){
     this.body.visible=true
    }
  };
