import $ from 'jquery'
import image from "../../assets/img/soynim.png"

export default {
    data: function () {
        return {
            image: image,
            url: 'https://velog.io/@soyfully',
            defaultColor: '#eab75b'
        }
    },
    mounted () {
        this.changeDefaultBackColor();
        
        if (this.$store.state.isInitMotionState) {

            return false;
        }
    },
    methods: {
        changeDefaultBackColor() {
            $('html, body').css('background-color', this.defaultColor);
        },
        startMotion () {

        },
        reversMotion () {

        }
    },
}