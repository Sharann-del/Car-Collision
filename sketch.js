var wall1,wall2,wall3,wall4;
var car1,car2,car3,car4;
var speed,weight;
var breaker1,breaker2,breaker3;

function setup() {
  createCanvas(1600,800);
  speed=random(55,90);
  weight=random(400,1500);

  car1=createSprite(50,100,40,40);
  wall1=createSprite(1550, 100, 20, 100);
  car1.shapeColor="yellow";
  wall1.shapeColor="yellow";
  car1.velocityX=speed;

  car2=createSprite(50,300,40,40);
  wall2=createSprite(1550, 300, 20, 100);
  car2.shapeColor="green";
  wall2.shapeColor="green";
  car2.velocityX=speed;

  car3=createSprite(50,500,40,40);
  wall3=createSprite(1550, 500, 20, 100);
  car3.shapeColor="blue";
  wall3.shapeColor="blue";
  car3.velocityX=speed;

  car4=createSprite(50,700,40,40);
  wall4=createSprite(1550, 700, 20, 100);
  car4.shapeColor="indigo";
  wall4.shapeColor="indigo";
  car4.velocityX=speed;

  breaker1=createSprite(800,200,1600,10);
  breaker1.shapeColor="black";

  breaker2=createSprite(800,400,1600,10);
  breaker2.shapeColor="black";

  breaker3=createSprite(800,600,1600,10);
  breaker3.shapeColor="black";
}

function draw() {
  background("darkorange");  

  if(wall1.x-car1.x < (car1.width+wall1.width)/2
  ||wall2.x-car2.x < (car2.width+wall2.width)/2
  ||wall3.x-car3.x < (car3.width+wall3.width)/2
  ||wall4.x-car4.x < (car4.width+wall4.width)/2)
  {
    car1.velocityX=0;
    car4.velocityX=0;
    car4.velocityX=0;
    car4.velocityX=0;

    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
      car2.shapeColor=color(255,0,0);
      car3.shapeColor=color(255,0,0);
      car4.shapeColor=color(255,0,0);
    }
    if(deformation<180
    &&deformation>100)
    {
      car1.shapeColor=color(230,230,0);
      car2.shapeColor=color(230,230,0);
      car3.shapeColor=color(230,230,0);
      car4.shapeColor=color(230,230,0);
    }
    if(deformation>100)
    {
      car1.shapeColor=color(0,255,0);
      car2.shapeColor=color(0,255,0);
      car3.shapeColor=color(0,255,0);
      car4.shapeColor=color(0,255,0);
    }

  }
  drawSprites();
}