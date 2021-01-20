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