<template>
    <div class='popup-component' id='plugIn'>
        <div class="popup-content-wrap">
            <div class='popup-content'>
                <div class="content-start">
                    <div class="popup-close-icon" @click.stop='closeTargetModal'>
                        <div class="icon">
                            <span class="line line-1"></span>
                            <span class="line line-2"></span>
                            <span class="line line-3"></span>
                        </div>
                    </div>
                    <div class='page-explain'>
                        <div class='title'> Custom Loading Icon UI Plugin</div>
                        <div class='sub-title'>
                            커스텀 로딩 아이콘 플러그인
                        </div>
                        <div class='explane'>
                            ajax 호출이나 컨텐츠 로딩 과정 등, 로딩 아이콘이 필요한 위치에 삽입하여 노출하는 기능. 원활한 협업을 위해 개인적으로 작업한 프로젝트입니다.<br>
                            <p>
                                기여도 100%
                            </p>
                        </div>
                    </div>
                    <div class="page-content">
                        <div class='content-section full-position'>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        웹팩 첫 시작을 위한 프로젝트
                                    </div>
                                    <div class="explane">
                                        webpack 경험을 위해 사용해보았습니다.
                                        4가지의 로딩 아이콘을 각각의 ts, scss 파일로 모듈화하여 작업 후 하나의 스크립트 파일로 번들링합니다.
                                        코드의 난독화, eslint, 다양한 webpack 플러그인 활용 등 webpack 의 대표적 기능을 경험했습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='content-section full-position'>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        타입스크립트 활용
                                    </div>
                                    <div class="explane">
                                        그간 작업해온 class 를 모방한 javascript 패턴에서 벗어난 작업을 경험했습니다.
                                        공통 기능을 담고있는 class 생성하여 각 타입별로 나뉘어있는 class 에 extends 하여 기능을 사용합니다.
                                        interface 를 활용해 사용자의 커스텀 값을 파라미터로 받아오고, 그에 대한 타입 체크 등 typescript 의 대표적 기능을 경험했습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='content-section full-position'>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        제이쿼리 의존성 제거
                                    </div>
                                    <div class="explane">
                                        편리하지만 무겁다면 무거운 jquery 에 여러 프로젝트를 진행하며 너무 익숙해지다보니 vanila Javascript 의 기초가 부족하다 생각했습니다.
                                        자바스크립트의 기반을 다질겸, jquery 의존성을 제거하여 vanilaJS 로만 작성했습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SubFooter 
                        linkUrl='https://github.com/soyfully/loading-library' 
                        linkTitle='Go to site'
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import SubFooter from '../SubFooter/SubFooter.vue';

    export default {
        data: function () {
            return {

            }
        },
        components: { SubFooter },

        mounted () {

        },
        methods: {
            closeTargetModal (event) {
                const thisComponent = $(this.$el);
                
                $(event.target).parents('.popup-content').removeClass('open').addClass('close');

                setTimeout(function () {
                    $('.sub, .main').removeClass('move').addClass('reverse');
                }, 200)
                setTimeout(function () {
                    thisComponent.removeClass('open');
                }, 600)
            }
        }
    }
</script>

