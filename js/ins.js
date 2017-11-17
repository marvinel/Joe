var insState = {
  create: function() {

		//Si decides tener instrucciones es simplemente que pongas un fondo, un texto y un boton que regrese, recuerda que la funcion del boton debes escribirla
		//como this.menu o insState.menu = button(posicionX, posicionY, nombre variable, this.menu, this, 1,2,3);


	},
	menu: function() {
		game.state.start('menu');
	},
}
