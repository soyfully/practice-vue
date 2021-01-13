<style src="./profile.scss" lang="scss"></style>
<script src="./profile.js" />

<template>
  <div id='profile' class='sub'>
    <div class="container">
        <div class='wrap'>
            <div class='page-explain'>
                <div class='title'>Profile</div>
                <div class='sub-title'>
                    JS / CSS 모션, 프레임워크 그리고 성능에 관심이 많습니다. <br>
                    또한 플러그인 / 라이브러리의 사용을 필요 외엔 최소화하기 위해<br>
                    JS 에 대한 이해와 기본기를 다지려 노력하고 있습니다.<br>
                    나아가 항상 새로운 시도를 할 수 있는 프론트엔드 개발자가 되고 싶습니다. <br>
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