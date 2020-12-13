class Bob {
  constructor (x,y,r){
 
   var options = {
       isStatic : false,
       restitution : 0.3,
       friction : 1.0,
       density : 1.2
   }


   this.bob = Bodies.circle(x,y,r,options);
   this.r = r
   World.add(world,this.bob)


  }

display () {
var pos = this.bob.position
var angle = this.bob.angle
push()
    translate(pos.x,pos.y)
    rotate(angle)
    strokeWeight ("3")
    stroke ("lightgreen")
    fill ("cyan")
    ellipseMode(RADIUS);
    ellipse(0, 0 ,this.r,this.r)
  pop();
    
}
}