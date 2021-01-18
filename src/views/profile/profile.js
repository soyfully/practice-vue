import $ from 'jquery'
import SubFooter from '../../component/SubFooter/SubFooter.vue'

export default {
    components: { SubFooter },

    data: function () {
        return {
            profileJson: this.$jsonLabel.profile,
            defaultColor: 'rgb(157 189 95)',
        }
    },
    created() {
        this.$store.commit('mutateCurrentRouter', 'profile');
    },
    mounted () {
        this.changeDefaultBackColor();
        if (this.$store.state.isInitMotionState) {

            // return false;
        }
    },
    methods: {
        changeDefaultBackColor() {
            $('html, body').css('background-color', this.defaultColor);
        },
        openFirstAccordionList() {

        },
        accordionController(event) {
            const accordionBtn = $(event.currentTarget);
            const accordionDesc = accordionBtn.next('.acc-panel');

            if (accordionBtn.hasClass('on')) {
                accordionBtn.removeClass('on');
                accordionDesc.slideUp(350);
            } else {
                accordionBtn.addClass('on');
                accordionDesc.slideDown(350);
            }
        }
    },
}