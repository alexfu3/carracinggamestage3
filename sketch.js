var allPlayers;
var distance = 0;

var canvas
var gameState = 0;
var playerCount;
var database
var form, player, game;
var car1, car2, car3, car4;
var cars;
var track, car1Image,car2Image,car3Image,car4Image;

function preload(){
    track = loadImage("../images/track.jpg")
    car1Image = loadImage("../images/car1.png")
    car2Image = loadImage("../images/car2.png")
    car3Image = loadImage("../images/car3.png")
    car4Image = loadImage("../images/car4.png")
}

function setup(){
    database = firebase.database();

   canvas = createCanvas(displayWidth - 50,displayHeight-130);
   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }

    if(gameState === 2){
        game.end();

    }
}


