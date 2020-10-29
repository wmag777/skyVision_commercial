$( document ).ready(function() {

    var bound = false;
    var removeErrorOnBlur = function(event) {
        var target = $( event.target );
        bound = true;
        if( !(target.is('input') || target.is('textarea')) ){
            $('form' + ' .field-error').remove();
            $('form'+ ' .start__input').removeClass('inputError');
        }
    };
// room animation

    if ($('.js-room').length) {
        $(".js-room").on('mousemove  touchmove', function(e) {
            var l = $(window).width(),
                w = $('.js-room').width(),
                x =  e.pageX || e.originalEvent.touches[0].clientX;
            console.log(e.type);
            var m = (l - w)/2;
            var delta = (x - m);
            var koef = ((delta/w)*100);

            if(koef < 0){
                $(".js-room-clean").css('width', '0%');
                $(".js-room-line").css('left', '0%');

            }
            else if(koef > 100){
                $(".js-room-clean").css('width', '100%%');
                $(".js-room-line").css('left', '100%');
            }
            else {
                $(".js-room-clean").css('width', koef+'%');
                $(".js-room-line").css('left', koef+'%');
            }
        });
    };



    $(document).on("scroll", onScroll);

//smoothscroll start
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");



        $('.start_nav a').each(function () {
            $(this).removeClass('is-active');
        })
        $(this).addClass('is-active');

        var target = this.hash,
            menu = target;
        $target = $('[name='+target.substring(1)+']');
        if($(window).width() > 768){
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top- 90
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        }else{
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
            $('.mobile__menu').trigger('click');
        }

    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.start_nav li a').each(function () {
            var currLink = $(this);
            var refElement = $('[name='+currLink.attr("href").substring(1)+']');
            if (refElement.position().top - 250 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.start_nav a').removeClass("is-active");
                currLink.addClass("is-active");
                //$('.mobile__menu i').text(currLink.text());
            }
            else{
                currLink.removeClass("is-active");
            }
        });

    }


    $(window).scroll(function() {
        if( $(window).width() > 768 ){
            if($(window).scrollTop() >= $('[name=block1]').offset().top-600 ) {
                // alert("bottom!");
                $('body').addClass('active-menu');
            } else {
                $('body').removeClass('active-menu');
            }
            if($(window).scrollTop() >= $('[name=block4]').offset().top-200) {
                // alert("bottom!");
                $('body').addClass('is-review ');
                $(".review").addClass('is-show-preview1 is-show-preview2 is-show-preview3');
            } else{
                $('body').removeClass('is-review ');
            }
        }else{
            if($(window).scrollTop() >= 90) {$('body').addClass('gone-logo');}
            else {$('body').removeClass('gone-logo');}
            // if($(window).scrollTop() >= $('[name=block1]').offset().top-160) {
            // 	$('body').addClass('show-title');}
            // else {$('body').removeClass('show-title');}
            $('body').addClass('is-review ');
            $(".review").addClass('is-show-preview1 is-show-preview2 is-show-preview3');
        }

    });
//smoothscroll end

//mobile menu
    $('.mobile__menu').click(function() {
        $('body').toggleClass('active-menu');
        $('html').toggleClass('no-scroll');
    });
    $(window).resize(function() {
        $('body').removeClass('active-menu');
        $('html').removeClass('no-scroll');
    });





    var starty = 0;
    var old_scroll_top = 0;
    $(".start__right").on("touchstart", function (event) {
        starty = event.originalEvent.touches[0].pageY;
    });

    $('.start__right').on('touchmove', function(ev) {
        var $this = $(this),

            scrollHeight = $('.start_nav').outerHeight(true),
            scrollTop = $('.start_nav').position().top,
            height = $(window).height();
        delta = starty- ev.originalEvent.touches[0].pageY,
            up = delta < 0;
        console.log("scrollTop ="+scrollTop+"\n scrollHeight ="+scrollHeight+"\n height ="+height);
        var prevent = function() {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }
        if (!up &&height >= scrollTop + scrollHeight) {
            // Scrolling down, but this will take us past the bottom.
            //alert('down');
            return prevent();
        } else if (up && scrollTop  >= 0 ) {
            // Scrolling up, but this will take us past the top.
            //alert('up');

            return prevent();
        }
        else{  return true;	 }
    });

    $('.description5, #plus').hover(function(){
        $(".review").addClass("is-show-preview5");
    },function() {
        $(".review").removeClass("is-show-preview5");
    });
    if ($(window).width() > 768) $('.description5').click(function(){
        //var $form = $(".review__form");
        //$form.addClass("is-active");
        var $target = $( '[name="block5"]');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top- 90
        }, 500, 'swing');
    });

