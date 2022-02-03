var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var started = false;
var level = 1;

/*Start Over the game*/
function startOver() {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    userClickedPattern = [];
    gamePattern = [];
    started = false;
    level = 1;
    document.querySelector("h1").textContent = "Press A Key to Start";
}

/*TO generate a random color for the sequence*/
function nextSequence() {
    return Math.floor(Math.random() * 4);
}

function randomColour() {
    var randomChosenColour = buttonColours[nextSequence()];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

/*Player input from the console*/
for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        if (started) {
            playSound(this.getAttribute("id"));
            animatePress(this.getAttribute("id"));
            $("#" + this.getAttribute("id")).fadeOut(100).fadeIn(100);
            userClickedPattern.push(this.getAttribute("id"));
            for (var i = 0; i < userClickedPattern.length && (userClickedPattern.length <= gamePattern.length); i++) {
                if (userClickedPattern[i] === gamePattern[i]) {} 
                else {
                    startOver();
                    break;
                }
                if (gamePattern.length === userClickedPattern.length) {
                    userClickedPattern = [];
                    setTimeout(function(){
                        randomColour();
                    }, 1000);
                    level++;
                    document.querySelector("h1").textContent = "Level " + level;
                }
            }
        }


    });
}

/*For key pressed at the beginning*/
$(document).on("keypress", function () {
    if (!started) {
        started=true;
        document.querySelector("h1").textContent = "Level " + level;
        setTimeout(function(){
            randomColour();
        }, 1000);
    }  
});

/*To play the respective sound*/
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

/*Animation to buttons*/
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}