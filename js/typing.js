var countevent=0;
$(document).ready(function(){
    var m = 0;
    var width = screen.width - 100;
    var height = screen.height - 200;
    var code = 0;
    $('#start').css({
            "top" : (height)+'px',
            "left" : (width)+'px'
        });
    $('#start').click( function(){
        $(this).fadeOut('slow');
        $("#main").height("390px");
        $('#score').show();
        $('#scor1').show();
        $('#time2').show();
        $('#dumdiv').show();
        $('#soundtext').show();
        $('#sc').show();
       initAudio();
        genLetter();
    });
    $(document).keydown( function(event){
        var keycode = event.keyCode;

        $('#bub'+keycode).animate({"top" : height+"px", "opacity" : 0}, 'slow', initAudiocd());
        $('#bub'+keycode).slideUp('slow').hide( 'slow', function() {
            code += 1;
            $('#score').html(code);
            $('#scoress').val(code);
            $(this).remove();
        });
    });
    function genLetter(){
        $("#alphanum").hide();
        // m = Math.floor(Math.random() * ( 26)) +65;
            m=randomnmr();
        var color=getcolor(m%6);

        var k = Math.floor(Math.random() * ( 26 )) + 65;
        var ch = String.fromCharCode(k);
        var top = Math.floor(Math.random() * height );
        var left = Math.floor(Math.random() * width );
        $('#main').append('<span class="bubb" id="bub'+ k +'" ' +
            'style="left: '+ left +'; ' +
            'top: '+ top +';' +
            ' background-color:'+ color +'; ' +
            'color:black;">'+ ch +'</span>');
        setTimeout(genLetter, 1000);
    }

    function getcolor(x) {
        var color='';
        var colorArray=['green','blue','red','chartreuse','blueviolet','deeppink']
        for (c = 0; c <colorArray.length; c++){
            if(c==x){
                color=colorArray[c];
            }
        }
        return color;
    }
});
var f=0;
function finish(){
    if(f==0) {
        var fscore = $('#scoress').val();
        alert("Time Up and your score is "+fscore+"    Thank You  ");
        location.replace("index.html");
       // location.reload();
    }
}
var dur =60;

var released = 0;
function dis(){
    if(dur >=0) {
        document.getElementById('timer').innerHTML = dur;
    }
    if(dur ==0) {
        released = 1;
        finish();
       // mute();
    }
    if(released == 1) {
        var now = -dur;
    }
    dur=dur-1;
    countevent=dur;
    setTimeout("dis()",1000);
}
var audio,playbtn,seek_bar;
function initAudio() {
    audio=new Audio();
    audio.src="sounds/backround.mp3";
    audio.loop=true;
    audio.play();
}
var playbtn;
function playpause() {
    playbtn=document.getElementById("div3");
    if(audio.paused){
        audio.play();
        playbtn.style.background=" url(images/mute.jpg)no-repeat";
        playbtn.style.backgroundSize="50px 50px";
    }else{
        audio.pause();
        playbtn.style.background=" url(images/play.png) no-repeat";
        playbtn.style.backgroundSize="50px 50px";
    }
}
var audio2
function initAudiocd() {
    audio2=new Audio();
    audio2.src="sounds/ballhit.wav";
    audio2.loop=false;
    if(countevent>1){
        audio2.play();
    }else{
        audio2.mute=true;
    }
}
var playbtn1;
function mute() {
   audio2.mute=true;
}
function randomnmr() {
    m = Math.floor(Math.random() * ( 26)) +65;
    return m;
}

// window.addEventListener("load",initAudio());