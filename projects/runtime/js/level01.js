var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:500,y:groundY-25},
                {type: 'sawblade',x:750,y:groundY-20},
                {type: 'sawblade',x:250,y:groundY-30},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:800,y:groundY-50},
                {type: 'red',x:330,y:groundY-50},
                {type: 'red',x:420,y:groundY-45},
                {type: 'red',x:900,y:groundY-40},
                {type: 'knux',x:500,y:groundY-33},
                {type: 'knux',x:500,y:groundY-4},
                {type: 'knux',x:500,y:groundY-12},
                {type: 'sans',x:500,y:groundY-37},
                {type: 'sans',x:500,y:groundY-57},
                {type: 'sans',x:500,y:groundY-11},
                {type: 'wed',x:500,y:groundY-22},
                {type: 'cyoob', x:300,y:groundY-60},
                {type: 'win',x:1000,y:groundY},
                
                
            ]
        };
        
        for(var index =0; index < levelData.gameItems.length; index++){
            if(levelData.gameItems[index].type === "sawblade") {
                createSawBlade(levelData.gameItems[index].x, levelData.gameItems[index].y)
            }
            if(levelData.gameItems[index].type === "red") {
                createRed(levelData.gameItems[index].x, levelData.gameItems[index].y)
            }
            if(levelData.gameItems[index].type === "knux") {
                createKnux(levelData.gameItems[index].x, levelData.gameItems[index].y)
            }
            if(levelData.gameItems[index].type === "Kirb") {
                createKirb(levelData.gameItems[index].x, levelData.gameItems[index].y)
            }
            if(levelData.gameItems[index].type === "sans") {
                createSans(levelData.gameItems[index].x, levelData.gameItems[index].y)
            }
            if(levelData.gameItems[index].type === "wed") {
                createWeds(levelData.gameItems[index].x, levelData.gameItems[index].y)
            }
            if(levelData.gameItems[index].type === "cyoob") {
                createCyoob(levelData.gameItems[index].x, levelData.gameItems[index].y)
            }
            if(levelData.gameItems[index].type === "win") {
                createWin(levelData.gameItems[index].x, levelData.gameItems[index].y)
            }
        }
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        //saw data
        
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 20
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x
            myObstacle.y = y
            game.addGameItem(myObstacle);  
            var obstacleImage = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/shaw.png');
            
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            myObstacle.rotationalVelocity= 10;
        }
        
        //enemy data
        function createRed(x,y){
        var enemy =  game.createGameItem('enemy',25);
        enemy.x = x;
        enemy.y = y;
        var redSquare = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/kermit.png');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        enemy.onPlayerCollision = function() {
            game.changeIntegrity(-10);
        };
        enemy.onProjectileCollision = function() {
            game.increaseScore(50);
            enemy.fadeOut();
        };
        }
        
        //knux info
        function createKnux(x,y){
        var knux =  game.createGameItem('enemy',25);
        knux.x = x
        knux.y=y
        var red = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/knux.png');
        red.x = -25;
        red.y = -25;
        knux.addChild(red);
        game.addGameItem(knux);
        knux.velocityX = -5;
        knux.velocityY = 0.25;
        knux.rotationalVelocity = 20;
        knux.onPlayerCollision = function() {
            game.changeIntegrity(-10);
        };
        knux.onProjectileCollision = function() {
            game.increaseScore(100);
            knux.fadeOut();
        };
        }
        
        //buff kirb info
        function createKirb(x,y){
        var kirb =  game.createGameItem('enemy',25);
        kirb.x=x
        kirb.y=y
        var pink = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/buff kirb.png');
        pink.x = -25;
        pink.y = -25;
        kirb.addChild(pink);
        game.addGameItem(kirb);
        kirb.velocityX = -3;
        kirb.velocityY = 0.25;
        kirb.rotationalVelocity = 20;
        kirb.onPlayerCollision = function() {
            game.changeIntegrity(-10);
        };
        kirb.onProjectileCollision = function() {
            game.increaseScore(200);
            kirb.shrink();
        };
        }
        
        //saness info
        function createSans(x,y){
        var saness =  game.createGameItem('enemy',25);
        saness.x=x
        saness.y=y
        var blue = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/saness.png');
        blue.x = -25;
        blue.y = -25;
        saness.addChild(blue);
        game.addGameItem(saness);
        saness.velocityX = -3;
        saness.velocityY = 0.25;
        saness.rotationalVelocity = 20;
        saness.onPlayerCollision = function() {
            saness.shrink();
            saness.rotationalVelocity =-50;
            game.increaseScore(20);
        };
        }
        //wednesday info
        function createWeds(x,y){
        var wed =  game.createGameItem('enemy',25);
        wed.x=x
        wed.y=y
        var dude = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/wednesday.png');
        dude.x = -25;
        dude.y = -25;
        wed.addChild(dude);
        game.addGameItem(wed);
        wed.velocityX = -3;
        wed.onPlayerCollision = function() {
            wed.shrink();
            game.changeIntegrity(60);
        };
        }
        //cyoob info
        function createCyoob(x,y){
        var box =  game.createGameItem('enemy',25);
        box.x=x
        box.y=y
        var cyob = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/cyoob.gif');
        cyob.x = -25;
        cyob.y = -25;
        box.addChild(cyob);
        game.addGameItem(box);
        box.velocityX = -3;
        box.onPlayerCollision = function() {
            box.shrink();
            game.increaseScore(700);
        };
        }
        //win info
        function createWin(x,y){
        var win =  game.createGameItem('enemy',25);
        win.x=x
        win.y=y
        var wine = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/Untitled.png');
        wine.x = -25;
        wine.y = -25;
        wine.scaleX = 0.2;
        wine.scaleY = 0.3;
        win.addChild(wine);
        game.addGameItem(win);
        win.velocityX = -0.8;
        win.onPlayerCollision = function() {
        alert("you has winned!!!1")
        win.onProjectileCollision = function(){
            win.velocityX = -2
        }
        };
        };
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
