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
        <elifeComp></elifeComp>
        <dongaComp></dongaComp>
    </div>
</template>

<script>
    import MenuComponent from './component/menu-component.vue';
    import elifeComp from './component/elife-comp.vue';
    import dongaComp from './component/donga-comp.vue';

    export default {
        components: { MenuComponent , elifeComp, dongaComp},
        mounted () {
            this.$store.commit('mutateInitMotionState', true);
        },
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
