// Global Variables
//=================================================

// Crystals
var crystal = {
    blue: {
        name: "blue",
        value: 0
    },
    yellow: {
        name: "yellow",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    },
    red: {
        name: "red",
        value: 0
    }
};

// Scores 
var currentScore = 0;
var targetScore = 0;

//wins and losses
var wins =0;
var losses = 0;

var randomResult;
var currentScore = 0;

//game logic
var randomNum = function(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

//function to reset score
$("#score").html("Random Score: " + randomResult); 


var crystals = $(".rotator");
console.log(crystals.length) 

var crystals = $(".rotator");
console.log(crystals.length) 


// create the start game function
var startGame = function () {

    //var images = [
       // "assests/image/insert here", "assests/images/ again insert here"
    //];
    
    // reset current score
currentScore= 0;


targetScore = randomNum(19, 120);
console.log(targetScore);
}

startGame();




//starting the game
alert ("Welcome to the Crystal Game"); 

$(document).ready(function(){

  
    
   crystals.each(function(i) {
            var random = Math.floor(Math.random() * 11 ) + 1;
            $(crystals[i]).attr("data-random", random)
        })


        $("#current").html("Total Score: " + currentScore);
    }

   

//how to eset and start the game
    $(document).on('click', ".col", function () {

        var num = parseInt($(this).attr("data-random")); 
        
        currentScore += num; 
        
        $("#current").html("Total Score: " + currentScore);

        if (currentScore === randomResult) {
            wins ++;
            $("#win").html("Games won: " + wins);
            currentScore = 0;
            startGame();
        }
        else if (currentScore > randomResult) {
            losses ++;
            $("#lost").html("Games lost: " + losses);
            currentScore = 0;
            startGame();
        }
   // }); 

}); 