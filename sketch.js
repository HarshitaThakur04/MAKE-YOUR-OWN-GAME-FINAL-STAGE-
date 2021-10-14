const START=0;
const PLAY=1;
const END=2;
var game,form,player1,player2,ball,basket1,basket2;
var gameState=START;
var ground,ball;
var startImg; 
var playImg;
var ballImg;
var score=0;
var basketScored=false;
var bLeft,bRight;

function preload(){
startImg=loadImage("Images/START IMAGE.jpg")
playImg=loadImage("Images/ball2.jpg")
ballImg=loadImage("Images/ball1.png")
bLeft=loadImage("Images/left.png")
bRight=loadImage("Images/right.png")
}


function setup() {
  createCanvas(displayWidth-50,displayHeight-150);
 // createSprite(400, 200, 50, 50);
  game=new Game();
  game.start();
 
}

function draw() {
  //background("GREY");
  if(gameState===PLAY){
    game.play();
  }
    
  //ground=new Ground(300,300,600,10);


  drawSprites();
}