<template>
    <div class='popup-component' id='lg'>
        <div class="popup-content-wrap">
            <div class='popup-content'>
                <div class="content-start">
                    <div class="popup-close-icon">
                        <div class="icon">
                            <span class="line line-1"></span>
                            <span class="line line-2"></span>
                            <span class="line line-3"></span>
                        </div>
                    </div>
                    <div class='page-explain'>
                        <div class='title'>LG Chem Website Renewer</div>
                        <div class='sub-title'>
                            엘지 화학 웹사이트 리뉴얼
                        </div>
                        <div class='explane'>
                            모든 페이지의 스크립트 작성, 그리고 모션에 관련된 퍼블리싱 마크업을 진행했습니다. 반응형 프로젝트였기에 코드를 재사용할 수 있도록 신경 써 작성했습니다.<br>
                            기본적으로 웹 표준을 준수했으며 접근성 획득을 위한 세부 작업을 진행해 마크 획득을 마쳤습니다.<br>
                            <p>
                                기여도 100% (스크립트) / 15% (퍼블리싱)
                            </p>
                        </div>
                    </div>
                    <div class="page-content">
                        <div class='plugin'>
                            <div class='img'>
                                <img src="" alt="">
                            </div>
                            <div class='plugin-explane'>
                                <div class="title">
                                    다양한 플러그인
                                </div>
                                <div class="explane">
                                    스와이퍼, 스크롤 매직 등 다양한 라이브러리 / 플러그인을 활용해<br>
                                    크로스 브라우징 또는 반응형 작업 시 생기는 오류를 잡았습니다. <br>
                                    API 를 참고해 사용 방법을 숙지하고, 프로젝트에 맞게<br>
                                    확장하여 수월히 작업하였습니다.
                                </div>
                            </div>
                        </div>
                        <div class='script'>
                            <div class='img'>
                                <img src="" alt="">
                            </div>
                            <div class='script-explane'>
                                <div class="title">
                                    코드 모듈화 및 은닉
                                </div>
                                <div class="explane">
                                    코드 재사용을 위해 모듈화하여 data 에 저장 후<br>
                                    윈도우 리사이즈를 실행하거나 개발 시 쉽게 불러올 수 있도록<br>
                                    작성하였습니다. 또, 변수와 함수의 중복 선언을<br>
                                    막기 위해 코드를 은닉화하여 유지 보수가 수월합니다.
                                </div>
                            </div>
                        </div>
                        <div class='motion'>
                            <div class='img'>
                                <img src="" alt="">
                            </div>
                            <div class='motion-explane'>
                                <div class="title">
                                    모션 인터렉션
                                </div>
                                <div class="explane">
                                    디자이너와의 협업을 통해 원하는 모션을 구현했습니다.<br>
                                    주로 CSS 트랜지션, 키프레임을 적용한 클래스를 활용했으며<br>
                                    CSS 로 작업하기 까다로운 부분만 GSAP 를 사용해<br>
                                    무겁지 않게, 또 성능에 문제가 없도록 작업했습니다.
                                </div>
                            </div>
                        </div>
                        <div class='a11y'>
                            <div class='img'>
                                <img src="" alt="">
                            </div>
                            <div class='a11y-explane'>
                                <div class="title">
                                    웹 표준 준수 및 <br>
                                    접근성 마크 획득
                                </div>
                                <div class="explane">
                                    마크업을 선형화하고 시맨틱 태그를 사용하여 표준을 준수합니다.<br>
                                    그 이외의 필요한 부분들은 스크립트로 제어했습니다.<br>
                                    웹와치의 심사 기준에 맞춰 수정을 마친 뒤,<br>
                                    마크를 획득했습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <subFooter></subFooter>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import subFooter from '../component/sub-footer.vue';

    export default {
        components: { subFooter },

        mounted () {

        },
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
        background-color: rgb(116, 116, 116);
        color: #000;

        overflow-y: scroll;
    }

    .content-start {
        width: 100%; height: auto;
    }
    .page-explain{
        margin-top: 30%;
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
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1.3vw; line-height: 2;
    }
    .page-explain .explane p {
        margin-top: 1vw;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1vw;
    }

    .plugin, .script, .motion, .a11y { margin-top: 20vw; }

    .plugin:after, .motion:after, .script:after, .a11y:after{
        content:'';
        display:block;
        clear:both;
    }
    .plugin .img, .motion .img{
        float: left;
        margin-right: 8vw;
        width: 35vw; height: 35vw; background-color: #fff;
    }
    .script .img, .a11y .img{
        float: right;
        width: 35vw; height: 35vw; background-color: #fff;
    }

    .plugin .plugin-explane, .motion .motion-explane, .script .script-explane, .a11y .a11y-explane  {
        float: left;
    }

    .script .script-explane, .a11y .a11y-explane {
        margin-left: 5vw;
    }

    .plugin .plugin-explane .title, .motion .motion-explane .title, .script .script-explane .title, .a11y .a11y-explane .title {
        margin-top: 7vw;
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: 800; font-size: 2.5vw; line-height: 1.5;
    }
    .plugin .plugin-explane .explane, .motion .motion-explane .explane, .script .script-explane .explane, .a11y .a11y-explane .explane {
        margin-top: 3vw;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300; font-size: 1.3vw; line-height: 2;
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