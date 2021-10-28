//Create variables here
var dogimg
var dog
var dogimg1
var database
var foodS
var foodStock
var foodOBJ
var frameChanged
var addFood
function preload()
{
	//load images here
  dogimg=loadImage("images/dogimg.png");
  dogimg1=loadImage("images/dogimg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  foodOBJ= new Food();
  feed= createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)
  addFood= createButton("Add the food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
  dog=createSprite(250,300,150,150);
  dog.addImage("standing", dogimg);
  dog.scale=0.15;
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() {  
  background("white")
  if(keyDown(UP_ARROW))
  {
    writeStock(foodS)
    dog.addImage("dogimg1",dogimg1)
  }
  drawSprites();
  //add styles here
  text("Pres up arrow key to feed the dog",130,10)
  text(mouseX+","+mouseY,mouseX,mouseY);
}
// function readStock reads value fromm database.
function readStock(data)
{
foodS=data.val()
}
// function writeStock writes the value in database
function writeStock(x)
{
if(x<=0)
{
x=0
}
else
{
x=x-1
}
database.ref("/").update({Food:x})
}

function feedDog()
{
  dog.addImage("happy",dogimg1)
  if(foodOBJ.getFoodStock()<=0)
  {
    foodOBJ.updateFoodStock(foodOBJ.getFoodStock()*0)
  }
  else
  {
    foodOBJ.updateFoodStock(foodOBJ.getFoodStock()*-1)
  }
  database.ref("/").update({Food:foodOBJ.getFoodStock()
    
  })
}

function addFoods()
{
  foodS++
  database.ref("/").update({Food:foodS
    
  })
}
