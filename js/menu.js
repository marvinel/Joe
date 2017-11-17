var menuState = {

	create: function() {

		var fondo = game.add.image(0,0, 'fondo');
		var nombre = game.add.text(380,220, 'Joeeee',{
			font: '100px Arial',
			fill: '#ffffff',
			stroke: '#000',
		});

		var startLabel = game.add.text(game.world.centerX-220, game.world.height-50, 'Presione la tecla "A" para empezar', {
				font: '25px Arial',
				fill: '#ffffff',
				stroke: '#000',
				strokeThickness: 6
			});

		var key = game.input.keyboard.addKey(Phaser.Keyboard.A);  
			key.onDown.addOnce(menuState.start, this);

			var start = game.add.button(game.world.centerX - 250, game.world.height-150, 'boton', menuState.start, this, 2, 1, 0);
	    	},

	start: function() {
		game.state.start('play');
	},
	ins: function() {
		game.state.start('ins');
	}
};
