// alert('game over');
var bColors=["red", "blue", "green", "yellow"];
// var rcc=bColors[nextSequence()];
var gamePatter=[];
var userChoicePattern=[];
// gamePatter.push(rcc);


$(".btn").click(function(){
   var ucc=$(this).attr("id");
   userChoicePattern.push(ucc);
   playSound(ucc);
   console.log(userChoicePattern);
   animatePress(ucc);
   checkAnswer(userChoicePattern.length-1);

})
var started=false;
var level=0;
$(document).keypress(function(){
    if(!started)
    {
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }

})
function nextSequence(){
   userChoicePattern=[];
    level++;
    $("#level-title").text("Level "+level);
    // $("#level-title").text("Level " + level);
    var rn=Math.floor(Math.random()*3)+1;
    // console.log(rn);
    var rcc=bColors[rn];
    gamePatter.push(rcc);
    $("#"+rcc).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // return rn;
    playSound(rcc);
  
}
function playSound(rcc)
{
    var audio=new Audio("sounds/"+rcc+".mp3");
    audio.play();

}

function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if(gamePatter[currentLevel]===userChoicePattern[currentLevel])
     {
        console.log("success");
         if(gamePatter.length==userChoicePattern.length)
         {
             setTimeout(function(){
                 nextSequence();
             },1000);
         }
     }
     else
     {
         console.log("failure");
         playSound("wrong");
         $("body").addClass("game-over");
         $("#level-title").text("Game Over, Press Spacebar to Restart");

         setTimeout(function () {
           $("body").removeClass("game-over");
         }, 200);
   
         startOver();
     }


}
function startOver(){
    level=0;
    gamePatter=[];
    started=false;

}