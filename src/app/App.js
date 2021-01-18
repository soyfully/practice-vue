import MenuComponent from '../component/MenuComponent/MenuComponent.vue';
import ElifeComponent from '../component/ElifeComponent/ElifeComponent.vue';
import DongaComponent from '../component/DongaComponent/DongaComponent.vue';

export default {
    components: { MenuComponent , ElifeComponent, DongaComponent },
    mounted () {
        this.$store.commit('mutateInitMotionState', true);
    },
}