//	hover pentagon end

    $('.button__popup').on('click', function(){
        $('.js-popup-success').removeClass('is-visible');
    });


    //sent mail start
    $("form#formReservation, form#formReservation1, form#formReservation2, form#formReservation3").on("submit", function(event) {
        event.preventDefault();
        //console.log($(this).serialize() );
        if(!bound) $("div").on( "click", removeErrorOnBlur );
        var $self =$(this);
        if(!validation($self.attr("id"))) {
            $.ajax({
                url: $self.attr("action"),
                data: $self.serialize(),
                type: 'post',
                dataType: "html",
                success: function( data, textStatus, jQxhr ) {
                    //console.log("data is "+ data)
                    var $input= $("form#" + $self.attr("id")+" .start__submit input");
                    $input.parent().append("<strong class='success'>Ð£ÑÐ¿ÐµÑˆÐ½Ð¾</strong>");
                    $("form#" + $self.attr("id")+" .start__input input").on('change',function(){$input.next().fadeOut()});
                    //setInterval(function(){$input.next().fadeOut()},1000);
                    //$("form#" + $self.attr("id")+" .start__input input").val("") ;
                    $('.js-popup-success').addClass('is-visible');
                }
            });

        }
        return false;
    });

    function validation (formId) {
        if($('form#'+ formId +' .success')[0] ) $('form#'+ formId +' .success').remove();
        $('form#'+ formId +' .field-error').remove();
        $('form#'+ formId +' .start__input').removeClass('inputError');
        var hasError = false;
        $('form#'+ formId +' .requiredField').each(function() {
            if(jQuery.trim($(this).val()) == '' || jQuery.trim($(this).val()) == jQuery.trim($(this).attr('placeholder'))){
                $(this).parent().append('<strong class="field-error">Ð­Ñ‚Ð¾ Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ðµ Ð¿Ð¾Ð»Ðµ.</strong>');
                $(this).parent().addClass('inputError');
                hasError = true;
            } else {
                if($(this).hasClass('email')) {
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if(!emailReg.test(jQuery.trim($(this).val()))){
                        $(this).parent().append('<strong class="field-error">Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ñ‹Ð¹ Ð°Ð´Ñ€ÐµÑ Ð¿Ð¾Ñ‡Ñ‚Ñ‹.</strong>');
                        $(this).parent().addClass('inputError');
                        hasError = true;
                    }
                } else if($(this).hasClass('phone')) {
                    var phoneReg = /^\+?[0-9 ]*$/;
                    if(!phoneReg.test(jQuery.trim($(this).val()))){
                        $(this).parent().append('<strong class="field-error">Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€.</strong>');
                        $(this).parent().addClass('inputError');
                        hasError = true;
                    }
                } else if($(this).hasClass('date')) {
                    var dateReg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
                    if(!dateReg.test(jQuery.trim($(this).val()))){
                        $(this).parent().append('<strong class="field-error">Please enter a valid date.</strong>');
                        $(this).parent().addClass('inputError');
                        hasError = true;
                    }
                } else if($(this).hasClass('time')) {
                    var dateReg = /^[0-9]{2}:[0-9]{2}$/;
                    if(!dateReg.test(jQuery.trim($(this).val()))){
                        $(this).parent().append('<strong class="field-error">Please enter a valid time.</strong>');
                        $(this).parent().addClass('inputError');
                        hasError = true;
                    }
                } else if($(this).hasClass('persons')) {
                    var personsReg = /^[1-9]{1}[0-9]{0,1}$/;
                    if(!personsReg.test(jQuery.trim($(this).val()))){
                        $(this).parent().append('<strong class="field-error">Please enter a valid number of persons.</strong>');
                        $(this).parent().addClass('inputError');
                        hasError = true;
                    }
                }
            }
        });

        return hasError;
    }
    //sent mail end

    $(".start__center > div").matchHeight();

