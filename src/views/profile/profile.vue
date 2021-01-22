<style src="./profile.scss" lang="scss"></style>
<script src="./profile.js" />

<template>
  <div id='profile' class='sub'>
    <div class="container">
        <div class='wrap'>
            <div class="sticky-area">
                <div class='page-explain'>
                    <div class='title'>{{ profileJson.title }}</div>
                    <div class='sub-title'>
                        {{ profileJson.subTitle.desc1 }} <br>
                        {{ profileJson.subTitle.desc2 }} <br>
                        {{ profileJson.subTitle.desc3 }} <br>
                        {{ profileJson.subTitle.desc4 }}
                    </div>
                </div>
            </div>
            <div class='page-content'>
                <div class="accordion">
                    <div class="sub-title">Information</div>
                    <div class="accordion-item">
                        <button 
                            class="acc-title"
                            type="button"
                            @click.stop='accordionController'
                        >
                        <div class="title-area">
                            <div class="tit">
                                {{ profileJson.information.title }} <span>{{ profileJson.information.subTitle }}</span>
                            </div>
                            <em class="ico01" aria-hidden="true"></em>
                            <em class="ico02" aria-hidden="true"></em>
                        </div>
                        </button>
                        <div class="acc-panel">
                            <div class="datatable-report">
                                <p>
                                    <!-- {{ profileJson.information.desc }} -->

                                    2년의 에이전시 재직 기간동안 다양한 경험을 했습니다.<br>
                                    <br>
                                    첫번째, Vue.js 기반의 프로젝트 경험을 했습니다.<br>
                                    vue 컴포넌트 생성 및 기능 제작, api 통신 json 값을 통한 vue dom 제어, vue 컴포넌트 간의 데이터 주고받아 활용하기,<br>
                                    상태 관리 라이브러리인 vuex 데이터 관리 등 기본적인 Vue.js 프로젝트 운용을 경험했습니다.<br>
                                    <br>
                                    두번째, typescript 의 기본을 경험 했습니다.<br>
                                    vue class component 작성, prop, component, mixin 등 데코레이터 사용, <br>
                                    get set 을 이용한 computed 사용 등 typescript 를 vue 프로젝트에서 활용할 수 있고<br>
                                    공통 class를 생성하여 모듈화된 class 에 extends 하여 사용하거나,<br>
                                    interface 를 활용해 사용자의 커스텀 값을 받아오는 등 기본적인 typescript 사용할 수 있습니다.<br>
                                    <br>
                                    세번째, javascript 의 다양한 활용입니다.<br>
                                    개발자의 쉬운 접근과 코드 재사용을 고려해 객체 지향 코드로 작성하여 코드를 모듈화,<br>
                                    성능을 고려한 리퀘스트 수를 줄이기위해 lazy-load 를 적용,<br>
                                    크로스 브라우징을 위한 디바이스 / 브라우저 별 분기 처리 등<br>
                                    프로젝트를 혼자서 전담하며 자바스크립트를 다양하게 활용 가능합니다.<br>
                                    <br>
                                    네번째, 적절한 라이브러리 사용입니다.<br>
                                    UI, UX 설계에서 나온 기능을 구현하기 위해 필요 시 라이브러리를 활용할 수 있습니다.<br>
                                    새로운 라이브러리라도 API 를 숙지해 사용하거나, 필요한 기능을 확장하여 사용할 수 있습니다.<br>
                                    또 성능에 문제가 되지 않도록 제어하며 사용하는 것을 경험했습니다.<br>
                                    <br>
                                    빠르게 발전하는 기술 속 뒤쳐지고싶지 않다는 욕심으로 여기까지 왔습니다.<br>
                                    <br>
                                    다양한 기술을 사용하는 프로젝트가 아니어도<br>
                                    프론트엔드 개발자로서 어떻게든 살아남기 위해서 그간 typescript, vue 등 습득해왔습니다.<br>
                                    <br>
                                    2년간의 에이전시 생활동안 사수도, 동료도 없이 회사 프로젝트의 스크립트를 도맡아왔습니다.<br>
                                    주로 브랜딩 사이트만 작업해온지라 다른 분들보다 조금 부족할 수 있습니다.<br>
                                    하지만 혼자 해내온 시간만큼 사소한 것 하나 지나치지 않고 집요하며, 새로운 환경을 두려워하지 않습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion resume-accordion">
                    <div class="sub-title">Resume</div>
                    <div class="accordion-item" v-for="( resumeList, index ) in profileJson.resume" :key="index">
                        <button 
                            class="acc-title" 
                            type="button"
                            @click.stop='accordionController'
                        >
                        <div class="title-area">
                            <div class="tit">
                                {{ resumeList.title }} <span>{{ resumeList.position }} / {{ resumeList.term }}</span>
                            </div>
                            <em class="ico01" aria-hidden="true"></em>
                            <em class="ico02" aria-hidden="true"></em>
                        </div>
                        </button>
                        <div class="acc-panel">
                            <div class="datatable-report">
                                <ul>
                                    <li v-for="( descList, index ) in resumeList.desc" :key="index"> {{ descList }} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubFooter 
                ref='subFooter'
                linkUrl='https://www.linkedin.com/in/%EC%86%8C%EC%9D%B4-%EA%B9%80-139476204/' 
                linkTitle='Download'
            />
        </div>
    </div>
  </div>
</template>