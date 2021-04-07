
class Ground{
   constructor(x,y,width,height){
      var options={
        isStatic:true,
        'restitution':0,
        'friction':0,
        'density':1,  
      } 
this.body= bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;

world.add(world,this.body);
}
 display(){
     rectMode(CENTER);

     fill(255);

    rect(this.body.position.x,this.position.y.this.width,this.height); 
 }  
}; 
   
   
    























