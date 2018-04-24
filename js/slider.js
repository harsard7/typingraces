$(document).ready(function () {
    $('.next').on('click',function () {
        var currentImg=$('.active');//return the particular class object
        var nextimg=currentImg.next();//next same element

      //return same next element
        if(nextimg.length){

            currentImg.removeClass('active').css('z-index',-10);
            nextimg.addClass('active').css('z-index',10);
        }
    });

    $('.prev').on('click',function () {
       var currentImg =$('.active');
       var prevImg=currentImg.prev();
       if(prevImg.length){

           currentImg.removeClass('active').css('z-index',-10);
           prevImg.addClass('active').css('z-index',10);
       }

    });
});