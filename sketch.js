
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var dustbin;
var paperImg;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,350);

	ground = new Ground((height/2) + 50,height - 30);

	dustbin=new Dustbin(670,660);
	Engine.run(engine);
  
}


function draw() {
  background("White");
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin.display();

		if(keyDown(UP_ARROW)){
			Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		}
	

  drawSprites();
}



