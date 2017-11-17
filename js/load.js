var loadState = {
  
  preload:function () { 
    var cont = 0;
		var loadingLabel = game.add.text(80, 150, 'Cargando...', {
			font: '30px Courier',                                 
			fill: '#ffffff'                                      
		});
    
        
        /*
            Acá agregas las imagenes, audios y spritesheets, te explico...
            Para agregar un audio debes escribir: game.load.audio(nombre de la variable, ubicacion del audio);
            en el nombre del audio es como ponerle un nombre a la variable (puede ser cualquiera)
            Y la ubicación, es en assets, por ejemplo si tienes un audio que se llame, salto entonces escribes
            game.load.audio('salto', 'assets/salto.mp3'); debes poner el nombre del archivo seguido por su tipo, o sea .mp3, .wav, .ogg, etc.
        */
    game.load.audio('musica','assets/musica1.mp3');
    game.load.image('fondo_win','assets/win.jpg');
    game.load.image('sky', 'assets/fondo.png');
    game.load.image('ground', 'assets/draws.png');
    game.load.image('star', 'assets/money.png');
    game.load.spritesheet('dude', 'assets/personaje.png', 38, 35);
    game.load.spritesheet('bird', 'assets/pajaro.png', 58, 35);
    game.load.image('radio','assets/radio.png');
    game.load.spritesheet('fondo','assets/fondo.png');
    game.load.image('fondo_lose','assets/perder.jpg');
    game.load.image('boton','assets/comenzar.jpg');
  

	},

	create: function() {  
        if (cont == 0) {
                cont += 1;
        var musicas = game.add.audio('musica');
    musicas.play();
    }
		game.state.start('menu');
	}

};
