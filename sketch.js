var tom;
var tomImg1;
var tomImg2;
var tomImg3;
var jerry;
var jerryImg1;
var jerryImg2;
var jerryImg3;
var bgImg;

function preload() {
    bgImg = loadImage("garden.png");
    tomImg1 = loadAnimation("cat1.png");
    tomImg2 = loadAnimation("cat2.png"&&"cat3.png");
    tomImg3 = loadAnimation("cat4.png");
    jerryImg1 = loadAnimation("mouse1.png");
    jerryImg2 = loadAnimation("mouse2.png"&&"mouse3.png");
    jerryImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(900,500,50,20);
    tom.addAnimation(tomImg1);

    jerry = createSprite(200,500,30,10);
    jerry.addAnimation(mouseImg1);
}

function draw() {

    background("bgImg");

    drawSprites();
}


function keyPressed(){
if(keydown(left)){
    tom.changeAnimation(tomImg2);
    tom.velocityX=-1;
    jerry.changeAnimation(jerryImg2);
}
  if(tom.isTouching(jerry)) {
      tom.velocityX=0;
      tom.changeAnimation(tomImg3);
      jerry.changeAnimation(jerryImg3);
  }

}
