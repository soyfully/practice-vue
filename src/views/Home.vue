<template>
    <div id='main' class='main'>
        <div class="container">
            <div class="wrap">
                <div class='top_txt'>
                Hello, I'm
                <span style='display:inline-block' class='ani'>Soi Kim.</span>
                </div>
                <div class="bottom_txt">
                    <span class='ani'> Front-end developer,</span>
                    and interested in <br>
                    interaction with <span style='display:inline-block' class='ani'>JS</span> <br>
                    and <span style='display:inline-block' class='ani'>framework.</span>
                    <div class='copyrigth'>
                        ⓒ 2020. KIM SOI All Rights Reserved.
                    </div>
                </div>
                <div class="svgBox">
                    <a href="#">
                        <svg viewBox="0 0 150 150">
                            <path
                                id="curve"
                                fill="transparent"
                                d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
                            />
                            <text>
                                <textPath xlink:href="#curve" fill="#eab75b">
                                    ・STUDY・WITH・ME
                                </textPath>
                            </text>
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    import $ from 'jquery'
    // import { TweenMax } from 'gsap';

    export default {
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
            $('html, body').css('background-color','#eab75b');

            if ($('html, body').attr('_init') == 'true') {
                $('.ani').addClass('reset');

                return false;
            }

            $('html, body').attr('_init', 'true');

            // init for motion
            $('.menu_wrap').css('display', 'none');
            $('.container').css('opacity', 0);

            homeEvent().init();
        },
    }


    var homeEvent = function () {
        function init () {
            setTimeout(function () {
                $('#main').addClass('start');
            }, 0)

            setTimeout(function () {
                $('#main').removeClass('start').addClass('end');

                // reset after motion
                $('.container').css('opacity', 1);
                $('.menu_wrap').css('display', 'block');

                setTimeout(closeMotion, 1000);
            }, 1000)
        }

        function closeMotion () {
            for (var i = 0; i < $('.ani').length; i ++) {
                (function (i) {
                    setTimeout(function() {
                        $('.ani').eq(i).removeClass('start').addClass('end')
                    }, 300 * i);
                })(i);
            }
        }

        return {
            init : init
        }
    }
</script>

<style scoped>
    #main {
        position: relative;
        height: 100%; width: 100%;
        color: #fff;
    }
    #main .container {
        position: absolute;
        width: calc(100% - 200px); height: calc(100% - 200px);
        margin: 100px;
        font-family: 'OPTIImprovNewWideNine'; font-size: 4.5vw;
    }
    #main .container .wrap {
        width: 100%; height: 100%;
    }
    #main .container .wrap .top_txt {}
    #main .container .wrap .bottom_txt {
        position: absolute;
        bottom: 0;
        line-height: 1.4
    }
    #main .container .wrap .copyrigth {
        margin-top: 1.5vw;
        font-family: 'GothaProLig'; font-size: 1.5vw;
    }

    /* motion */
    #main:after {
        content: "";
        position: absolute;
        z-index: 100;
        width: 0%;
        height: 100%;
        background-color: #fff;
        transition: all 1s cubic-bezier(.4,.31,.19,1)
    }
    #main.start:after {
        left: 0%;
        width: 100%;
    }
    #main.end:after {
        right: 0%;
        width: 0%;
    }

    .ani {
        position: relative;
        display: block;
        color: rgba(255, 255, 255, 1);
    }
    .ani:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0%;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .ani.start:after {
        left: 0%;
        width: 100%;
    }
    .ani.end {color: rgba(255, 255, 255, 1);}
    .ani.end:after {
        /* right: 0%; */
        width: 0%;
        transition: 1s cubic-bezier(.66,0,.34,1) all;
    }

    .ani.reset:after {
        width: 0%;
    }


    .svgBox {
        position: absolute;
        width: 10vw;
        height: 10vw;
        right: -10px;
        bottom: 0;
    }
    .svgBox svg {
        display: block;
        width: 11vw;
        height: 11vw;
        letter-spacing: 7px;
        font-size: 18px;
    }
    .svgBox svg text {
        transform-origin: 50% 50%;
        animation: rotate 8s linear infinite;

        text-shadow:
        -2px -2px 0 #fff,
        2px -2px 0 #fff,
        -2px 2px 0 #fff,
        2px 2px 0 #fff;
    }

    @keyframes rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>

