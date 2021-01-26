const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create(); 
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground= new Ground(240, 750, 500, 30)

  division1= new Division(80, 640, 10, 250);
  division2= new Division(160, 640, 10, 250);
  division3= new Division(240, 640, 10, 250);
  division4= new Division(320, 640, 10, 250);
  division5= new Division(400, 640, 10, 250);
  division6= new Division(480, 640, 10, 250);
  division7= new Division(0, 640, 10, 250);

  plinkos();

}

function draw() {
  background('black'); 
  Engine.update(engine);
  
  ground.display(); 
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  if (frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10, 10, 10)))
  }

  plinkoDisplay();



  drawSprites();
}

function plinkos(){

  plinko1 = new Plinko(50,50,10);
  plinko2 = new Plinko(100,50,10);
  plinko3 = new Plinko(150,50,10);
  plinko4 = new Plinko(200,50,10);
  plinko5 = new Plinko(250,50,10);
  plinko6 = new Plinko(300,50,10);
  plinko7 = new Plinko(350,50,10);
  plinko8 = new Plinko(400,50,10);

  plinko9 = new Plinko(75,100,10);
  plinko10 = new Plinko(125,100,10);
  plinko11 = new Plinko(175,100,10);
  plinko12 = new Plinko(225,100,10);
  plinko13 = new Plinko(275,100,10);
  plinko14 = new Plinko(325,100,10);
  plinko15 = new Plinko(375,100,10);

  plinko16 = new Plinko(50,150,10);
  plinko17 = new Plinko(100,150,10);
  plinko18 = new Plinko(150,150,10);
  plinko19 = new Plinko(200,150,10);
  plinko20 = new Plinko(250,150,10);
  plinko21 = new Plinko(300,150,10);
  plinko22 = new Plinko(350,150,10);
  plinko23 = new Plinko(400,150,10);

  plinko24 = new Plinko(75,200,10);
  plinko25 = new Plinko(125,200,10);
  plinko26 = new Plinko(175,200,10);
  plinko27 = new Plinko(225,200,10);
  plinko28 = new Plinko(275,200,10);
  plinko29 = new Plinko(325,200,10);
  plinko30 = new Plinko(375,200,10);

  plinko31 = new Plinko(50,250,10);
  plinko32 = new Plinko(100,250,10);
  plinko33 = new Plinko(150,250,10);
  plinko34 = new Plinko(200,250,10);
  plinko35 = new Plinko(250,250,10);
  plinko36 = new Plinko(300,250,10);
  plinko37 = new Plinko(350,250,10);
  plinko38 = new Plinko(400,250,10);

  plinko39 = new Plinko(75,300,10);
  plinko40 = new Plinko(125,300,10);
  plinko41 = new Plinko(175,300,10);
  plinko42 = new Plinko(225,300,10);
  plinko43 = new Plinko(275,300,10);
  plinko44 = new Plinko(325,300,10);
  plinko45 = new Plinko(375,300,10);

  plinko46 = new Plinko(50,350,10);
  plinko47 = new Plinko(100,350,10);
  plinko48 = new Plinko(150,350,10);
  plinko49 = new Plinko(200,350,10);
  plinko50 = new Plinko(250,350,10);
  plinko51 = new Plinko(300,350,10);
  plinko52 = new Plinko(350,350,10);
  plinko53 = new Plinko(400,350,10);

  plinko54 = new Plinko(75,400,10);
  plinko55 = new Plinko(125,400,10);
  plinko56 = new Plinko(175,400,10);
  plinko57 = new Plinko(225,400,10);
  plinko58 = new Plinko(275,400,10);
  plinko59 = new Plinko(325,400,10);
  plinko60 = new Plinko(375,400,10);
}

function plinkoDisplay(){
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();
  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();
  plinko51.display();
  plinko52.display();
  plinko53.display();
  plinko54.display();
  plinko55.display();
  plinko56.display();
  plinko57.display();
  plinko58.display();
  plinko59.display();
  plinko60.display();
}