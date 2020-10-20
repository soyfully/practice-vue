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
                        <div class='title'>DongA Pharm OTC Brand Website</div>
                        <div class='sub-title'>
                            동아제약 OTC 통합 브랜드 사이트 구축
                        </div>
                        <div class='explane'>
                            모든 페이지의 스크립트 작성, 그리고 모션에 관련된 마크업을 진행했습니다. 반응형 웹 프로젝트로 진행이 되었고, 리사이징 시 나타날 수 있는 오류에 많은 신경을 썼습니다. 또, 기본적인 웹 접근성을 준수했습니다.<br>
                            <p>
                                기여도 100% (스크립트) / 20% (퍼블리싱)
                            </p>
                        </div>
                    </div>
                    <div class="page-content">
                        <div class='content-section full-position'>
                            <div class='img-cont'>
                                <div class="img-wrap">
                                    <!-- <img :src="eLife01" /> -->
                                </div>
                                <div class="view-all-code">
                                    + 전체 소스 보기
                                </div>
                            </div>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        코드 재사용을 위한 모듈화
                                    </div>
                                    <div class="explane">
                                        같은 기능, 다른 UI, 또한 반응형 웹이었기에 그에 대응하기 위해 코드를 기능 별로 모듈화하였습니다.
                                        custom data 를 활용해 각 요소의 인덱스를 정의하거나, 이벤트 바인딩 시 다양한 함수를 실행해야 하는 등 까다로운 조건들이 많았기에
                                        모든 함수의 셀렉터, 인덱스 등 가변적 요소들은 파라미터를 받아와 실행하도록 작성했습니다.
                                        계획적으로 모듈화한 코드 덕에 오류 대응, 또는 리사이징 시 재실행 같은 반응형 코드 작성이 수월했습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='content-section full-position'>
                            <div class='img-cont'>
                                <div class="img-wrap">
                                    <!-- <img :src="eLife01" /> -->
                                </div>
                            </div>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        문제 해결을 위한 플러그인 활용
                                    </div>
                                    <div class="explane">
                                        프로젝트를 진행 중 겪은 시행착오를 해결하면서 배우게 된 것들이 많습니다.
                                        반응형에서 빼놓을 수 없는 resize, scroll 이벤트의 중첩은 boolean check 으로 쉽게 방지할 수 있었지만,
                                        mousewheel 중첩은 수많은 오류를 야기했고 깔끔한 해결을 위해 여러 방법을 적용해보며 진행하던 중
                                        Lodash.js 의 debounce 를 활용해 문제를 해결하였습니다.
                                        코드의 가독성 및 빠른 작업이 가능하고
                                        npm 을 사용해 필요한 함수만 커스텀 하여 빌드 할 수 있으니 리소스를 불러올 때에 발생할 성능 이슈에도 문제가 없습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='content-section full-position'>
                            <div class='img-cont'>
                                <div class="img-wrap">
                                    <!-- <img :src="eLife01" /> -->
                                </div>
                                <div class="view-all-code">
                                    + 전체 소스 보기
                                </div>
                            </div>
                            <div class='txt-container'>
                                <div class="txt-wrap">
                                    <div class="title">
                                        기획에 충실한 코드 작성
                                    </div>
                                    <div class="explane">
                                        리스트 외에 다른 곳에서 스크롤을 하더라도 리스트가 움직일 수 있게, 또 액티브 된 리스트는 상단에 위치할 수 있도록.
                                        이 요건을 위해 수 많은 시행 착오를 경험했습니다. 그 중 최선책으로
                                        swiper.js 를 사용하여 액티브 요소를 상단에 맞추는 것부터 시작으로
                                        리스트와 그에 맞춰 바뀔 요소들의 인덱스 정의 및 모션 함수를 작성 후,
                                        액티브 된 리스트의 인덱스를 받아와 필요한 함수에 적용해 재실행합니다.
                                        mousewheel 이벤트를 활용해 스크롤 방향을 체크 후, 그 어디서 스크롤 하여도 swiper 를 상/하로 자유롭게 움직일 수 있게 제작하였습니다.
                                        또한, mouseenter 시에도 같은 기능이 작동해야 하므로 모듈화된 함수를 해당 이벤트 발생 시 실행합니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <subFooter _url='http://uxdev.etribe.co.kr/donga/html/main/main.html' _message='Go to site'></subFooter>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import subFooter from '../component/sub-footer.vue';
    import eLife01 from "../assets/img/e-life-01.svg"
    import eLife02 from "../assets/img/e-life-02.svg"
    import eLife03 from "../assets/img/e-life-03.svg"
    import eLife04 from "../assets/img/e-life-04.svg"

    export default {
        data: function () {
            return {
                eLife01 : eLife01,
                eLife02 : eLife02,
                eLife03 : eLife03,
                eLife04 : eLife04,
            }
        },
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