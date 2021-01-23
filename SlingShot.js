class SlingShot {
    constructor(body1,point2) {
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.05
        }
        this.pointB = point2;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);        
    }
    display() {
        if(this.chain.bodyA) {
        var point1 = this.chain.bodyA.position;
        var point2 = this.pointB;
        stroke("red");
        line(point1.x,point1.y,point2.x,point2.y);
        }
    }
    
    fly() {
        this.chain.bodyA = null;
    }
}