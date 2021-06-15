class bob{
    constructor(x,y,r){
        var options_bob = {
            isStatic:false,
            restitution:1,
            friction:1,
            density:0.5
        }
     this.x = x;
     this.y = y;
     this.r = r;   
     
     this.body = Bodies.circle(this.x,this.y,this.r,options_bob);
     World.add(world,this.body); 
    
    }
 display(){
     var pos = this.body.position;
     push();
     
     translate(pos.x,pos.y);
     rectMode(CENTER);
     strokeWeight(2);
     fill("silver");
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,50);

     pop();
}
}