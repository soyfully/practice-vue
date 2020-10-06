<template>
  <div id='profile' class='sub'>
    <div class="container">
        <div class='wrap'>
            <div class='page-explain'>
                <div class='title'>Profile</div>
                <div class='sub-title'>
                    자바스크립트, 프레임워크(Vue.js) 그리고 성능에 관심이 많습니다. <br>
                    또한 플러그인, 라이브러리의 사용을 필요 외엔 최소화하기 위해<br>
                    JS 에 대한 이해와 기본기를 다지려 노력하고있습니다.<br>
                    나아가 항상 새로운 시도를 할 수 있는 프론트엔드 개발자가 되고싶습니다. <br>
                </div>
            </div>
            <div class='page-content'>
                <div class="accordion">
                    <div class="sub-title">Information</div>
                    <div class="accordion-item">
                        <button class="acc-title" type="button">
                        <div class="title-area">
                            <div class="tit">
                                안녕하세요. 김소이입니다.<span>열어보세요 !</span>
                            </div>
                            <em class="ico01" aria-hidden="true"></em>
                            <em class="ico02" aria-hidden="true"></em>
                        </div>
                        </button>
                        <div class="acc-panel">
                            <div class="datatable-report">
                                <div class="img">

                                </div>
                                <div class="text">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion">
                    <div class="sub-title">Resume</div>
                    <div class="accordion-item">
                        <button class="acc-title" type="button">
                        <div class="title-area">
                            <div class="tit">
                                (주)이트라이브<span>스크립터 / 2019.01 ~</span>
                            </div>
                            <em class="ico01" aria-hidden="true"></em>
                            <em class="ico02" aria-hidden="true"></em>
                        </div>
                        </button>
                        <div class="acc-panel">
                            <div class="datatable-report">
                                <ul>
                                    <li>webpack, gulp 등 node JS 기반의 개발 경험</li>
                                    <li>Typescript, vanila JS (es6) 를 활용한 회사 공용 플러그인 제작 경험</li>
                                    <li>반응형 프로젝트 진행</li>
                                    <li>디자이너와의 협업을 통한 모션 인터렉션 작업 진행</li>
                                    <li>웹 표준 / 접근성 준수 및 마크 획득</li>
                                    <li>다양한 플러그인 / 라이브러리를 활용한 프로젝트 진행</li>
                                    <li>pug, scss 와 같은 전처리기를 이용한 프로젝트 진행</li>
                                    <li>git을 이용한 코드 형상관리</li>
                                </ul>
                                <br>
                                위와 같이 회사의 전반적인 구축, 운영 스크립트 개발을 담당했습니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion">
                    <div class="sub-title">Cover letter</div>
                    <div class="accordion-item">
                        <button class="acc-title" type="button">
                            <div class="title-area">
                                <div class="tit">호기심이 이끌어,</div>
                                <em class="ico01" aria-hidden="true"></em>
                                <em class="ico02" aria-hidden="true"></em>
                            </div>
                        </button>
                        <div class="acc-panel">
                            <div class="datatable-report">
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button class="acc-title" type="button">
                            <div class="title-area">
                                <div class="tit">열정으로 나아가다.</div>
                                <em class="ico01" aria-hidden="true"></em>
                                <em class="ico02" aria-hidden="true"></em>
                            </div>
                        </button>
                        <div class="acc-panel">
                            <div class="datatable-report">
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button class="acc-title" type="button">
                            <div class="title-area">
                                <div class="tit">그리고 그 사이에 선 나.</div>
                                <em class="ico01" aria-hidden="true"></em>
                                <em class="ico02" aria-hidden="true"></em>
                            </div>
                        </button>
                        <div class="acc-panel">
                            <div class="datatable-report">
                                <p>
                                    <!-- 마지막으로, <br>
                                    관심이 생기면 무엇이든 공부해왔습니다. 필요하다면 어떻게 해서든 습득했습니다. <br>
                                    빠르게 변화하는 프론트엔드 개발의 기술 속에서 뒤쳐지고 싶지 않다는 욕심이 저에겐 가장 큽니다. <br>
                                    대단한 것은 아니지만 지금 보고 계시는 이 사이트 또한 Vue.js 를 배우고 싶다는 욕심에 차근 차근 공부해 만든 포트폴리오입니다. <br>
                                    물론 완벽하지 않습니다. 또, 다른 사람보다 조금 느릴 수 있습니다. <br>
                                    다만 이러한 저의 호기심과 열정이라면 무엇이든 할 수 있습니다. -->
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <subFooter _url='../assets/pdf/resume.pdf' _message='Download'></subFooter>
        </div>
    </div>
  </div>
