<style>
    body, html {height: 100%; width: 100%; box-sizing: border-box; color: #fff; } /** background-color: lightsteelblue; */
    a {text-decoration:none; color: #fff}
    #app {height: 100%;}

    .move {animation:detail_move_animate 1.5s forwards cubic-bezier(.66,0,.34,1);}
    @keyframes detail_move_animate {
        0% {transform:translate(0, 0);}
        100% {transform:translate(0, -50%);}
    }
    .reverse {animation:detail_reverse_animate 1.5s forwards cubic-bezier(.66,0,.34,1);}
    @keyframes detail_reverse_animate {
        0% {transform:translate(0, -50%);}
        100% {transform:translate(0, 0%);}
    }
</style>

<template>
    <div id="app">
        <!-- <vue-progress-bar></vue-progress-bar> -->
        <MenuComponent></MenuComponent>
        <router-view/>
        <!-- <lgComp></lgComp> -->
        <elifeComp></elifeComp>
    </div>
</template>

<script>
    import MenuComponent from './component/menu-component.vue';
    // import lgComp from './component/lg-comp.vue';
    import elifeComp from './component/elife-comp.vue';

    export default {
        components: { MenuComponent , elifeComp},

        // created () {
        //     // App.vue가 처음로드되면 진행률 표시 줄을 시작합니다
        //     this.$Progress.start();

        //     // router-view를 이동하기 전에 진행률 표시 줄을 시작합니다.
        //     this.$router.beforeEach((to, from, next) => {
        //         //  Meta.progress 객체를 가지려고하는 페이지를 수행합니까?
        //         if (to.meta.progress !== undefined) {
        //             let meta = to.meta.progress
        //             // 메타 태그 구문 분석
        //             this.$Progress.parseMeta(meta)
        //         }
        //         // 진행률 표시 줄을 시작합니다
        //         this.$Progress.start()
        //         // 다음 페이지로 계속
        //         next();
        //     })

        //     // router-view 이동을 완료 한 후 진행률 표시 줄을 연결하여 완료
        //     this.$router.afterEach(() => {
        //         // 진행률 표시 줄을 마무리합니다
        //         this.$Progress.finish()
        //     })
        // },
        // mounted () {
        //     // App.vue의로드가 완료되면 진행률 표시 줄이 완료됩니다.
        //     this.$Progress.finish();
        // },
    }


    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
        alert('본 사이트는 크롬 및 기타 브라우저(파이어폭스, 사파리, 엣지)에 최적화 되어있습니다!')
        // ie일 경우
    }else{
        // console.log('other')
        // ie가 아닐 경우
    }
</script>

<style>
    body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    .dimm {
        position: absolute; top: 0; z-index: 5; display: none;
        width: 100%; height: 100%; background: #000; opacity: 0.8;
    }
</style>
