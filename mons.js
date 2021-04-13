class mons{
    constructor(x,y,width,height,angle){
        
        var options = {
            'restitution': 0.0,
            'friction': 0.03
        }
        this.body = Bodies.rectangle(900,310,100,100,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    }
    }
