class Ball{
    constructor(x, y, radius){
     this.body=createSprite(x,y,radius,radius)
     this.body.addImage(ballImg);
     this.body.visible=false;
        
      }
      display(){
        this.body.visible=true;
        this.body.scale=0.3;
      }
}
