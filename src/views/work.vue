<template>
    <div id='works' class='sub'>
        <div class="container">
            <div class="wrap">
                <div class='page-explain'>
                    <div class='title'>Works</div>
                    <div class='sub-title'>
                        회사를 다니며 진행한 작업물들 중 몇가지를 골라 나열했습니다. <br>
                        공식적인 프로젝트 외에 공부 및 회사에서 편하게 사용하기 위해 <br>
                        개인적으로 작업한 서브 프로젝트도 있습니다. <br>
                        더 많은 작업물들은 <a href='https://www.rocketpunch.com/@soyfully' target="_blank">여기</a>를 클릭해주세요.
                    </div>
                </div>
                <div class='page-content'>
                    <div class='works-list'>
                        <div class="sub-title">
                            <div class="sub-title-name">In the company</div>
                            <div class="sub-title-scroll">
                                <div class="text">scroll</div>
                                <div class="icon">
                                    <em style=""></em>
                                    <em style=""></em>
                                </div>
                            </div>
                        </div>
                        <div class="list-wrap swiper-container">
                            <div class="wrap swiper-wrapper">
                                <div class="list swiper-slide">
                                    <div class="list-title">
                                        엘지 화학 사이트 리뉴얼<span>메인 프로젝트</span>
                                    </div>
                                    <div class="list-content">
                                        <div>JS / JQuery</div>
                                        <div>Gulp</div>
                                        <div class='kr'>반응형</div>
                                        <div>a11y</div>
                                    </div>
                                </div>
                                <div class="list swiper-slide">
                                    <div class="list-title">
                                        대림 이편한 세상 사이트 리뉴얼<span>메인 프로젝트</span>
                                    </div>
                                    <div class="list-content">
                                        <div>JS / JQuery</div>
                                        <div>Gulp</div>
                                        <div>a11y</div>
                                    </div>
                                </div>
                                <div class="list swiper-slide">
                                    <div class="list-title">
                                        파리바 접근성 마크 획득<span>메인 프로젝트</span>
                                    </div>
                                    <div class="list-content">
                                        <div>JS / JQuery</div>
                                        <div>a11y</div>
                                    </div>
                                </div>
                                <div class="list swiper-slide">
                                    <div class="list-title">
                                        로딩 아이콘 노출 플러그인<span>서브 프로젝트</span>
                                    </div>
                                    <div class="list-content">
                                        <div>es6</div>
                                        <div>Typescript</div>
                                        <div>Webpack</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--
        <div class='layerPopup' style="
            display:none;
            padding: 50px;
            width: 500px;
            height: 700px;
            background-color: #fff;">
            <div class='destroyPopup' style="margin-top:20px; color: #000; cursor:pointer; text-decoration-line: underline;">modal.hide();</div>
        </div>
        -->

    </div>
</template>


