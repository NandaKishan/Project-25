class Ground {
    constructor(x,y){
        var options = {
            isStatic : true,
            density : 0
        }

        this.body = Bodies.rectangle(x,y,800,20,options);
        this.width = 800;
        this.height = 20;
        World.add(world, this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        strokeWeight(3);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
}