// giving local variables
var PLAY = 1;
var END = 0;
var START = 2;
var SSTART = 3;
var gameState = SSTART;
var zombie,z1i,z2i,z3i,z4i;
var bg,di , story, logo;
var score = 0;

function preload(){
    // loading animations and images of the game
    z1i = loadAnimation("characters/z1.gif");
    z2i = loadAnimation("characters/z2.gif");
    z3i = loadAnimation("characters/z3.gif");
    z4i = loadAnimation("characters/z4.gif");
    ai1 = loadImage("mg/ai1.png");
    d1i = loadAnimation("scary/clown.gif");
    di = loadAnimation("scary/9BLC.gif");
    d2i = loadAnimation("scary/danger.gif");
    d3i = loadAnimation("scary/giphy.gif");
    d4i = loadAnimation("scary/salems-lot.gif");
    d5i = loadAnimation("scary/skull.gif");
    d6i = loadAnimation("scary/tenor.gif");
    d7i = loadAnimation("scary/mf.gif");
    sbg = loadImage("mg/bg.jpg");
    bg = loadImage("mg/bg2.jpg");
    GO = loadImage("mg/go.jpg");
    yrdi = loadImage("scary/yrd.jpg"); 
    logoi = loadImage("mg/Ef.png");
    bs = loadSound("mg/backs.mp3");
    blast = loadSound("mg/blast.mp3");  
    ss = loadSound("mg/so.mp3");
}

function setup(){

createCanvas(1400,750);

// creating sprites of various components of the game
logo = createSprite(750,360,100,100);
logo.addImage("logo",logoi);
logo.scale = 0.775;
logo.visible = true;

// combining all the images in one
story = createSprite(715,350,10,650);
story.addImage("story and how to play",ai1);
story.addImage("background",bg);
story.visible = false;
story.scale = 0.73;
story.depth = logo.depth+2;

go = createSprite(745,325,21,20);
go.addImage("gameOver",GO);
go.visible = false;

yrd = createSprite(745,325,21,20);
yrd.addImage("you are dead image",yrdi);
yrd.visible = false;
yrd.depth = go.depth+2;

zombieGroup = new Group();
scaryGroup = new Group();
score = 0;

}

function draw(){

    if(gameState === SSTART ){
       logo.visible = true;
     if(mousePressedOver(logo)){
       story.visible = true;
       gameState = START;
       console.log(gameState);
     }
    }
    
    if(gameState === START){
    
      //  story.depth = logo.depth+2;

       if(mousePressedOver(story)){
           gameState = PLAY;
           console.log(gameState);
           //story.visible = false;
           background(bg);
        //    story.changeImage("background",bg);
        }
    }


   if(gameState === PLAY){
        //    story.visible= false;
//        spawnZombie();
        // spawnScary();
        // bs.loop();

    }

   /* if(gameState === END){
        go.visible = true;
        go.lifetime = 100;

        zombieGroup.setLifetimeEach(-1);
        scaryGroup.setLifetimeEach(-1);
        zombieGroup.setVelocityXEach(0);
        scaryGroup.setVelocityXEach(0);

        yrd.visible = true;
        if(mousePressedOver(yrd)){
            reset();
        }
    }*/
    
    drawSprites();
//   }
}

// creating obstacles for the game
function spawnZombie() {
    if(frameCount % 250 === 0 && gameState === PLAY) {
     var zombie = createSprite(800,330,20,50);

    //  it will be changed afterwards
     zombie.velocityX = -1;
     zombie.y = random(300,350);
     zombie.depth = background.depth+2;
     zombie.lifetime = 400;
     
     //  generate random zombie
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: zombie.addAnimation("1",z1i);
                zombie.scale = 0.5;
                break;
        case 2: zombie.addAnimation("2",z2i);
                zombie.scale = 0.6;
                break;
        case 3: zombie.addAnimation("3",z3i);
                zombie.scale = 0.6;
                break;
        case 4: zombie.addAnimation("4",z4i);
                zombie.scale = 0.6;
                break;
        default: break;
   }
     zombieGroup.add(zombie);
   }
   }

// spawning scary gif in middle to make the game interesting
function spawnScary(){
    if(frameCount % 400 === 0 && gameState === PLAY) {
     var scary = createSprite(750,325,100,100);
     scary.depth = zombieGroup.depth+5;
     scary.lifetime = 100;

     var rand = Math.round(random(1,8));
      switch(rand) {
        case 1: scary.addAnimation("9BLC",di);
                scary.scale = 4.1;
                break;
        case 2: scary.addAnimation("clown",d1i);
                scary.scale = 4.3;
                break;
        case 3: scary.addAnimation("crawl",d2i);
                scary.scale = 2.5;
                break;
        case 4: scary.addAnimation("face",d3i);
                scary.scale = 3.5;
                break;
        case 5: scary.addAnimation("dracula",d4i);
                scary.scale = 2.5;
                break;
        case 6: scary.addAnimation("skull",d5i);
                scary.scale = 0.5;
                break;
        case 7: scary.addAnimation("momo",d6i);
                scary.scale = 2.2;
                break;
        case 8: scary.addAnimation("mface",d7i);
                scary.scale = 3.5;
                break;
        default: break;
      }
      scaryGroup.add(scary);
    }
}

function reset(){
     gameState = SSTART;
     score = 0;
     scaryGroup.destroyEach();
     zombieGroup.destroyEach();
     restart.visible = false;
     gameOver.visible = false;

}