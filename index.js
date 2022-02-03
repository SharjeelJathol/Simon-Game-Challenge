
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