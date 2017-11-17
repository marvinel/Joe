var winState = {
	preload:function () {
		game.load.image('fondo_win','assets/win.jpg');
	},
	create: function() {
		/*Aquí agregas un fondo, un boton y un texto, simplemente mostrarás un mensaje
		que ganó y le darás la opcion de reiniciar puedes hacer que regrese presionando
		una tecla tambien, simplemente te guias con las "clases" que tengan botones,
		es lo mismo practicamente*/

		var fondo = game.add.image(0,0, 'fondo_win');

		var key = game.input.keyboard.addKey(Phaser.Keyboard.A);  
		key.onDown.addOnce(winState.start, this);

		var startT  = game.add.text(game.world.centerX - 200, game.world.height-142, 'PRESIONA "A" PARA IR AL MENU', {
			font: '20px Arial',
			fill: '#A4A4A4',
			stroke: '#2E2E2E',
			strokeThickness: 4});
	},

	start: function() {
		game.state.start('load');
	},

	restart: function() {
	}
};