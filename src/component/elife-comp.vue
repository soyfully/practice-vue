<template>
    <div class='popup-component' id='elife'>
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
                        <div class='title'>Daelim e-life Website Renewer</div>
                        <div class='sub-title'>
                            대림 이편한세상 브랜드 웹사이트 리뉴얼
                        </div>
                        <div class='explane'>
                            모든 페이지의 스크립트 작성, 그리고 모션에 관련된 마크업을 진행했습니다. 개발과의 협업이 중요한 프로젝트였기에 코드를 재사용할 수 있도록 신경 써 작성했습니다. 필요에 따라 플러그인을 활용했습니다. 또, 기본적인 웹 접근성을 준수했습니다.<br>
                            <p>
                                기여도 100% (스크립트) / 15% (퍼블리싱)
                            </p>
                        </div>
                    </div>
                    <div class="page-content">
                        <div class='content-section left-position'>
                            <div class='img'>
                                <img src="" alt="">
                            </div>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        개발 협업을 위한 코드 작성
                                    </div>
                                    <div class="explane">
                                        개발이 붙는 과정에서 스크립트 함수 재사용이 빈번하다는 것을 경험하고,
                                        언제든 활용할 수 있도록 모듈화하여 필요시 전역으로 선언된 개발자 전용 함수에 실행하여 사용합니다.
                                        또, 변수와 함수의 중복 선언을 막기 위해 코드를 은닉화하여 유지 보수가 수월합니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='content-section right-position'>
                            <div class='img'>
                                <img src="" alt="">
                            </div>
                            <div class='txt-container'>
                                <div class="txt-wrap">
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
                        </div>
                        <div class='content-section left-position'>
                            <div class='img'>
                                <img src="" alt="">
                            </div>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        성능을 위한 다양한 시도
                                    </div>
                                    <div class="explane">
                                        리퀘스트, 리소스가 많으면 초기 화면 로딩이 느릴 수 있다는 것을 경험했습니다.
                                        리퀘스트 수를 줄이기 위해 이미지는 최초에 더미 이미지를 활용,
                                        추후 해당 영역 도달 시 이미지를 교체하는 등 lazy-load 를 사용하여
                                        리퀘스트를 최소한으로 줄였습니다.
                                        또, 플러그인을 하나의 파일로 한데 모아 js 호출 리퀘스트를 줄였으며,
                                        스와이퍼와 같은 플러그인도 해당 영역 도달 시 실행하여 속도 이슈의 문제를 해결해나갔습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='content-section right-position'>
                            <div class='img'>
                                <img src="" alt="">
                            </div>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        다양한 플러그인
                                    </div>
                                    <div class="explane">
                                        Lotti Bodymovin,  scrollMagic 등 다양한 플러그인을 활용해<br>
                                        크로스 브라우징 또는 반응형 작업 시 생기는 오류를 잡았습니다. <br>
                                        API 를 참고해 사용 방법을 숙지하고, 프로젝트에 맞게<br>
                                        확장하여 수월히 작업하였습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <subFooter _url='https://www.elife.co.kr/Mnmn_main.action' _message='Go to site'></subFooter>
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
    .page-content{
        margin-bottom: 100px
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
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1.3vw; line-height: 2; word-break:keep-all;
    }
    .page-explain .explane p {
        margin-top: 1vw;
        font-family: 'Noto Sans KR', sans-serif; font-weight: 300; font-size: 1vw;
    }

    .content-section { margin-top: 20vw; height: 35vw;}
    .content-section:after{
        content:'';
        display:block;
        clear:both;
    }
    .content-section .txt-container {
        position: relative;
        float: left;
        width: 35vw;
        height: 100%;
    }
    .content-section .title {
        /* margin-top: 7vw; */
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: 800; font-size: 2.5vw; line-height: 1.5;
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
    .content-section.left-position .img{
        float: left;
        margin-right: 8vw;
        width: 35vw; height: 35vw; background-color: #fff;
    }
    .content-section.right-position .img{
        float: right;
        width: 35vw; height: 35vw; background-color: #fff;
    }
    .content-section.right-position .txt-container {
        margin-left: 5vw;
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