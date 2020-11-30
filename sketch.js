var a;
var circles=[];
var floor;

function setup() {
  createCanvas(800,800);

  floor = new Ground(400, 700, 900, 5);

  a=height;
  circles.push(width/2)
}

function draw() {
  background(153, 250, 97);
  
  
  a=a-1;
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}

floor.display();

 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 