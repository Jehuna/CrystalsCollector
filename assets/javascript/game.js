
var randomNumber;
var score;
var win = 0;
var lose = 0;

var randomNumberText = $("#random-number-text");
var scoreText = $("#score-text");
var winText = $("#win-text");
var loseText = $("#lose-text");

var gem1Value;
var gem2Value;
var gem3Value;
var gem4Value;

var audioWin = new Audio("assets/audio/win.mp3");
var audioLose = new Audio("assets/audio/lose.mp3");
var audioClick = new Audio("assets/audio/click.mp3");


StartGame();



function GetRandom(){
    
    return Math.floor(Math.random() * 102) + 19; 
}




function UpdateScore(){
    winText.text(win);
    loseText.text(lose);
    scoreText.text(score);
}

function PlayButtonSound(){
    audioClick.play();
}

function CheckGameStatus(){
    PlayButtonSound();
    
    if(score == randomNumber){
        win++
        audioWin.play();
        StartGame();
    }else if(score > randomNumber){
        lose++;
        audioLose.play();
        StartGame();
    }

    UpdateScore();
}

function PrintGemsStatus(){
    console.log("Gem 1 value: " + gem1Value);
    console.log("Gem 2 value: " + gem2Value);
    console.log("Gem 3 value: " + gem3Value);
    console.log("Gem 4 value: " + gem4Value);
    console.log("-------------------------");
}

function PrintScoreStatus(){

    console.log("Random Number: " + randomNumber);
    console.log("Score: " + score);
    console.log("Wins: " + win);
    console.log("Looses: " + lose);
    console.log("-------------------------");
}

function RandomizeGems(){


    gem1Value = Math.ceil(Math.random() * 12);
    gem2Value = Math.ceil(Math.random() * 12);
    gem3Value = Math.ceil(Math.random() * 12);
    gem4Value = Math.ceil(Math.random() * 12);

}

function StartGame(){
    randomNumber = GetRandom();
    randomNumberText.text(randomNumber);

    score = 0;

    RandomizeGems();

    console.clear();
    console.log("NEW GAME------------------");
    PrintScoreStatus();
    PrintGemsStatus();
}

$("#gem1").on("click", function(){
    score += gem1Value;
    CheckGameStatus();
})

$("#gem2").on("click", function(){
    score += gem2Value;
    CheckGameStatus();
})

$("#gem3").on("click", function(){
    score += gem3Value;
    CheckGameStatus();
})

$("#gem4").on("click", function(){
    score += gem4Value;
    CheckGameStatus();
})




