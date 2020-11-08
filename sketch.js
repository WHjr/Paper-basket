
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, bin, paper;
var wall1, wall2;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,790,1200,20)
	wall1 = new Ground(10,400,20,800);
	wall2 = new Ground(1190,400,20,800);
	bin = new Bin(600,770,150,80)
	paper = new Paper(100,600,7);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bin.display();
  paper.display();
  ground.display();
  wall1.display();
  wall2.display();

  //keyPressed();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		//Body.setStatic(paper.body,false)
		Matter.Body.applyForce(paper.body,paper.body.position,{x:8,y:-5})
	} 
	else if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-8,y:-5})
	}
}

