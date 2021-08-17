var docked;
var spaceBg;
var spaceStation;
var spaceStationImg;
var spaceX;
var spaceImg1;
var spaceImg2;
var spaceImg3;
function preload(){
  spaceBg=loadImage("spacebg.jpg");
  spaceImg1=loadImage("spacecraft1.png");
  spaceImg2=loadImage("spacecraft2.png");
  spaceStationImg=loadImage("iss.png")
  spaceImg3=loadImage("spacecraft3.png");
}


function setup() {
  createCanvas(1000,560);


  docked=false;
  spaceStation=createSprite(500,300,0,0);
  spaceStation.addImage("spaceStation",spaceStationImg);
  spaceStation.scale=0.5;
  spaceX=createSprite(500,400,0,0);
  spaceX.addImage(spaceImg1);
  spaceX.scale=0.2;


}

function draw() {
  background(spaceBg);  
  
    if(keyDown("UP_ARROW")){
      spaceX.addImage(spaceImg2);
      spaceX.y-=2;
    
  }
  if(keyDown("DOWN_ARROW")){
    spaceX.y+=2;
    spaceX.addImage(spaceImg3);
  }
  if(keyDown("LEFT_ARROW")){
    spaceX.x-=2;
  }
  if(keyDown("RIGHT_ARROW")){
    spaceX.x+=2;
  }
  drawSprites();
  if(spaceX.y>=(spaceStation.y+50)&&spaceX.x>=(spaceStation.x)){
    docked=true;
    spaceX.x+=random(1,-1);

    textSize(40)
    fill(225);
    text("DOCKED SUCCESSFULLY",120,360);
  }
}