//Si vas a declarar variables que utilizarás de forma global, generalas acá.
var player;
var platforms;
var cursors;
var radios;
var stars;
var score = 0, cont =0;
var scoreText;
var birds;
var generar =2;
var nBirds = 0;
var arrbirds = [];
var musicas;
var mainState = {
    create:function () {
     
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();

    platforms.enableBody = true;

    stars = game.add.group();
    stars.enableBody = true;
        if (cont == 0) { 
            cont += 1;
        var musicas = game.add.audio('musica');
    musicas.play();
    }
           
    var ground = platforms.create(0, game.world.height -40, 'ground');

    ground.scale.setTo(35, 2);

    ground.body.immovable = true; 

    ledge = platforms.create(0,game.world.height-130, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);

    ledge = platforms.create(300,game.world.height-130, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;        
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);

    ledge = platforms.create(600,game.world.height-130, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;    
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);

    ledge = platforms.create(900,game.world.height-130, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);
    //primer bloques
        
    ledge = platforms.create(150,game.world.height-220, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);

    ledge = platforms.create(450,game.world.height-220, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);

    ledge = platforms.create(750,game.world.height-220, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);
    //Segundo bloque

    ledge = platforms.create(0,game.world.height-310, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);

    ledge = platforms.create(300,game.world.height-310, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);        

    ledge = platforms.create(600,game.world.height-310, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);    

    ledge = platforms.create(900,game.world.height-310, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);
    //tercer bloque

    ledge = platforms.create(150,game.world.height-400, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);

    ledge = platforms.create(450,game.world.height-400, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);

    ledge = platforms.create(750,game.world.height-400, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);
    //cuarto bloque

    ledge = platforms.create(300,game.world.height-490, 'ground');
    ledge.scale.setTo(4,0.5);
    ledge.body.immovable = true;
    generarbolsa(ledge.body.position.x+70, ledge.body.position.y-25);
    
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    game.physics.arcade.enable(player);

    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    
    player.animations.add('left', [ 1, 2, 3, 4], 10, true);
    player.animations.add('right', [6, 7, 8,9], 10, true);
    player.animations.add('quiet', [5], 10, true);
    player.animations.add('ad', [10], 10, true);
    player.animations.add('ai', [0], 10, true);
       
        game.time.events.add(Phaser.Timer.SECOND * 2, createBirds, this);
        birds = game.add.group();
        birds.enableBody = true;
 
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    cursors = game.input.keyboard.createCursorKeys();
        
    },
    update:function () {
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.collide(birds, platforms) 
    hitPlatform = game.physics.arcade.collide(birds, platforms);
   
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
    game.physics.arcade.overlap(player, radios, win, null, this);
    game.physics.arcade.overlap(player, birds, muerte, null, this);
    player.body.velocity.x = 0;
        
for (var i = 0; i < nBirds; i++) {
            if (arrbirds[i].bird != null) {

                if (arrbirds[i].bird.body.blocked.right || arrbirds[i].bird.body.blocked.left) {

                    if (arrbirds[i].bird.body.position.y < 540) {
                        
                        limpiarbird(arrbirds[i].bird);

                    }else{

                        if (arrbirds[i].bird.body.blocked.right) {

                            arrbirds[i].bird.body.velocity.x = -100;
                            
                        }else{

                            arrbirds[i].bird.body.velocity.x = 100;
                            
                        }

                    }
                    
                }else{

                    if (arrbirds[i].bird.body.touching.down) {
                        
                        if (arrbirds[i].bird.body.moves) {
                            if (arrbirds[i].bird.body.velocity.x > 0) {
                                arrbirds[i].bird.animations.play('volarder');
                                arrbirds[i].bird.body.velocity.x = 100;
                            }else{
                                if (arrbirds[i].bird.body.velocity.x < 0) {
                                    arrbirds[i].bird.animations.play('volarizq');
                                   arrbirds[i].bird.body.velocity.x = -100;
                                }else{
                                    if (Math.ceil((1 + Math.ceil(Math.random()*99)) % 2) == 1) {
                                         arrbirds[i].bird.animations.play('volarder');
                                        arrbirds[i].bird.body.velocity.x = 100;
                                    }else{
                                        arrbirds[i].bird.animations.play('volarizq');
                                        arrbirds[i].bird.body.velocity.x = -100;
                                    }       
                                }                                   
                            }
                        }

                    }else{

                        arrbirds[i].bird.body.velocity.x = 0;
                        arrbirds[i].bird.frame = 4;
                    
                    }   

                }
            }
            
        }               

        if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
        
    }
    else if (cursors.right.isDown)
    {
    
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
    
        player.animations.stop();

        player.frame = 5;
    }
    
    
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
        
    }

if(player.body.touching.down )
        {

        }
        else if( cursors.left.isDown){
           player.body.velocity.x = -150;

        player.animations.play('ai');
        }
        else if( cursors.right.isDown){
           player.body.velocity.x = 150;

        player.animations.play('ad');
        }

    }
}

function collectStar (player, star) {
    
    star.kill();

    score += 1;
    if (score >= 10) {
        radios = game.add.sprite(400,  game.world.height - 515, 'radio');
        game.physics.arcade.enable(radios);
        radios.enableBody = true;
    }
    scoreText.text = 'Score: ' + score;
}


function limpiarbird(bird){
    bird.kill();
}

function muerte(player){
    score = 0;
    player.kill();
    generar = 2;
    nBirds = 0;
    arrbirds =[];
    game.state.start('lose');
    
}

   
    function win() {
    generar = 2;
    nBirds = 0;
    arrbirds =[];
    if (score >= 4) {
        score = 0;
        game.state.start('win');
    }
    
    
}

function generarbolsa(posx,posy){
     var star = stars.create(posx, posy, 'star');
}

function createBirds(bird){
            for (var i = 0; i < generar; i++) {
            var bird;
            bird = birds.create(Math.ceil(Math.random() * 1050), 5, 'bird');
            bird.animations.add('volarder', [4,5,6,7], 10, true);
            bird.animations.add('volarizq', [0,1,2,3],10,true);
            game.physics.arcade.enable(bird);
            bird.body.gravity.y = 160;
            bird.body.collideWorldBounds = true;

            var birdpeq = { "bird": bird, "gravity_y":160};
            arrbirds.push(birdpeq);
            nBirds++;
                        
        }
        if (generar < 6) {
            generar++;
        }               
        
        game.time.events.add(Phaser.Timer.SECOND * 5, createBirds, this);  
        
}
