$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });

    // var li = $('.timeline');
    // var leng = li.length;
    // var i=0;
    //
    // function feiru() {
    //     if ((leng - 1) > i) {
    //         setTimeout(function () {
    //             var a=new animateFct(i);
    //             console.log(i);
    //             feiru();
    //             i++;
    //         }, 4000);
    //     } else {
    //         $('.begin').text("");
    //         $('.begin').fadeIn();
    //         return;
    //     }
    // };
    //
    // var beg=$('.begin');
    // beg.click(function(){
    //     $(this).hide();
    //     $('audio')[0].play();
    //     feiru();
    // });
});
// loadAudioFile('../music/2.mp3');