var jaxon, jaxon_running;
var path, pathImage , invisiblePath1, invisiblePath2;

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png");

  pathImage = loadImage("path.png");
  
}
function setup(){
  createCanvas(400,400);

  //create sprites here

  
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.scale =1.2;
  path.velocityY = 4;

  invisiblePath1 = createSprite(30,400,10,200);
  invisiblePath1.visible= false;
  invisiblePath2 = createSprite(370,400,10,200)
  invisiblePath2.visible = false;  


  jaxon = createSprite(100,350,20,50);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.09;


  
}

function draw() {
  background(0);

  if (path.y > 400) {
    path.y = height / 2;
    
  }


  jaxon.x = mouseX;
  

  jaxon.collide(invisiblePath1);
  jaxon.collide(invisiblePath2);

  drawSprites();
}  
