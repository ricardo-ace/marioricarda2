game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
            //the title image for when my gme is starting and 00 is for the top  right corner of the sreen
		var titleImage = (new me.Sprite(0, 0, me.loader.getImage('title-screen')),-10);
                me.game.world.addChild(titleImage, 1);
                //to press the enter button to start
                me.input.bindKey(me.input.KEY.ENTER, "start");
                
                
                me.game.world.addChild(new (me.Renderable.extend ({
                    
                  init: function(){
                      //font and size and color of my title letters 
                      this._super(me.renderable, 'init', [510, 30, me.game.viewport.width, me.game.viewport.height]);
                      
                      this.font = new me.font("Impact", 460, "White");
                  }, 
                  
                  draw: function(renderer){
                      this.font.draw(renderer.getContext(), "Barely Mario", 450, 130);
                      this.font.draw(renderer.getContext(), "Press ENTER to play", 250, 530);
                  }
                  
                    
                })));
                
                
                //so the action that will happen when pushed is restart
                this.hanler = (me.event.KEYDOWN, function(action, keyCode, edge){
                    if(action ==="start"){
                        me.state.change(me.state.PLAY);
                    }
                });
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
        //when playing not to restart if enter is pushed 
	onDestroyEvent: function() {
         me.input.unbindKey(me.input.KEY.ENTER);  
         //pays no attention to the hanler
	 me.event.unsubcribe(this.hanler);
	}
});
