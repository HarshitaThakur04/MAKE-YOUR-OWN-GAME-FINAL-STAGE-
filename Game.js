class Game{
    counstructor(){}
   start(){
       if(gameState===START){
           background(startImg);
           form=new Form();
           form.display();
       }
       ground=new Ground(displayWidth/2,displayHeight-200,displayWidth,10);
       ball=new Ball(displayWidth/2-10,displayHeight/2,40);
       ball.scale=0.05
       basket1=new Basket(300,200,100,10);
       basket2=new Basket(900,200,100,10);
      }

   play(){
    background(playImg);
    //background("lightgrey")
    image(bRight,displayWidth/2+30,displayHeight/5-70)
    image(bLeft,displayWidth/10-170,displayHeight/5-70)
    textSize(30)
    fill("red")
    text(score,50,50)
    ground.display();
    ball.display();
    player1.display();
    player2.display();  
    //basket1.display();
    //basket2.display();

    if(ball.body.overlap(basket1.body)){
        if(!basketScored){
            score=score+1
            basketScored=true; 
        }
       textSize(30)
       fill("red")
        text("YOU SCORED",displayWidth/2,100)
    }
    
    drawSprites();

    if(keyDown("left")){
       ball.body.x-=10
    }
    if(keyDown("right")){
        ball.body.x+=10
    }
    if(keyDown("UP_ARROW")){
        ball.body.velocityY=-5
    }
    ball.body.velocityY+=0.8
    ball.body.collide(ground.body)
   }

   end(){}

}