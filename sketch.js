var ball;
var groundObj, leftSide, rightSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,100,20,ball_options);
	World.add(world,ball)

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(500,600,20,120);
	rightSide = new Ground(700,600,20,120);

	Engine.run(engine);
	rectMode(CENTER);
  	ellipseMode(RADIUS);
}


function draw() {
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20);
  console.log(ball.position.y);
  Engine.update(engine);
  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		// write code here to apply force to the ball body
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-10});
		Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:0});
	}
}