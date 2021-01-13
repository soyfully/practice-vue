import $ from 'jquery'
import ScrollMagic from 'scrollmagic';
import subFooter from '../../component/sub-footer.vue'

export default {
    components: { subFooter },

    methods: {

    },
    created () {
        $('html, body').css('background-color','rgb(157 189 95)')
        .attr('_init', 'true')
        .addClass('profile');
    },
    mounted () {
        profileEvent().init();
    },
}

var profileEvent = function () {
    var explain, explainSubTit, accorBtn;

    function init () {
        explain = $('.page-explain');
        explainSubTit = explain.find('.sub-title');
        accorBtn = $('.accordion button');

        setScrollMagic();

        $(window).on('scroll', function () {
            $('.sub, .main').removeClass('reverse');
        })

        accorBtn.on('click', function () {
            var _this = $(this);

            if (!_this.hasClass('on')) {
                openAccordion(_this);
            } else {
                closeAccordion(_this);
            }
        })
    }

    function setScrollMagic () {
        var controller = new ScrollMagic.Controller({container: '.container', globalSceneOptions: {triggerHook: "onEnter"}});
        var scene = new ScrollMagic.Scene({ offset: 0, duration: $('.page-content').offset().top - ( $('.page-explain').height() * 1.5 ) })
                    .setPin(".page-explain", {pushFollowers: false})
                    .addTo(controller);

        scene.on('leave', function () {
            explainSubTit.addClass('on');
        });

        scene.on('enter', function () {
            explainSubTit.removeClass('on');
        })
    }

    function openAccordion (_this) {
        _this.addClass('on');
        _this.next('.acc-panel').slideDown(350);
    }

    function closeAccordion (_this) {
        _this.removeClass('on');
        _this.next('.acc-panel').slideUp(350);
    }

    return {
        init : init
    }
}
