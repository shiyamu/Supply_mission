var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400, 590, 800,15);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 568, 800, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	pac = new Package();


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	
  
  background(0);

  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //packageBody.isStatic = false;
  //pac.display();

  if(keyDown(DOWN_ARROW)){
	 // packageBody.isStatic = false
	 //pac.isStatic = false;
	 //pac.display();
	 Body.setStatic(packageBody,false)
  }
  drawSprites(); 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	//Body.setStatic(packageBody,false);
	//packageBody.isStatic = false;
	//packageBody.restitution = 1.0;
	//pac.display();
  }
}



