game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
            //the title image for when my gme is starting and 00 is for the top  right corner of the sreen
		var titleImage = new me.sprite(0, 0, me.loader.getImage('title-screen'));
                me.game.world.addChild(titleImage, 1);
                
                
                this.hanler = (me.event.KEYDOWN, function(action, keyCode, edge){
                    if(action ==="start"){
                        me.state.change(me.state.PLAY);
                    }
                });
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		; // TODO
	}
});
