var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var tree
        var background;
        var buildings = [];
        // Add any variables that will be used by render AND update here:
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your 
            var backgroundFill = draw.rect(canvasWidth,ground.y, 'orange');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            var circle;
                for(var i=0;i<50;i++) {
                    circle = draw.circle(10,'white','LightGray',2);
                    circle.x = canvasWidth*Math.random();
                    circle.y = groundY*Math.random();
                    background.addChild(circle);
                }

            background.addChild(circle);

            var download = draw.bitmap('/Op-Spark-Directory-2/projects/circularity/img/download.png');
            download.x = 300;
            download.y = 25;
            download.scaleX = 5.0;
            download.scaleY = 5.0;
            background.addChild(download);
    
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingHeight = 300;
            var building;
            for(var i=0;i<11;++i) {
                building = draw.rect(75,buildingHeight,'LightGray','Black',1);
                building.x = 200*i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('/Op-Spark-Directory-2/projects/runtime/img/berd.png');
            tree.x = 0;
            tree.y = 300;
            tree.scaleX = 0.1
            tree.scaleY = 0.1
            background.addChild(tree);
        }


        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 2;
            if(tree.x < -300) {
                tree.x = canvasWidth;
            }
            if(tree.x > canvasWidth) {
                tree.x = -200;
            }
            
            // TODO 5: Part 2 - Parallax
            for(var i=0; i<buildings.length;i++){
            buildings[i].x = buildings[i].x - 1;
            if(buildings[i].x < -200) {
                buildings[i].x = canvasWidth;
            }
            if(buildings[i].x > canvasWidth) {
                buildings[i].x = -100;
            }
            }
        
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
