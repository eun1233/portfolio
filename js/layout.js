$(document).ready(function(){



// header

$('.menu>li:nth-child(1)').click(function(){

    $('html,body').animate({

        scrollTop: 0,

    });

});


$('.menu>li:nth-child(2)').click(function(){

    $('html,body').animate({

        scrollTop: 850,

    });

});



$('.sub_menu li:nth-child(1)').click(function(){

    $('html,body').animate({

        scrollTop: 2000,

    });

});


$('.sub_menu li:nth-child(2)').click(function(){

    $('html,body').animate({

        scrollTop: 2800,

    });

});


$('.sub_menu li:nth-child(3)').click(function(){

    $('html,body').animate({

        scrollTop: 3500,

    });

});


$('.sub_menu li:nth-child(4)').click(function(){

    $('html,body').animate({

        scrollTop: 4300,

    });

});




// ham
$('.ham_menu>li:nth-child(1)').click(function(){

    $('html,body').animate({

        scrollTop: 0,

    });

});


$('.ham_menu>li:nth-child(2)').click(function(){

    $('html,body').animate({

        scrollTop: 1200,

    });

});


$('.ham_sub li:nth-child(1)').click(function(){

    $('html,body').animate({

        scrollTop: 2500,

    });

});


$('.ham_sub li:nth-child(2)').click(function(){

    $('html,body').animate({

        scrollTop: 3450,

    });

});


$('.ham_sub li:nth-child(3)').click(function(){

    $('html,body').animate({

        scrollTop: 4450,

    });

});


$('.ham_sub li:nth-child(4)').click(function(){

    $('html,body').animate({

        scrollTop: 5400,

    });

});



// section01
$('.who').animate({

    top: 200,
    opacity: 1,
   

},2000);


// section01

$(window).scroll(function(){

    sct = $(window).scrollTop();

});


$(window).scroll(function(){

    if(sct>400){
        $('.cloud_text').animate({

            bottom: 150,
            opacity: 1,

        },1000);
    }

});




// section02
$(window).scroll(function(){

    if(sct>550){
        $('.profile').animate({

            top: 0,
            opacity: 1,

        },1000);
    }

});

$(window).scroll(function(){

    if(sct>550){
        $('.information_wrap').animate({

            top: 120,
            opacity: 1,

        },1000);
    }

});


$(window).scroll(function(){

    if(sct>700){
        $('.infor_wrap').animate({

            top: 0,
            opacity: 1,

        },1000);
    }

});


$(window).scroll(function(){

    if(sct>800){
        $('.hobby').animate({

            top: 0,
            opacity: 1,

        },1000);
    }

});


$(window).scroll(function(){

    if(sct>800){
        $('.skill').animate({

            top: 420,
            opacity: 1,

        },1000);
    }

});



// note
$(window).scroll(function(){

    if(sct>780){
        $('.note_profile').animate({

            top: 280,
            opacity: 1,

        },1000);
    }

});

$(window).scroll(function(){

    if(sct>780){
        $('.note_information_wrap').animate({

            top: 400,
            opacity: 1,

        },1000);
    }

});


$(window).scroll(function(){

    if(sct>900){
        $('.note_infor_wrap').animate({

            top: 620,
            opacity: 1,

        },1000);
    }

});


$(window).scroll(function(){

    if(sct>1100){
        $('.note_hobby').animate({

            top: 680,
            opacity: 1,

        },1000);
    }

});


$(window).scroll(function(){

    if(sct>1100){
        $('.note_skill').animate({

            top: 670,
            opacity: 1,

        },1000);
    }

});





// section03


$(window).scroll(function(){

    console.log(sct);

    if(sct>1800){
        $('#pc_por01').animate({

            left: 0,
            opacity: 1,

        },1000);
    }

    if(sct>1800){
        $('.pc_por01_img').animate({

            left: 0,
            opacity: 1,

        },1000);
    }


    
    if(sct>2600){
        $('#pc_por02').animate({

            left: 0,
            opacity: 1,

        },1000);
    }

    if(sct>2600){
        $('.pc_por02_img').animate({

            left: 0,
            opacity: 1,

        },1000);
    }




    if(sct>3400){
        $('#pc_por03').animate({

            left: 0,
            opacity: 1,

        },1000);
    }

    if(sct>3400){
        $('.pc_por03_img').animate({

            left: 0,
            opacity: 1,

        },1000);
    }




    if(sct>4100){
        $('#pc_por04').animate({

            left: 0,
            opacity: 1,

        },1000);
    }

    if(sct>4100){
        $('.pc_por04_img').animate({

            left: 0,
            opacity: 1,

        },1000);
    }



});






});//end