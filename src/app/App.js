import MenuComponent from '../component/MenuComponent/MenuComponent.vue';
import GenesisComponent from '../component/GenesisComponent/GenesisComponent.vue';
import ElifeComponent from '../component/ElifeComponent/ElifeComponent.vue';
import DongaComponent from '../component/DongaComponent/DongaComponent.vue';
import pluginComponent from '../component/pluginComponent/pluginComponent.vue';

export default {
    components: { MenuComponent , GenesisComponent, ElifeComponent, DongaComponent, pluginComponent },
    data: function () {
        return {

        }
    },
    mounted () {
        this.$store.commit('mutateInitMotionState', true);
    },
}