$(document).ready(function($){

        // bootStrapShapeSlider measurements
        var sliderWidth = 1140,
            sliderHeight = 560,
            sliderRation = sliderWidth/sliderHeight;

    // bootStrapShapeSlider Main Function
    function bootStrapShapeSlider(){
        var fullSliderWidth = $('.bss-slider-wrapper').width(),
            fullSliderHeight = fullSliderWidth/sliderRation;

        $('.bss-slider-wrapper').height(fullSliderHeight);

        var scale = fullSliderWidth/sliderWidth;

        var finalSliderWidth = sliderWidth*scale,
            finalSliderHeight = sliderHeight*scale,
            finalWidthRation = (sliderWidth-finalSliderWidth)/ 2,
            finalHeightRation = (sliderHeight-finalSliderHeight)/ 2;

        $('.bss-slider-container').css(
            {
                '-webkit-transform':'scale('+scale+')',
                '-moz-transform':'scale('+scale+')',
                '-o-transform':'scale('+scale+')',
                '-ms-transform':'scale('+scale+')',
                'transform':'scale('+scale+')',
                'margin-top':-finalHeightRation+'px',
                'margin-left':-finalWidthRation+'px'
            }
        );
    }


    $('#bss-slider-main li:first').addClass('current')

    if($('#bss-slider-main li:first').hasClass('carousel-generic')){
      $('#bss-slider-main .shape-off').hide()
    }


    $('#bss-slider-main li').each(function(){
        if($(this).hasClass('carousel-generic')){
            var readyLink = $(this).find('.active-image-right');
            $(this).prepend('<div class="bss-slider-block-2"></div>');
            $(this).find('.bss-slider-block-2').prepend(readyLink);
        }
        else {

            var linkClone = $(this).find('.active-image-left');
            var readyLink = $(this).find('.active-image-right');
            $(this).prepend('' +
                '<div class="bss-slider-block-1">' +
                '<div class="bss-slider-deactive-block-1">' +
                '<div class="bss-slider-deactive-block-2">' +
                '<div class="bss-slider-deactive-block-3">' +
                '<div class="bss-slider-deactive-block-4">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="bss-slider-block-2"></div>'
            )
            $(this).find('.bss-slider-block-1').prepend(readyLink.clone().addClass('no-image').removeClass('active-image-right'))
            $(this).find('.bss-slider-deactive-block-1').prepend(readyLink.clone().addClass('no-image').removeClass('active-image-right'))
            $(this).find('.bss-slider-deactive-block-2').prepend(readyLink.clone().addClass('no-image').removeClass('active-image-right'))
            $(this).find('.bss-slider-deactive-block-3').prepend(readyLink.clone().addClass('no-image').removeClass('active-image-right'))
            $(this).find('.bss-slider-deactive-block-4').prepend(linkClone.addClass('bss-slider-active-block'))
            $(this).find('.bss-slider-block-2').prepend(readyLink);
        }
    })


    var li_length = $('#bss-slider-main ul li').length;

    function BannerSlides(){

        var current_li = $('#bss-slider-main ul li.current').index();
        current_li++;
        if(current_li < li_length){
            var current = $('#bss-slider-main ul li.current');
            current.next().addClass('slider-block-1');


             if(current.next().hasClass('carousel-generic')){
                $('#bss-slider-main .shape-off').fadeOut(1000);
                $('#bss-slider-main .slider-block-1 .bss-slider-block-2').animate({'opacity':'1'},1000,function(){
                    current.removeClass('current');
                    current.next().addClass('current');
                    $('#bss-slider-main .slider-block-1 .bss-slider-block-2').attr('style','');
                    current.next().removeClass('slider-block-1');
                });
            }

            else {
                $('#bss-slider-main .shape-off').fadeIn(500);
                $('#bss-slider-main .slider-block-1 .bss-slider-block-1').animate({'opacity':'1'},500,function(){
                    current.next().addClass('slider-block-2');
                    $('#bss-slider-main .slider-block-2 .bss-slider-block-2').animate({'opacity':'1'},500,function(){
                        current.removeClass('current');
                        current.next().addClass('current');
                        $('#bss-slider-main .slider-block-1 .bss-slider-block-1').attr('style','');
                        $('#bss-slider-main .slider-block-2 .bss-slider-block-2').attr('style','');
                        current.next().removeClass('slider-block-1 slider-block-2');
                    });
                });
            }

        }
        else {

            var current = $('#bss-slider-main ul li.current');
            var next = $('#bss-slider-main ul li:first');
            next.addClass('slider-block-1');

            if(next.hasClass('carousel-generic')){
                $('#bss-slider-main .shape-off').fadeOut(1000);
                $('#bss-slider-main .slider-block-1 .bss-slider-block-2').animate({'opacity':'1'},1000,function(){
                    current.removeClass('current');
                    next.addClass('current');
                    $('#bss-slider-main .slider-block-1 .bss-slider-block-2').attr('style','');
                    next.removeClass('slider-block-1');
                });
            }
            else {
                $('#bss-slider-main .shape-off').fadeIn(500);
                $('#bss-slider-main .slider-block-1 .bss-slider-block-1').animate({'opacity':'1'},500,function(){
                    next.addClass('slider-block-2');
                    $('#bss-slider-main .slider-block-2 .bss-slider-block-2').animate({'opacity':'1'},500,function(){
                        current.removeClass('current');
                        next.addClass('current');
                        $('#bss-slider-main .slider-block-1 .bss-slider-block-1').attr('style','');
                        $('#bss-slider-main .slider-block-2 .bss-slider-block-2').attr('style','');
                        next.removeClass('slider-block-1 slider-block-2');
                    });
                });
            }
        }
    }

    setTimeout(function(){
        var current = $('bss-slider-main ul li.current');
        current.next().addClass('slider-block-1');
        setInterval(function(){
            BannerSlides()
        },5000)

      if(current.next().hasClass('carousel-generic')){
            $('bss-slider-main .shape-off').fadeOut(1000);
            $('bss-slider-main .next_A .bss-slider-block-2').animate({'opacity':'1'},1000,function(){
                current.removeClass('current');
                current.next().addClass('current');
                $('bss-slider-main .next_A .bss-slider-block-2').attr('style','');
                current.next().removeClass('next_A');

            });
        }
        else {

            $('bss-slider-main .shape-off').fadeIn(500);
            $('bss-slider-main .next_A .bss-slider-block-1').animate({'opacity':'1'},500,function(){
                current.next().addClass('slider-block-2');
                $('bss-slider-main .slider-block-2 .bss-slider-block-2').animate({'opacity':'1'},500,function(){
                    current.removeClass('current');
                    current.next().addClass('current');
                    $('bss-slider-main .next_A .bss-slider-block-1').attr('style','');
                    $('bss-slider-main .slider-block-2 .bss-slider-block-2').attr('style','');
                    current.next().removeClass('next_A slider-block-2');
                });
            });
        }
    },4000)



    // Invoke main function
    bootStrapShapeSlider();

    // Invoke main function on Resize Page
    $(window).resize(function(){
        bootStrapShapeSlider();
    })
})
