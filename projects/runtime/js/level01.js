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
                { "type": "spikes", "x": 1300, "y": groundY - 15},
                { "type": "spikes", "x": 1400, "y": groundY - 15},
                { "type": "enemy", "x": 600, "y": groundY - 100},
                { "type": "sawblade", "x": 1700, "y": groundY - 110},
                { "type": "spikes", "x": 2000, "y": groundY - 15},
                { "type": "reward", "x": 2400, "y": groundY - 70},
                { "type": "sawblade", "x": 2500, "y": groundY - 110},
                { "type": "spikes", "x": 2700, "y": groundY - 15},
                { "type": "spikes", "x": 3000, "y": groundY - 15},
                { "type": "spikes", "x": 3100, "y": groundY - 15},
                { "type": "spikes", "x": 3200, "y": groundY - 15},
                { "type": "spikes", "x": 3300, "y": groundY - 15},
                { "type": "spikes", "x": 3400, "y": groundY - 15},
                { "type": "spikes", "x": 3500, "y": groundY - 15},
                { "type": "spikes", "x": 3600, "y": groundY - 15},
                { "type": "spikes", "x": 3700, "y": groundY - 15},
                { "type": "spikes", "x": 3800, "y": groundY - 15},
                { "type": "spikes", "x": 3900, "y": groundY - 15},
                { "type": "spikes", "x": 4000, "y": groundY - 15},
                { "type": "spikes", "x": 4100, "y": groundY - 15},
                { "type": "spikes", "x": 4200, "y": groundY - 15},
                { "type": "spikes", "x": 4300, "y": groundY - 15},
                { "type": "spikes", "x": 4400, "y": groundY - 15},
                { "type": "spikes", "x": 4500, "y": groundY - 15},
                { "type": "spikes", "x": 4600, "y": groundY - 15},
                { "type": "spikes", "x": 4700, "y": groundY - 15},
                { "type": "spikes", "x": 4800, "y": groundY - 15},
                { "type": "reward", "x": 4900, "y": groundY - 50},
                { "type": "reward", "x": 5000, "y": groundY - 50},
                { "type": "reward", "x": 5100, "y": groundY - 50},
                { "type": "reward", "x": 5500, "y": groundY - 50},
                { "type": "reward", "x": 5700, "y": groundY - 50},
                { "type": "reward", "x": 5900, "y": groundY - 50},
                { "type": "reward", "x": 6100, "y": groundY - 50},
                { "type": "reward", "x": 6300, "y": groundY - 50},
                { "type": "reward", "x": 6500, "y": groundY - 50},
                { "type": "reward", "x": 6700, "y": groundY - 50},
            
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
            
            if(gameItemObject.type === 'spikes'){
                createSpikes(gameItemObject.x, gameItemObject.y);
            }
            
             if(gameItemObject.type === 'enemy'){
                createEnemy(gameItemObject.x, gameItemObject.y);
             }
             
              if(gameItemObject.type === 'reward'){
                createReward(gameItemObject.x, gameItemObject.y);
              }
              if(gameItemObject.type === 'reward2'){
                createReward(gameItemObject.x, gameItemObject.y);
              }
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
    
    function createReward(x , y){

        var reward = game.createGameItem('reward', 50);
            reward.x = x;
            reward.y = y;
            reward.scaleX = .5
            reward.scaleY = .5
            reward.velocityX = -2;
            
            var picture = draw.bitmap('img/iceicebaby.png');
            picture.x = -80;
            picture.y = -100;
            
            reward.addChild(picture);
            game.addGameItem(reward);
            
            reward.onPlayerCollision = function() {
                game.increaseScore(1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
                reward.fadeOut();
            };
    }    
    
        function createReward2(x , y){

        var reward2 = game.createGameItem('reward2', 25);
            reward2.x = x;
            reward2.y = y;
            reward2.velocityX = -2;
            
            var picture = draw.bitmap('img/Water.png');
            picture.x = -25;
            picture.y = -25;
            
            reward2.addChild(picture);
            game.addGameItem(reward2);
            
            reward2.onPlayerCollision = function() {
                game.increaseScore(50);
                reward2.fadeOut();
            };
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
