const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var floor;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  floor = new Ground(400, 700, 900, 5);

  
}

function draw() {
  background(153, 250, 97);

  Engine.update(engine);
  
 
  floor.display();

 drawSprites();
}
