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
        <MenuComponent></MenuComponent>
        <router-view/>
        <popupComp></popupComp>
        <!-- <div class="dimm"></div> -->
    </div>
</template>

<script>
    import MenuComponent from './component/menu-component.vue';
    import popupComp from './component/popup-comp.vue';

    export default {
        components: { MenuComponent , popupComp},

        // data () {
        //   return {
        //     title: 'app.vue',
        //   }
        // },
    }


    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
        alert('본 사이트는 크롬 및 기타 브라우저(파이어폭스, 사파리, 엣지)에 최적화 되어있습니다!')
        // ie일 경우
    }else{
        console.log('other')
        // ie가 아닐 경우
    }
</script>

<style>
    .dimm {
        position: absolute; top: 0; z-index: 5; display: none;
        width: 100%; height: 100%; background: #000; opacity: 0.8;
    }
</style>
