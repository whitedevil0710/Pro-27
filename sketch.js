
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(425,200,500,50);
	
	bobObject1 = new bob(150,600,50);
	bobObject2 = new bob(250,600,50);
	bobObject3 = new bob(350,600,50);
	bobObject4 = new bob(450,600,50);
	bobObject5 = new bob(550,600,50);

	rope1 = new rope(bobObject1.body,roof1.body,-50*4,0);
	rope2 = new rope(bobObject2.body,roof1.body,-50*2,0);
	rope3 = new rope(bobObject3.body,roof1.body,-50*0,0);
	rope4 = new rope(bobObject4.body,roof1.body,-50*-2,0);
	rope5 = new rope(bobObject5.body,roof1.body,-50*-4,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  Engine.update(engine);

  roof1.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:150})
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:150,y:-150})
	}
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:150})
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-150,y:150})
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:150,y:-150})
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:150,y:-150})
	}
}


