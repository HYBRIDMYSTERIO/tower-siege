class Mango {
    constructor(x,y){
        var option = {
            'isStatic':true,
            'restitution':0.8,
            'friction':1,
            'density':1
            
        }
        this.body = Bodies.rectangle(x,y,5,10,option);
    
        
    

        World.add(world,this.body);

    }
 displaymango(){
     var position = this.body.position;
     rectMode(CENTER);
     fill(255);
     stroke("green");
     strokeWeight(4);
     rect(position.x,position.y);
 }
}