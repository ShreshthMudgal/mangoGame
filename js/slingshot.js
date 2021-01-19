class Slingshot {

    constructor (bodyA,pointB){
    
    var options = {
    bodyA : bodyA,
    pointB : pointB,
    length : 5,
    stiffness :0.004
    }
    this.sling = Constraint.create(options);
    this.pointB = pointB;
    World.add(world,this.sling);
    }
    
attach (bodyA) {

    this.sling.bodyA = bodyA;
}

    fly(){
    this.sling.bodyA = null;
    }
    
    display (){
    
    if (this.sling.bodyA){
        var posA = this.sling.bodyA.position
        var pointB = this.pointB
        strokeWeight(4);
        line(posA.x,posA.y,pointB.x,pointB.y);
           
    }
    
    }
    }