class Food
{
    
  constructor()
  {
    this.FoodStock=0
    this.lastFed
    this.image=loadImage("images/milk.png")
  }
  updateFoodStock(FoodStock)
    {
        this.FoodStock=FoodStock
    }
    getFedTime(lastFed)
    {
        this.lastFed=lastFed
    }
    // if the foodStock is not empty thendeduct the value of foodStock by 1
    deductFood()
    {
        if(FoodStock>0)
        {
            this.FoodStock=this.FoodStock-1
        }


    }
    getFoodStock()
    {
        return this.FoodStock
    }
  // create a for loop if the foodStock is not = to 0
  // in the for loop print all the fod items stored in the foord stock
  //inside the for loop if the itme is divisible by ten give x value as 70 and increase y value by 50 where x and y are cords where each of the items will be displayed
  display()
  {
    if(FoodStock!=0)
    {
        for(var i=0;i<this.FoodStock;i=i+1)
        {
            if(i%10==0)
            {
                x=70
                y=y+50
            }
            image(this.image,x,y,50,50)
            x=x+30
        }
    }
  }
}