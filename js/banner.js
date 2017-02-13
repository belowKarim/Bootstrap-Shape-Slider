jQuery(document).ready(function($){

    // banner measurements

    var bannerW = 1141,
        bannerH = 560,
        bannerK = bannerW/bannerH;

    function bannerWrap(){
        var BannerWidth = $('.bannerWrap').width(),
            BannerHeight = BannerWidth/bannerK;
        $('.bannerWrap').height(BannerHeight);
        var scale = BannerWidth/bannerW;

        var NewWidth = bannerW*scale,
            NewHeight = bannerH*scale,
            NewML = (bannerW-NewWidth)/ 2,
            NewMT = (bannerH-NewHeight)/ 2;

        $('.bannerContainer').css(
            {
                '-webkit-transform':'scale('+scale+')',
                '-moz-transform':'scale('+scale+')',
                '-o-transform':'scale('+scale+')',
                '-ms-transform':'scale('+scale+')',
                'transform':'scale('+scale+')',
                'margin-top':-NewMT+'px',
                'margin-left':-NewML+'px'
            }
        );
    }

    // banner costructor

    $('#banner li:first').addClass('current')
    if($('#banner li:first').hasClass('aloneSlide')){$('#banner .bigSlide').hide()}


    if($('#banner li:first').hasClass('withoutflag')){$('#banner .bigFlag').hide()}





    $('#banner li').each(function(){
        if($(this).hasClass('aloneSlide')){
            var readyLink = $(this).find('.readyLink');
            $(this).prepend('<div class="forLink_2"></div>');
            $(this).find('.forLink_2').prepend(readyLink);
        }
        else {

            var linkClone = $(this).find('.upLink');
            var readyLink = $(this).find('.readyLink');
            $(this).prepend('' +
                '<div class="forLink">' +
                '<div class="fl_1">' +
                '<div class="fl_2">' +
                '<div class="fl_3">' +
                '<div class="fl_4">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="forLink_2"></div>'
            )
            $(this).find('.forLink').prepend(readyLink.clone().addClass('no-image').removeClass('readyLink'))
            $(this).find('.fl_1').prepend(readyLink.clone().addClass('no-image').removeClass('readyLink'))
            $(this).find('.fl_2').prepend(readyLink.clone().addClass('no-image').removeClass('readyLink'))
            $(this).find('.fl_4').prepend(linkClone.addClass('fl_5'))
            $(this).find('.forLink_2').prepend(readyLink);
        }
    })

    // banner slider

    var li_length = $('#banner ul li').length;

    function BannerSlides(){

        var current_li = $('#banner ul li.current').index();
        current_li++;
        if(current_li < li_length){
            var current = $('#banner ul li.current');
            current.next().addClass('next_A');


            //First two slider white Flag off whihc is located Top Left
              if(current.next().hasClass('withoutflag')){
                $("#banner .bigFlag").hide();
              } else {
                 $("#banner .bigFlag").show();
              }


            // Normal Slider Code
             if(current.next().hasClass('aloneSlide')){
                $('#banner .bigSlide').fadeOut(1000);
                $('#banner .next_A .forLink_2').animate({'opacity':'1'},1000,function(){
                    current.removeClass('current');
                    current.next().addClass('current');
                    $('#banner .next_A .forLink_2').attr('style','');
                    current.next().removeClass('next_A');
                });
            }

            else {
                $('#banner .bigSlide').fadeIn(500);
                $('#banner .next_A .forLink').animate({'opacity':'1'},500,function(){
                    current.next().addClass('next_B');
                    $('#banner .next_B .forLink_2').animate({'opacity':'1'},500,function(){
                        current.removeClass('current');
                        current.next().addClass('current');
                        $('#banner .next_A .forLink').attr('style','');
                        $('#banner .next_B .forLink_2').attr('style','');
                        current.next().removeClass('next_A next_B');
                    });
                });
            }

        }
        else {
            // Slider white Flag off whihc is located Top Left and this loop again deactive taht flag when it reached new circle
            $("#banner .bigFlag").hide();

            // Normal slider Code
            var current = $('#banner ul li.current');
            var next = $('#banner ul li:first');
            next.addClass('next_A');

            if(next.hasClass('aloneSlide')){
                $('#banner .bigSlide').fadeOut(1000);
                $('#banner .next_A .forLink_2').animate({'opacity':'1'},1000,function(){
                    current.removeClass('current');
                    next.addClass('current');
                    $('#banner .next_A .forLink_2').attr('style','');
                    next.removeClass('next_A');
                });
            }
            else {
                $('#banner .bigSlide').fadeIn(500);
                $('#banner .next_A .forLink').animate({'opacity':'1'},500,function(){
                    next.addClass('next_B');
                    $('#banner .next_B .forLink_2').animate({'opacity':'1'},500,function(){
                        current.removeClass('current');
                        next.addClass('current');
                        $('#banner .next_A .forLink').attr('style','');
                        $('#banner .next_B .forLink_2').attr('style','');
                        next.removeClass('next_A next_B');
                    });
                });
            }
        }
    }

    setTimeout(function(){
        var current = $('#banner ul li.current');
        current.next().addClass('next_A');
        setInterval(function(){
            BannerSlides()
        },5000)

      if(current.next().hasClass('aloneSlide')){
            $('#banner .bigSlide').fadeOut(1000);
            $('#banner .next_A .forLink_2').animate({'opacity':'1'},1000,function(){
                current.removeClass('current');
                current.next().addClass('current');
                $('#banner .next_A .forLink_2').attr('style','');
                current.next().removeClass('next_A');

            });
        }
        else {

            $('#banner .bigSlide').fadeIn(500);
            $('#banner .next_A .forLink').animate({'opacity':'1'},500,function(){
                current.next().addClass('next_B');
                $('#banner .next_B .forLink_2').animate({'opacity':'1'},500,function(){
                    current.removeClass('current');
                    current.next().addClass('current');
                    $('#banner .next_A .forLink').attr('style','');
                    $('#banner .next_B .forLink_2').attr('style','');
                    current.next().removeClass('next_A next_B');
                });
            });
        }
    },4000)



    // on load page
    bannerWrap();

    // on resize page
    $(window).resize(function(){
        bannerWrap();
    })
})
