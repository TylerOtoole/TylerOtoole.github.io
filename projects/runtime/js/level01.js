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
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 110 },
                { "type": "sawblade", "x": 600, "y": groundY - 110},
                { "type": "sawblade", "x": 900, "y": groundY - 110},
                { "type": "sawblade", "x": 1100, "y": groundY - 110},
                { "type": "sawblade", "x": 1300, "y": groundY - 110},
                { "type": "spikes", "x": 1400, "y": groundY - 15},
                { "type": "enemy", "x": 1200, "y": groundY - 100},
                
               
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE

       
        function createSawBlade(x , y){
        
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
                game.addGameItem(sawBladeHitZone);
                
        var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        
        
        }
        
        for (var key = 0;key <levelData.gameItems.length;key++){
            var gameItemObject = levelData.gameItems[key];
            if(gameItemObject.type === 'sawblade'){
                createSawBlade(gameItemObject.x, gameItemObject.y);
            }
        } 
            if(gameItemObject.type === 'spikes'){
                createSpikes(gameItemObject.x, gameItemObject.y);
            
            
            }
             if(gameItemObject.type === 'enemy'){
                createEnemy(gameItemObject.x, gameItemObject.y);
             }
             
             
             
             
             
        function createSpikes(x,y) {
            
     var hitZoneSize = 25;
    
     var damageFromObstacle = 10;
    
     var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
           
            game.addGameItem(sawBladeHitZone);
    
     var obstacleImage = draw.bitmap('img/spikes.png');
         sawBladeHitZone.addChild(obstacleImage);
         obstacleImage.x = -50;
         obstacleImage.y = -25;
         obstacleImage.scaleX = .1;
         obstacleImage.scaleY = .1;

            
            
    }
    
    
    function createEnemy(x,y){
    var enemy =  game.createGameItem('enemy',25);
    var redSquare = draw.bitmap('img/badguy.png');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        
        enemy.x = 400;
        enemy.y = groundY-50;
        
        game.addGameItem(enemy);
        enemy.velocityX = 1;
        
        enemy.onPlayerCollision = function(){
            game.changeIntegrity(-30);
            enemy.fadeOut;
        };
    
        enemy.onProjectileCollision = function(){
            game.increaseScore(50);
            enemy.fadeOut;
        }
    }
    
    

        
        
        
        
        
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
