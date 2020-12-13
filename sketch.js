
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1280, 606);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof (640,100,350,20);

	bob1 = new Bob (510,350,30)
	bob2 = new Bob (575,350,30)
	bob3 = new Bob (640,350,30)
	bob4 = new Bob (703,350,30)
	bob5 = new Bob (767,350,30)

	rope = new Rope(bob1.bob,roof.body,-160,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope.display();


 
}



