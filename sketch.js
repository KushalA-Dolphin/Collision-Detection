var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red"
  movingRect=createSprite(200,200,80,30);
  movingRect.shapeColor="darkblue"
}


function draw() {
  background(215,125,135);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    ){
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
  else{
    fixedRect.shapeColor="red"
    movingRect.shapeColor="darkblue"
  }



  drawSprites();
}