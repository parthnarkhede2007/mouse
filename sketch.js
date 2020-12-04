
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var  pendulumDiameter=50;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  
  var options={
    mouse:canvasmouse
  }

  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);
  
bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50)
ground1 = new roof(400,100,300,40);
sling1= new suspender(bob1.body,ground1.body,-50*2,0);
sling2= new suspender(bob2.body,ground1.body,-25*2,0);
sling3= new suspender(bob3.body,ground1.body,-0*2,0);
sling4= new suspender(bob4.body,ground1.body,25*2,0);
sling5= new suspender(bob5.body,ground1.body,50*2,0);
  
Engine.run(engine);

}


function draw() {
  background("green");

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites ();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-50})
  }
}




