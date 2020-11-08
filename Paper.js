class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.8,
            friction : 0.5,
            density : 1.2
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }

    display(){
        fill(255)
        var pos = this.body.position
        circle(pos.x,pos.y,this.radius*2)
    }
}

