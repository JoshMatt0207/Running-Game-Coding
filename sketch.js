var roadImg
var runnerImg,runner
var obstacle1,obstacle2,ob, obsGroups;
var bg, ground=0;
var score = 0;
var Play=1;
var End=0;
var gameState=Play



function preload(){
roadImg=loadImage("background2.jpg")
runnerImg=loadImage("runner2.png")
obstacle1=loadImage("obstacle1.png")
obstacle2=loadImage("obstacle2.png")
}

function setup() {
 createCanvas(1400,700)
 
 bg=createSprite(700,350,1400,700)
 bg.addImage(roadImg)
 bg.scale=4
 bg.velocityX=-3
 
 ground=createSprite(700,610,1400,30)
 ground.visible=false
 
 
 
 runner=createSprite(200,500,50,60)
 runner.addImage(runnerImg)
 runner.scale=.5
 runner.setCollider("rectangle",0,0,200,80)
 runner.debug=true


 
 
 obsGroups= new Group()
}

function draw() {
background("blue")
rectMode(CENTER)



if(gameState===Play){
  score = score + Math.round(getFrameRate()/60);
  
if(bg.x<600){
  bg.x=700
  }

  if(keyDown("Up") && runner.y>=400){
    runner.velocityY=-8
    }
    
    runner.velocityY=runner.velocityY + 0.8

   
  }

  if(gameState===End){
    bg.velocityX=0
    runner.velocityY=0
  
  
    if(obsGroups.isTouching(runner)){
      //background("red")
      obsGroups.setVelocityXEach(0)
      obsGroups.destroyEach()
      bg.velocityX=0
      obsGroups.setLifetimeEach(0)
      score=0
  }
  }
  


runner.collide(ground)



 obstacles()
 drawSprites()
 fill("red")
textSize(25);
text("Score :"+ score,150,50)
}














function obstacles(){
    if(frameCount% 200===0 ){
    ob=createSprite(1300,610,40,30)
    ob.velocityX=-2
    ob.scale=.2
    ob.lifetime=700
    var r = Math.round(random(1,2))    
  if(r===1){
    ob.addImage(obstacle1)
    }
    else if(r===2){
    ob.addImage(obstacle2)
    }



    console.log(frameCount)
    
  

    obsGroups.add(ob);


    }
   
}