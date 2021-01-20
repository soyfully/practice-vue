<style src="./work.scss" lang="scss"></style>
<script src="./work.js" />

<template>
    <div id='works' class='sub' data-name='dd'>
        <div class="container">
            <div class="wrap">
                <div class='page-explain'>
                    <div class='title'>{{ workJson.title }}</div>
                    <div class='sub-title'>
                        {{ workJson.subTitle.desc1 }} <br>
                        {{ workJson.subTitle.desc2 }} <br>
                        {{ workJson.subTitle.desc3 }} <br>
                        {{ workJson.subTitle.desc4 }}
                    </div>
                </div>
                <div class='page-content'>
                    <div class='works-list'>
                        <div class="sub-title">
                            <div class="sub-title-name">In the company</div>
                            <div class="sub-title-scroll">
                                <div class="icon">
                                    <em style=""></em>
                                    <em style=""></em>
                                </div>
                            </div>
                        </div>
                        <div class="list-wrap swiper-container">
                            <div class="wrap swiper-wrapper">
                                <div class="list swiper-slide" v-for="( list, index ) in workJson.workList" :key="index" @click.stop='openTargetModal(list.component)'>
                                    <div class="list-title">
                                        {{ list.title }}
                                        <span>{{ list.subTitle }}</span>
                                    </div>
                                    <div class="list-content">
                                        <div v-for="( skill, index ) in list.skill" :key="index">{{ skill }} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>