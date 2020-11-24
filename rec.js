class edge{
    constructor(x,y,width,height){
       fill("blue");
       var options={
           isStatic:true
       } 
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
      
       World.add(world,this.body);

    }
    display(){
        var angle =this.body.angle;
        var pos =this.body.position;
        push();
        
        translate(pos.x,pos.y);
    rotate(angle);
    fill("red")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
    pop();  
    }
}