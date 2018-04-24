var text = "Welcome to Game Zone!";
var colors = ['red','blue','yellow','black','green'];

var i = 1;
var j = 0;

function animateText(){
    $("#diverun").text(text.substring(0,i));
    i++;
    if (i > text.length){
        i=1;
    }
    $("#diverun").css("color",colors[j]);
    j++;
    if (j > colors.length) j = 0;
}

setInterval(animateText, 100);

var tmrId = -1;

$(window).mousemove(function(eventData){

    if (tmrId !== -1) {
        clearTimeout(tmrId);
        tmrId = -1;
        $("#diverun").fadeIn(500);
    }

    var x = eventData.pageX + 10;
    var y = eventData.pageY + 10;

    $("#diverun").css("left",x + "px");
    $("#diverun").css("top",y + "px");

    tmrId = setTimeout(function(){
        $("#diverun").fadeOut(500);
    }, 2000);
});