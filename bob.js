class bob
{
    constructor(x,y,){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.8,
        }
        this.body = Bodies.circle(x,y,50,options)
        this.radius = 50
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,50)
       
    }
}