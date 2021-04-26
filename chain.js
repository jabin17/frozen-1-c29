class chain{

    constructor(bodyA,pointB){

var c={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
}
this.pointB=pointB;
this.chain=Constraint.create(c);
World.add(world,this.chain);

    }
fly(){
    this.chain.bodyA=null;
}
    display(){
        if(this.chain.bodyA){
            var A=this.chain.bodyA.position;
            var B = this.pointB;
    
            stroke ("red");
            strokeWeight(3);
    
            line(A.x,A.y,B.x,B.y);
        }
        
    }

}