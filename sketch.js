var astronaut, bg, bgImage, sleep, brush, gym, cycle, eat, drink, bath, move;

function preload(){
  bgImage=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png");
  cycle=loadAnimation("images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  bath=loadAnimation("images/bath.png","images/bath2.png");
  move=loadAnimation(,"images/move.png","images/move1.png");
}

function setup() {
  createCanvas(800,400);
  bg=createSprite(400, 200, 50, 50);
  bg.addImage(bgImage);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(255,255,255);  
  createEdgeSprite()
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y=340;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=330;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=345;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("c")){
    astronaut.addAnimation("cycling",cycle);
    astronaut.changeAnimation("cycling");
    astronaut.y=3350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("d")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y=330;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=350;
    astronaut.velocityX=2;
    astronaut.velocityY=-2;
    astronaut.bounceOff(edges);
  }
  drawSprites();
  text("Press down arrow key for gym",5,30);
  text("Press up arrow key for gym",5,50);
  text("Press right arrow key for gym",5,70);
  text("Press left arrow key for gym",5,90);
  text("Press m key for gym",5,110);
  text("Press c key for gym",5,130);
  text("Press d key for gym",5,160);
}