import $ from 'jquery'
import Swiper from 'swiper/js/swiper.esm.bundle'

export default {
    methods: {

    },
    mounted () {
        $('html, body').attr('_init', 'true');

        worksEvent().init();
    },
}

var worksEvent = function () {
    function init () {
        $('html, body').css('background-color','lightsteelblue');

        bindEvent();

        // set swiper
        setTimeout(function () {
            new Swiper ('.swiper-container', {
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                mousewheel: true,
                grabCursor: true,
                freeMode: true,
                freeModeSticky: true,
                slidesPerView: 'auto',
            })
        }, 0)
    }

    function bindEvent () {
        var thisIndex;

        $('.list-wrap .list').on('click', function () {
            thisIndex = $(this).index();

            open(thisIndex);

            return thisIndex;
        })

        $('.popup-close-icon').on('click', function () {
            close(thisIndex);
        })
    }

    function open (i) {
        if (!$('.popup-content').eq(i)[0]) return false;

        $('html, body').css('overflow','hidden').attr('_state','open');

        $('.sub, .main').removeClass('reverse').addClass('move');

        setTimeout(function () {
            $('.popup-component').eq(i).addClass('open');
        }, 300)
        setTimeout(function () {
            $('.popup-content').eq(i).removeClass('close').addClass('open').css('display', 'block');
        }, 600)
    }

    function close (i) {
        $('html, body').css('overflow','visible').attr('_state','close');

        $('.popup-content').eq(i).removeClass('open').addClass('close');
        setTimeout(function () {
            $('.sub, .main').removeClass('move').addClass('reverse');
        }, 200)
        setTimeout(function () {
            $('.popup-component').eq(i).removeClass('open');
        }, 600)

        $('.popup-content').on("animationend", function(){
            if ($('html, body').attr('_state') == 'close') {
                $('.popup-content').eq(i).css('display','none');
            }
        });
    }

    return {
        init : init
    }
}