// Smoothprinting block 
    var Smoothprinting = {
        $text : "",
        $cover : "",
        iter : 0,
        stopvar :true,


        stop: function() {
            this.stopvar = true;
        },
        play: function() {
            this.stopvar = false;
        },
        init: function() {
            this.$text = $('.question__center p');
            this.width = this.$text.width();
            this.decrement = this.width / this.$text.text().length;
            this.$cover = $('.question__center .cover');
            this.addChar();
        },
        addChar: function (){
            this.$cover.css('width', '-=' + this.decrement);
            var self = this;
            if ( parseInt( this.$cover.css('width') ) > 0 )
            {
                setTimeout(function() { self.addChar.apply(self) }, 50);
            }
            else{
                if(!this.stopvar) {
                    setTimeout(function() { self.changeText.apply(self) }, 1200);
                }
                this.$cover.addClass("blink");
                //else return;

            }
            return;
        },
        changeText: function() {
            this.$text.text(this.$text.attr('data-text'+((+this.iter++)%4))).append("<span class='cover'></span>");
            this.$cover.removeClass("blink");
            this.init();
        },

        bind: function() {
            var self = this;
            $(window).scroll(function() {

                if($(window).scrollTop() >= $('[name=block5]').offset().top-300){
                    if (self.stopvar === true) {
                        self.play();
                        self.init.apply(self);
                    }
                }else{
                    self.stop();
                    //self.init.apply(self);
                }
            });
        }
    };
    if($(window).width()>768) Smoothprinting.bind();



// players block
    $(function() {
            var player = [$('.popup #player1')[0], $('.popup #player2')[0], $('.popup #player3')[0], $('.popup #player4')[0] ,$('.popup #player5')[0] ,$('.popup #player6')[0], $('.popup #player7')[0]];
        var playerOrigin = '*';
        var scrollY = 0;
// popup
        $("body").on("touchstart",function(){
            scrollY = $(window).scrollTop();
        });
        function isScrolled(){
            scrollYD = $(window).scrollTop();
            if(scrollY !== scrollYD){
                return true;
            }
            return false;
        }
        function check_touch() {
            return (
                (navigator.platform.indexOf("iPhone") !== -1) ||
                    (navigator.platform.indexOf("iPod") !== -1) ||
                    (navigator.userAgent.match(/iPad/i) !== null) ||
                    (navigator.userAgent.match(/Iphone/i) !== null) ||
                    (navigator.userAgent.match(/Android/i) !== null)
                );
        };
        $("body").on("click touchend",".js-popup-toggle", function(){
            if(!isScrolled()){
                var popup = $(this).attr("data-popup");
                $("."+popup).addClass("is-visible");
                $('html').css('top','-'+$(window).scrollTop()+'px');
                $("html").addClass("no-scroll");
                Plays((+popup.slice(-1)-1));
                return false;
            }else{
                if(!check_touch()){
                    var popup = $(this).attr("data-popup");
                    $("."+popup).addClass("is-visible");
                    $("html").addClass("no-scroll");
                    Plays((+popup.slice(-1)-1));
                    return false;
                }
            }
        });


        $(".js-popup-close").on("click touchstart", function(){
            $(".js-popup").removeClass("is-visible");
            $("html").removeClass("no-scroll");
            Pauses();
            return false;
        });
        document.timer;
        document.timer1;


        var Pauses = function(i) {
            clearTimeout(document.timer);
            console.log(document.timer);
            document.timer = setTimeout(function(){
                console.log("I'm out");
                for (j = 0, len = player.length; j < len; j++) {
                    post('pause',j);
                }
            },50);
        };
        var Plays = function(i) {

            clearTimeout(document.timer1);

            console.log(document.timer1);
            document.timer1 = setTimeout(function(){
                console.log("I'm in");
                post('play',i);
            },50);
        };


        // Helper function for sending a message to the player
        function post(action, index) {
            var data = {
                method: action
            };

            var message = JSON.stringify(data);
            player[index].contentWindow.postMessage(data, playerOrigin);
        }

    });
});