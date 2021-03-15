
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof=new Roof(340,250,250,25);

   bob1=new Bob(240,450,50,50);
   bob2=new Bob(290,450,50,50);
   bob3=new Bob(340,450,50,50);
   bob4=new Bob(390,450,50,50);
   bob5=new Bob(440,450,50,50);

   rope1=new Rope(bob1.ball,roof.body,-100,0)
   rope2=new Rope(bob2.ball,roof.body,-50,0)
   rope3=new Rope(bob3.ball,roof.body,0,0)
   rope4=new Rope(bob4.ball,roof.body,50,0)
   rope5=new Rope(bob5.ball,roof.body,100,0)
   
   Engine.run(engine);
	}


function draw() {
  rectMode(CENTER);
  background("#9EA389");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

}


function keyPressed(){
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(bob1.ball,bob1.ball.position,{x:-730,y:0})
                 }
           }