<style scoped>
    .popup-close-icon {
        position: fixed; z-index: 2;
        right: 100px; top: 100px;
        width: 5vw; height: 5vw; overflow: hidden;
        cursor: pointer;
    }
    .popup-close-icon .icon .line {
        display: block; position: absolute;
        right: 0;
        width: 100%;
        height: 0.6vw;
        background: #000;
        transition: 0.4s ease all
    }
    .popup-close-icon .icon .line-1 {
        transform: translateY(334%) translateX(0) rotate(45deg);
        -webkit-transform: translateY(334%) translateX(0) rotate(45deg);
        -moz-transform: translateY(334%) translateX(0) rotate(45deg);
    }
    .popup-close-icon .icon .line-2 {
        opacity: 0;
    }
    .popup-close-icon .icon .line-3 {
        transform: translateY(334%) translateX(0) rotate(-45deg);
        -webkit-transform: translateY(334%) translateX(0) rotate(-45deg);
        -moz-transform: translateY(334%) translateX(0) rotate(-45deg);
    }

    .popup-content {
        display: none;

        position: absolute; z-index: 15; box-sizing: border-box;
        top: 0%; left: 0; padding: 100px;
        width: 100%; height: 100%;
        background-color: #e2e2e2;
        color: #000;

        overflow-y: scroll;
    }
    .popup-content::-webkit-scrollbar {
        display: none;
    }
    .page-content{
        margin-bottom: 100px
    }

    .content-start {
        width: 100%; height: auto;
    }
    .page-explain{
        margin-top: 20%;
    }
    .page-explain .title{
        margin-right: 10vw;
        font-family: 'OPTIImprovNewWideNine'; font-size: 4.5vw; line-height: 1.1;
    }
    .page-explain .sub-title {
        margin-top: 1.5vw;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 500; font-size: 1.3vw;
    }
    .page-explain .explane {
        margin-top: 3.5vw;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1.3vw; line-height: 2; word-break:keep-all;
    }
    .page-explain .explane p {
        margin-top: 1vw;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1vw;
    }

    .content-section { 
        margin-top: 13vw;
    }
    .content-section:after{
        content:'';
        display:block;
        clear:both;
    }
    .content-section .txt-container {
        position: relative;
        width: 40vw;
        height: 35vw;
    }
    .content-section .title {
        /* margin-top: 7vw; */
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: 800; font-size: 2vw; line-height: 1.5;
    }
    .content-section .explane {
        margin-top: 3vw;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300; font-size: 1.3vw; line-height: 2; word-break:keep-all
    }
    .content-section .txt-container .txt-wrap {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .content-section.full-position .img-cont {
        width: 100%;
        height: 27vw;
        position: relative;
    }
    .content-section.full-position .img-cont .img-wrap {
        width: 100%;
        height: 100%;
        background: #fff;
        overflow-y: scroll;
    }
    .content-section.full-position .img-cont .img-wrap::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    .content-section.full-position .img-cont .img-wrap img {
        width: 100%;
    }
    .content-section.full-position .img-cont .view-all-code {
        position: absolute;
        bottom: 20px;
        right: 20px;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        font-size: 1vw;
        color: #9fa7b3;
        cursor: pointer;

        transition: 0.3s cubic-bezier(0.66, 0, 0.34, 1) all;
        opacity: 0;
    }
    .content-section.full-position .img-cont:hover .view-all-code {
        opacity: 1;
    }
    .content-section.full-position .txt-container {
        width: auto;
        height: auto;
        margin-top: 3vw;
    }
    .content-section.full-position .txt-wrap {
        position: relative;
        top: 0;
        transform: translateY(0);
        display: flex;
    }
    .content-section.full-position .txt-wrap .title {
        /* flex: 1 */
    }
    .content-section.full-position .txt-wrap .explane {
        margin-top: 0;
        margin-left: 10vw;
        flex: 1
    }


    .popup-component:after{
        content:''; 
        display:block; 
        position:absolute; 
        bottom:0px; 
        right:0px; 
        z-index:10; 
        width:100%; 
        height:0%; 
        background:#fff; 
        transition: all 0.8s cubic-bezier(.4,.31,.19,1)
    }
    .popup-content.open {
        animation:detail_open_animate 1s forwards cubic-bezier(.66,0,.34,1); 
        display: block;
    }
    .popup-component.open:after{
        height: 100%;
    }
    @keyframes detail_open_animate {
        0% {transform:translate(0,100%);}
        100% {transform:translate(0, 0%);}
    }
    .popup-content.close {
        animation:detail_close_animate 1s forwards cubic-bezier(.66,0,.34,1); 
        display: block;
    }
    @keyframes detail_close_animate {
        0% {transform:translate(0, 0%);}
        100% {transform:translate(0, 100%);}
    }
</style>