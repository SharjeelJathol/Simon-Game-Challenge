
/*Animation to buttons*/
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}