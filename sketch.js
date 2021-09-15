const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var character1,character1Img,character2,character2Img,character3Img,character4Img;
var snowflake,snowflake2,snowflake3,snowflake4,snowflake5,snowflake6,snowflake7,snowflake8,snowflake9,
snowflake10,snowflake11,snowflake12,snowflake13,snowflake14,snowflake15,snowflake16,snowflake17,snowflake18,
snowflake19,snowflake20,snowflake21;
var funSound;
function preload(){
   character1Img = loadImage("character1.png");
   character2Img = loadImage("character2.png");
   character3Img = loadImage("character3.png");
   funSound = loadSound("snowfalling.mp3");
   character4Img = loadAnimation("character1.png","character3.png","character2.png");
   backgroundImg = loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  character1 = createSprite(220, 270, 50, 50); 
  character1.scale=0.5;
  character1.addAnimation("snow",character2Img,character1Img,character3Img);
  snowflake = new Snow(600,50,60,45);
  snowflake2 = new Snow(650,60,60,44);
  snowflake3 = new Snow(300,90,60,80);
  snowflake4 = new Snow(200,20,60,0);
  snowflake5 = new Snow(100,40,60,20);
  snowflake6 = new Snow(50,30,60,20);
  snowflake7 = new Snow(550,10,60,180);
  snowflake8 = new Snow(450,0,60,30);
  snowflake9 = new Snow(350,-900,60,100);
  snowflake10= new Snow(750,-200,60,100);
  snowflake11= new Snow(700,-19,60,400);
  snowflake12= new Snow(50,-300,60,70);
  snowflake13= new Snow(100,-400,60,50);

  snowflake14 = new Snow(50,30,60,20);
  snowflake15 = new Snow(550,10,60,180);
  snowflake16= new Snow(450,0,60,30);
  snowflake17= new Snow(350,-1500,60,100);
  snowflake18= new Snow(750,-2000,60,100);
  snowflake19= new Snow(700,-2500,60,400);
  snowflake20= new Snow(50,-3000,60,70);
  snowflake21= new Snow(300,-700,60,50);
}

function draw() {
 funSound.play();
 background(backgroundImg);
 displaySnow();
 Engine.update(engine);
 drawSprites();
}
function displaySnow(){
 snowflake.display();
 snowflake2.display();
 snowflake3.display();
 snowflake4.display();
 snowflake5.display();
 snowflake6.display();
 snowflake7.display();
 snowflake8.display();
 snowflake9.display();
 snowflake10.display();
 snowflake11.display();
 snowflake12.display();
 snowflake13.display();
 snowflake14.display();
 snowflake15.display();
 snowflake16.display();
 snowflake17.display();
 snowflake18.display();
 snowflake19.display();
 snowflake20.display();
 snowflake21.display();
}