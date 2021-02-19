
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  roof1 = new roof(400,100,500,20)
    bob1 = new bob(200,400)
    rope1 = new rope(bob1.body,roof1.body,-200,0)
    bob2 = new bob(300,400)
    rope2 = new rope(bob2.body,roof1.body,-100,0)
    bob3 = new bob(400,400)
    rope3 = new rope(bob3.body,roof1.body,0,0)
    bob4 = new bob(500,400)
    rope4 = new rope(bob4.body,roof1.body,100,0)
    bob5 = new bob(600,400)
    rope5 = new rope(bob5.body,roof1.body,200,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  drawSprites();
  roof1.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();

 
}
function keyPressed(){
  if (keyCode === 32){
    bob1.velocityX = -2
  }
}

function mouseDragged(){
 Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});  
}