</template>


<script>
    import $ from 'jquery'
    import ScrollMagic from 'scrollmagic';

    import subFooter from '../component/sub-footer.vue'

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
            var scene = new ScrollMagic.Scene({ offset: -100, duration: $('.page-content').offset().top - ( $('.page-explain').height() * 1.5 ) })
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

</script>

<style scoped>
    #profile {
        position: relative;
        height: 100%; width: 100%;
        color: #fff;
        overflow: hidden;
    }
    #profile .container {
        position: absolute; top: 0;
        width: calc(100% - 200px); height: 100%;
        margin: 0 100px 100px 100px;
        overflow-x: scroll;
    }
    #profile .container .wrap {
        position: relative;
        width: 100%; height: auto;
        /* margin-top: 100px; */

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    #profile .container::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    #profile .container .page-explain {
        width: 90%;
        display: flex;
    }
    /* #profile .container .page-explain:after{
        content:'';
        display:block;
        clear:both;
    } */
    #profile .container .page-explain .title{
        /* float: left; */
        margin-right: 10vw;
        font-family: 'OPTIImprovNewWideNine'; font-size: 4.5vw;
    }
    #profile .container .page-explain .sub-title{
        /* float: left; */
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1.3vw; line-height: 2.2;
        transition: 0.4s ease all;
    }
    #profile .container .page-explain .sub-title.on{
        opacity: 0;
    }
    #profile .container .page-content{
        clear: both;
        margin-top: 20vw;
    }
    #profile .container .page-content .accordion {
        margin-bottom: 6vw;
    }
    #profile .container .page-content .accordion .sub-title {
        font-family: 'OPTIImprovNewWideNine'; font-size: 2.5vw;
        height: 5vw;
    }
    #profile .container .page-content .accordion-item:after{
        content: "";
        display: block;
        position: relative;
        width: 100%;
        height: 0.4vw;
        background: #fff;
        transition: .6s all ease;
    }
    #profile .container .page-content .accordion-item .datatable-report ul {
        list-style-type: disc;
        list-style-position: inside;
    }
    #profile .container .page-content .accordion-item .acc-title{
        position: relative;
        width: 100%;
        height: 7vw;
        text-align: left;
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 500; font-size: 1.3vw;color: #fff;
    }
    #profile .container .page-content .accordion-item .acc-title .title-area {
        margin-left: 1vw;
    }
    #profile .container .page-content .accordion-item .acc-title span{
        margin-left: 2vw;
        font-weight: 100; font-size: 1vw;
    }
    #profile .container .page-content .accordion-item .acc-title em{
        position: absolute;
        top: 50%;
        right: 1vw;
        width: 1.3vw;
        height: 0.3vw;
        background: #fff;
        transition: .4s all;
    }
    #profile .container .page-content .accordion-item .acc-title .ico01{
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }
    #profile .container .page-content .accordion-item .acc-title.on .ico01{
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
    }
    #profile .container .page-content .accordion-item .acc-panel{
        display: none;
        height: auto;
        padding: 3vw;
        background-color: #ffffff0d;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1.3vw; line-height: 2.3; color: #fff;
    }
    .page-explain .title.on, .page-explain .title.on:after {
        animation-iteration-count: 1;
        animation-duration: 800ms;
        animation-fill-mode: both;
    }
    .page-explain .title.on {
        position: relative;
        display: block;
        animation-name: reveal-text;
    }
    .page-explain .title.on:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        animation-name: revealer-text;
    }
    @keyframes reveal-text {
        from {clip-path: inset(0 100% 0 0);}
        to {clip-path: inset(0 0 0 0);}
    }

    @keyframes revealer-text {
        0%, 50% {transform-origin: 0 50%;}
        60%, 100% {transform-origin: 100% 50%;}
        60% {transform: scaleX(1);}
        100% {transform: scaleX(0);}
    }

</style>
