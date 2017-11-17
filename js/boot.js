var bootState = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE); //En teoría aquí no tienes que cambiar nada
        game.state.start('load');
    }
};
