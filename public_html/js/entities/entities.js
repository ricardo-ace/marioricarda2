// TODO
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "mario",
                spritewidth: "128",
                spriteheight: "128",
                width: 128,
                height: 128,
                getShape: function() {
                    return (new me.Rect(0, 0, 30, 128)).toPolygon();

                }
            }]);
        //this is for the  the many movement of his legs when he walks. 
        this.renderable.addAnimation("idle", [3]);
        this.renderable.addAnimation("smallWalk", [8, 9, 10, 11, 12, 13], 80);

        this.renderable.setCurrentAnimation("idle");

        //set the velocity of mario the first number represents speed on the x axis and on the y axis 
        this.body.setVelocity(5, 20);

        //makes th camera (viewport) follow mario the position
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
    update: function(delta) {
        //checks if the right bottun is pressed, and if not moves to the next line of code
        if (me.input.isKeyPressed("right")) {
            //sets the position of mario by adding velocity and above is set velocity time 
            //me.vel.tick is makes the charcter move at a smove place even if the update are irrepler
            this.body.vel.x += this.body.accel.x * me.timer.tick;

        } else {
            this.body.vel.x = 0;
        }

        this.body.update(delta);



        //collision check is a function that passes a peramitor to determine and travel mario walking into 
        //the first peramitor passes this object as one of the area but,  
        me.collision.check(this, true, this.collideHandler.bind(this), true);

        if (this.body.vel.x !== 0) {
            if (!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
                this.renderable.setAnimationFrame();
            }
        } else {
            this.renderable.setCurrentAnimation("idle");
        }


        this._super(me.Entity, "update", [delta]);
        return true;
    },
    collideHandler: function(response) {

    }

});
//this is for the door so th e charcter ccan go to the next door 
game.LevelTrigger = me.Entity.extend({
    init: function(x, y, setting) {
        this._super(me.Entity, 'init', [x, y, setting]);
        this.body.onCollision = this.onCollision.bind(this);
        this.level = setting.level;
        this.xSpawn = setting.xSpawn;
        this.ySpawn = setting.ySpawn;
    },
    onCollision: function() {
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer(this.xSpawn, this.ySpawn);
    }

});

game.BadGuy = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "slime",
                spritewidth: "60",
                spriteheight: "28",
                width: 60,
                height: 28,
                getShape: function() {
                    return (new me.Rect(0, 0, 00, 28)).toPolygon();
                }
            }]);

        this.spritewidth = 60;
        var width = settings.width;
        x = this.pos.x;
        this.startX = x;
        this.endX = x + width - this.spritewidth;
        this.pos.x = x + width - this.spritewidth;
        this.updateBounds();
        
        this.alwaysUpdate = true;
        
        this.walkLeft = false;
        this.alive = true;
        this.type = "badguy";
        
        this.body.setVelocity (4, 6);

    },
    
    
    update: function(delta) {
     this.body.update(delta);
     me.collision.check(this, true, this.collideHandler.bind(this), true);
     
     if(this.alive){
     if(this.walkLeft && this.pos.x <= this.startX){
       this.walkLeft = false; 
   }else is (!this.walkLeft && this.pos.x >= this.endX);
       this.walkLeft = true;
   }
     this.flipX(!this.walkLeft);
     this.body.vel.x += (this.walkLeft) ? -this.body.accel.x * me.timer.tick :this.body.accel.x * me.timer.tick;
     
//         }else{
//             me.game.world.removeChild(this);
//         } 
//         
         
         this._super(me.Entity, "update", [delta]);
    }
});