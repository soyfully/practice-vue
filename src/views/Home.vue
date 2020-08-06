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
                <div class="study-icon">
                    <a class="go" role='button' v-bind:href="url" target="_blank">G O</a>
                    <img class="turn" :src="image" />
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    import $ from 'jquery'
    import image from "../assets/img/soynim.png"

    export default {
        data: function () {
            return {
                image: image,
                url: "https://velog.io/@soyfully"
            }
        },
        methods: {

        },
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

            // $('.study-icon').on('click', function () {
            //     alert('TO BE CONTINUED!');
            // })
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

    .study-icon {
        z-index: 1;
        position: absolute;
        width: 15vw;
        height: 15vw;
        right: -50px;
        bottom: -30px;
        /* cursor: pointer; */
    }
    .study-icon img {
        width: 100%;
    }
    .study-icon .go {
        z-index: 2;
        cursor: pointer;
        position: absolute;
        top: 50%; left: 50%; transform: translate(-50%, -50%);
        font-size: 1.6vw;
        /* letter-spacing: 5px; */
        color: #eab75b;
        text-shadow:
            -1px -1px 0 #fff,
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
            1px 1px 0 #fff;
    }

    .study-icon .go {
        opacity: 0;
        transition: 0.4s ease all;
    }
    .study-icon:hover .go{
        opacity: 1;
    }

    .study-icon img.turn {
        transform-origin: 50% 50%;
        animation: rotate 8s linear infinite;
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

