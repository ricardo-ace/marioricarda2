game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        //these are for the background tiles 
           {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
           //these are for the solid tiles so i wont fall through the gorund 
           {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
           {name: "mario", type:"image", src: "data/img/player1.png"},
           {name: "title-screen", type:"image", src: "data/img/title-screen.png"},
           {name: "slime", type:"image", src: "data/img/slime-spritesheet.png"},
           
           

	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
          {name: "RicardoLevel01", type: "tmx", src: "data/map/Ricardolevel01.tmx"},
          {name: "RicardoLevel02", type: "tmx", src: "data/map/Ricardolevel02.tmx"}
	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
];
