class Package{
    constructor(){
        this.packageBody = Bodies.rectangle(400 , 200 , 20 ,20, {restitution:1.0, isStatic:false});
	    World.add(world, this.packageBody);
    }
    display(){
        var pos = this.packageBody.position;
        packageSprite=createSprite(pos.x, pos.y, 10,10);
	    packageSprite.addImage(packageIMG)
        packageSprite.scale=0.2
        drawSprites();
    }
}