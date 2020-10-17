var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1, wall2, bottom
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
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	wall1=createSprite(300,610,20,100)
	wall1.shapeColor="red"
	wall2=createSprite(500,610,20,100)
	wall2.shapeColor="red"
	bottom=createSprite(400,650,200,20)
	bottom.shapeColor="red"
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	bottom=Bodies.rectangle(405,628,200,20,{isStatic:true})
	World.add(world,bottom)
	left=Bodies.rectangle(320,610,20,100,{isStatic:true})
	World.add(world,left)
	right=Bodies.rectangle(520,610,20,100,{isStatic:true})
	World.add(world,right)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if (keyDown ("down")) {
	Matter.Body.setStatic(packageBody,false)
	
  }
  drawSprites();
 
}

