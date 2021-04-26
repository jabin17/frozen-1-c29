const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  
	engine = Engine.create();
	world = engine.world;

  block1 = new Block(400,200,30,30);
  block2 = new Block(700,320,70,70);
  block3 = new Block(700,240,70,70);
  block4 = new Block(200,320,70,70);
  block5 = new Block(700,120,70,70);

  Chain=new chain(hexagon.body,{x:200,y:100});
}

function draw() {
  background(255,255,255);  
 
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
Chain.display();

}