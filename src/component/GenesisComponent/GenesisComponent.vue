<template>
    <div class='popup-component' id='genesis'>
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
                        <div class='title'>Hyundai Genesis BTO website</div>
                        <div class='sub-title'>
                            현대 제네시스 BTO 웹사이트 구축 / 운영
                        </div>
                        <div class='explane'>
                            페이지 내의 구성요소에 관련된 컴포넌트 작성 및 기능 개발을 담당했습니다. 각 자동차 별 데이터를 활용해 제작하는 프로젝트였기에 각 api 에서 넘겨주는 json 데이터와 vuex 상태 관리가 중요한 프로젝트였습니다.<br>
                            <p>
                                기여도 20%
                            </p>
                        </div>
                    </div>
                    <div class="page-content">
                        <div class='content-section full-position'>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        Vue / Vuex 프로젝트 경험
                                    </div>
                                    <div class="explane">
                                        기본적인 vue / vuex 를 활용한 운영을 경험했습니다.
                                        vue 컴포넌트 생성 및 기능 제작시 api 통신 json 또는 public json 값을 사용해 dom 을 제어하거나,
                                        각 자동차와 부품 스텝별로 보여줘하는 값들이 달랐기에 vuex store 에 저장된 상태값들을 가져와 필요시 vue 부모 / 자식 컴포넌트 사이의 데이터 통신을 하는 등
                                        전반적인 vue 프로젝트 운영 담당했습니다.
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
                                        타입스크립트를 활용해 vue 작업 시 class 기반의 component 로 작성해나갔습니다.
                                        평소 vue 작성 스타일과는 다르게 prop, component, mixin 등등 데코레이터를 사용해 선언하는 등
                                        타입스크립트를 다양하게 사용하여 프로젝트를 운영했습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='content-section full-position'>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        코드 마이그레이션
                                    </div>
                                    <div class="explane">
                                        퍼블리싱 결과물인 html, css 코드를 vue, scss 코드로 마이그레이션하는 작업을 담당했습니다.
                                        컴포넌트로 만들어야하는 부분과 라우터를 사용해 화면단을 띄워줘야하는 부분 등 여러가지 상황을 판단하여 제작했습니다.
                                        주로 개발에서 넘겨주는 json 을 활용해 vue 조건, 반복 랜더링 또는 텍스트 데이터 바인딩하여 완성하고
                                        typescript 로 해당 기능을 작업하는 등의 작업이었습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SubFooter 
                        linkUrl='https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv80/bto/powertrains?code=BBBBBBB&packages=' 
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

    .content-section { margin-top: 18vw;}
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


    .popup-component:after{content:''; display:block; position:absolute; bottom:0px; right:0px; z-index:10; width:100%; height:0%; background:#fff; transition: all 0.8s cubic-bezier(.4,.31,.19,1)}
    .popup-component.open:after{height: 100%;}
    .popup-content.open {animation:detail_open_animate 1s forwards cubic-bezier(.66,0,.34,1); display: block;}
    @keyframes detail_open_animate {
        0% {transform:translate(0,100%);}
        100% {transform:translate(0, 0%);}
    }
    .popup-content.close {animation:detail_close_animate 1s forwards cubic-bezier(.66,0,.34,1); display: block;}
    @keyframes detail_close_animate {
        0% {transform:translate(0, 0%);}
        100% {transform:translate(0, 100%);}
    }
</style>