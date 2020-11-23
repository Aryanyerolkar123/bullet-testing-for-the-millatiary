var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1200,400);
 
 speed = random(223, 321);
 weight = random(30, 52);
 
 wall = createSprite(1200, 200, thickness, height/2);
 
 thickness = random(22, 83);

}

function draw() {
  background(255,255,255);

  function hasCollided(Lbullet, Lwall);
  { 

   bulletRidgeEdge = lbullet.x +bullet.width;
   wallleftLeftEdge = lwall.x;
   if (bulletRightEdge >= wallleftEdge);

   {

        return true;

   }
   
        return false;

   }

  if (hasCollided(bullet, wall));
  
  {

     bullet.velocityX = 0
     var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

     
     if (damage>10);

  {

      wall.shapeColor = color(255, 0, 0);

  }

  if (damage > 10);
   
}

       wall.shapeColor = color(0, 255, 0);


}

