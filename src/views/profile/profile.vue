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
                                <!-- <div class="img">

                                </div>
                                <div class="text">
                                   
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion">
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
                linkTitle='Go to Linkedin'
            />
        </div>
    </div>
  </div>
</template>