<script>
    import $ from 'jquery'
    import Swiper from 'swiper/js/swiper.esm.bundle'
    // import { TweenMax } from 'gsap';
    // import EtribeModal from '../../public/etribeModal.min.js';

    export default {
        // components: { subFooter },

        methods: {

        },
        // beforeRouteEnter (to, from ,next) {
        //     // 현재 컴포넌트 불러오기 전 menu close motion
        //     // menu 모션이 끝났을 때
        //     if ($('.menu-component').attr('_move') == 'false' || $('.menu-component').attr('_move') == undefined) {
        //         next();
        //     } else { // menu 모션이 끝나기 전
        //         return false;
        //     }
        // },
        mounted () {
            $('html, body').attr('_init', 'true');

            worksEvent().init();
        },
    }

    var worksEvent = function () {
        // var $scrollLeftFunc
        var $list, $setWidth;
        // var controller, scene;

        function init () {
            $setWidth = $('.container').width() - 100;
            $list = $('.works-list .list-wrap');

            $('html, body').css('background-color','lightsteelblue');

            // set width scroll el of work list
            $list.css('width', $setWidth);

            // set swiper
            new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: false,
                mousewheel: true,
                grabCursor: true,
                freeMode: true,
                freeModeSticky: true,
                slidesPerView: 'auto'
            })

            // active horizental scroll funtion
            // $scrollLeftFunc = new ScrollLeftFunction();
            // $scrollLeftFunc.active($(window), $list);

            // import modal function
            // importModalFunc().init();

            bindEvent();
        }

        function bindEvent () {
            // resize
            $(window).on('resize', function () {
                // init list width
                $setWidth = $('.container').width() - 100;
                $list.css('width', $setWidth);
            })

            // $('.list-wrap .list').on('mouseenter', function () {
            //     $(this).addClass('on');
            // })

            // $('.list-wrap .list').on('mouseleave', function () {
            //     $('.list-wrap .list').removeClass('on');
            // })

            $('.list-wrap .list').on('click', function () {
                var thisIndex = $(this).index();

                open(thisIndex);
            })

            $('.popup-close-icon').on('click', function () {
                close();
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

        function close () {
            $('html, body').css('overflow','visible').attr('_state','close');

            $('.popup-content').removeClass('open').addClass('close');
            setTimeout(function () {
                $('.sub, .main').removeClass('move').addClass('reverse');
            }, 200)
            setTimeout(function () {
                $('.popup-component').removeClass('open');
            }, 600)

            $('.popup-content').on("animationend", function(){
                if ($('html, body').attr('_state') == 'close') {
                    $('.popup-content').css('display','none');
                }
            });
        }

        return {
            init : init
        }
    }

    // var ScrollLeftFunction = function () {
    //     var $el, $moveLeft, $rangeEl;
    //     // var $upDown;

    //     (function init () {
    //         $moveLeft = 0;
    //     })();

    //     this.active = function (_rangeEl, _el) {
    //         $rangeEl = $(_rangeEl);
    //         $el = $(_el);

    //         $rangeEl.on("mousewheel DOMMouseScroll", function(event){
    //             var _wheelDelta = event.originalEvent.wheelDelta;

    //             if (!event) event = window.event;
    //             // if(event.originalEvent.wheelDelta > 0) {
    //             //     $upDown = "up";
    //             // } else {
    //             //     $upDown = "down";
    //             // }

    //             render(_wheelDelta);
    //         })
    //     }

    //     this.destory = function (_rangeEl) {
    //         $rangeEl = $(_rangeEl);

    //         $rangeEl.off("mousewheel DOMMouseScroll");
    //     }

    //     function render(_wheelDelta){
    //         $moveLeft -= _wheelDelta;
    //         if($moveLeft < 0) $moveLeft = 0;

    //         moveLeftFunc();
    //     }

    //     function moveLeftFunc () {
    //         TweenMax.to($el, 0.5, {
    //             scrollLeft: $moveLeft,
    //             onUpdate:function(){

    //             },
    //         });
    //     }
    // }

    // var importModalFunc = function () {
    //     var $el, $initBtn, $destroyBtn;

    //     function init () {
    //         $initBtn = document.querySelector('.initPopup');
    //         $destroyBtn = document.querySelector('.destroyPopup');

    //         bindEvent();
    //     }

    //     function bindEvent () {
    //         $initBtn.addEventListener('click', function () {
    //             $el = new EtribeModal({
    //                 'selector' : document.querySelector('.layerPopup'),
    //                 'scrollLock' : JSON.parse(document.querySelector('.scrollLock').value),
    //                 'useDimm' : JSON.parse(document.querySelector('.useDimm').value),
    //                 'dimmCss' : document.querySelector('.dimmCss').value,
    //                 'selectDimm' : eval(document.querySelector('.selectDimm').value),
    //                 'hideOnClick' : JSON.parse(document.querySelector('.hideOnClick').value),
    //             });
    //         });

    //         $destroyBtn.addEventListener('click', function () {
    //             $el.destroy();
    //         })
    //     }

    //     return {
    //         init : init
    //     }
    // }
</script>

<style scoped>
    #works {
        position: relative;
        height: 100%; width: 100%;
        color: #fff;
        overflow: hidden;
    }
    #works .container {
        position: relative; top: 0;
        height: 100%;
        /* width: calc(100% - 200px);
        margin: 0 100px 0 100px; */
        overflow: hidden;
    }
    #works .container > .wrap {
        position: relative;
        width: 100%; height: 100%;
        /* margin-top: 100px; */
    }
    #works .container .page-explain{padding: 100px 100px 0 100px;}
    #works .container .page-explain:after{
        content:'';
        display:block;
        clear:both;
    }
    #works .container .page-explain .title{
        float: left; margin-right: 10vw;
        font-family: 'OPTIImprovNewWideNine'; font-size: 4.5vw;
    }
    #works .container .page-explain .sub-title{
        float: left;
        transition: 0.4s ease all;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1.3vw; line-height: 2.3;
        transition: 0.4s ease all;
    }
    #works .container .page-explain .sub-title > a {
        text-decoration-line: underline;
    }
    #works .container .page-explain .sub-title.on{
        opacity: 0;
    }
    #works .container .page-content{
        clear: both;
        position: absolute;
        bottom: 0;
    }
    #works .works-list {
        height: auto;
        margin-bottom: 100px;
    }
    #works .works-list .sub-title {
        padding: 0 100px 0 100px;
        font-family: 'OPTIImprovNewWideNine'; font-size: 2.5vw;
        margin-bottom: 3.5vw;
        display: flex;
        justify-content: space-between;
    }
    #works .works-list .sub-title .sub-title-scroll::after {
        content: "";
        clear: both;
        display: block;
    }
    #works .works-list .sub-title .sub-title-scroll {animation: .55s alternate-reverse infinite cubic-bezier(0.455, 0.03, 0.515, 0.955) yoyo;}
    #works .works-list .sub-title .sub-title-scroll .text {float: left; margin-right: 2vw;}
    #works .works-list .sub-title .sub-title-scroll .icon {
        float: left;
        position: relative; padding-right: 100px;
    }

    @-webkit-keyframes yoyo {
        0%, 5% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
        95%,100% {
            -webkit-transform: translateX(-20px);
                    transform: translateX(-20px);
        }
    }

    @keyframes yoyo {
        0%, 5% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
        95%,100% {
            -webkit-transform: translateX(-20px);
                    transform: translateX(-20px);
        }
    }

    #works .works-list .sub-title .sub-title-scroll em {
        position: absolute;
        display: block; background-color: #fff;
    }
    #works .works-list .sub-title .sub-title-scroll em:first-child {
        position: absolute; top: 1vw; right: 0; transform: rotate(-150deg); width: 2.5vw; height: 0.6vw;
    }
    #works .works-list .sub-title .sub-title-scroll em:last-child {
        width: 8vw; height: 0.6vw; margin-top: 1.7vw; right: 0;
    }
    #works .works-list .list-wrap {
        position: relative;
        padding-left: 100px;
    }
    #works .works-list .list-wrap::-webkit-scrollbar { display: none; }
    #works .works-list .wrap {width: max-content; height: auto;}
    #works .works-list .list {position: relative; overflow: hidden; display: inline-block; box-sizing: border-box; margin-right: 2.5vw; width: 32vw; height: 14vw; padding: 3vw; border: 0.6vw solid; cursor: pointer;}
    #works .works-list .list:last-child {margin-right: 100px;}
    #works .works-list .list .list-title {
        font-family:'Nanum Gothic'; font-weight: 700; font-size: 1.3vw; color: #fff;
    }
    #works .works-list .list .list-title span{
        margin-left: 0.8vw;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 100; font-size: 1vw;
    }
    #works .works-list .list .list-content {
        position: absolute; padding-left: inherit; padding-right: inherit; padding-bottom: inherit; bottom: 0; left: 0; right: 0;
    }
    #works .works-list .list .list-content > div {
        display: inline-block; box-sizing: border-box; padding-left: 0.8vw; padding-right: 0.8vw; margin-right: 0.5vw; margin-top: 0.5vw; border: 1px solid #fff; border-radius: 30px;
        font-family: 'GothaProLig'; font-size: 1vw; line-height: 2;
    }
    #works .works-list .list .list-content > .kr {
        font-family: 'Noto Sans KR', sans-serif; font-weight: 100;
    }
    #works .works-list .list .list-content div:last-child {margin-right: 0px;}

    .popup{
        display: none;
        position: absolute;
        background: lightsteelblue;
        z-index: 10;
        border: 0.6vw solid #fff;
        overflow: hidden;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 100; font-size: 1.3vw
    }
    .popup.popup-large {
        width: 80vw; height: 70vh;
    }
    .popup .popup-container {
        position: absolute; top: 0;
        width: calc(100% - 160px); height: calc(100% - 80px);
        margin: 80px; margin-bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .popup .popup-container::-webkit-scrollbar { display: none; }
    .popup-icon-wrap {
        position: absolute; z-index: 2;
        right: 0; top: 0;
        width: 2vw; height: 2vw; overflow: hidden;
        cursor: pointer;
    }
    .popup-icon-wrap .popup-icon .popup-line {
        display: block; position: absolute;
        left: 0;
        width: 100%; height: 0.3vw;
        background: #fff;
    }
    .popup-icon-wrap .popup-icon .popup-line-1 {
        transform: translateY(210%) translateX(0) rotate(45deg);
        -webkit-transform: translateY(210%) translateX(0) rotate(45deg);
        -moz-transform: translateY(210%) translateX(0) rotate(45deg);
    }
    .popup-icon-wrap .popup-icon .popup-line-2 {
        opacity: 0;
    }
    .popup-icon-wrap .popup-icon .popup-line-3 {
        transform: translateY(210%) translateX(0) rotate(-45deg);
        -webkit-transform: translateY(210%) translateX(0) rotate(-45deg);
        -moz-transform: translateY(210%) translateX(0) rotate(-45deg);
    }
    .popup .popup-title {
        font-family:'Nanum Gothic'; font-weight: 800; font-size: 2.2vw; color: #fff;
        margin-bottom: 3vw;
    }
    .popup .popup-title span {
        font-weight: 100; font-size: 1vw; margin-left: 0.8vw;
    }
    .popup .popup-explain {
        font-weight: 100; font-size: 1.3vw; line-height: 1.6; margin-bottom: 3vw;
    }
    .popup .popup-explain > div {
        margin-bottom: 2vw;
    }
    .popup .popup-explain .popup-explain-title {
        font-weight: 400;
        line-height: 2.5;
    }
    .popup .popup-explain .popup-explain-ex {
        line-height: 1.8;
    }

    .popup .popup-ex {
        width: 100%; background-color: rgba(158, 182, 212, 0.65); margin-bottom: 80px;
        font-family: 'GothaProLig'; font-size: 1.3vw; line-height: 2;
        padding: 50px;
    }
    #footer {
        margin-right: 100px
    }
</style>
