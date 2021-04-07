
class Paper{
    constructor(x,y,radius){
       var options={
         isStatic:false,
         'restitution':0.3,
         'friction':0.5,
         'density':1.2,  
       } 
 this.body= bodies.circle(x,y, radius, options);
 this.radius=radius;
 
 
 world.add(world,this.body);
 }
  display(){
      ellipsMode(RADIUS);
 
      fill("yellow");
 
     circle(this.body.position.x,this.position.y.this.radius); 
  }  
 }; 




















