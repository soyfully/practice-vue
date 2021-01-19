import $ from 'jquery'
import Swiper from 'swiper/js/swiper.esm.bundle'

export default {
    data: function () {
        return {
            workJson: this.$jsonLabel.work,
        }
    },
    mounted () {
        this.changeDefaultBackColor();
        this.setSwiper();
    },
    methods: {
        changeDefaultBackColor() {
            $('html, body').css('background-color', 'lightsteelblue');
        },
        setSwiper() {
            setTimeout(function () {
                new Swiper ('.swiper-container', {
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    mousewheel: true,
                    grabCursor: true,
                    freeMode: true,
                    freeModeSticky: true,
                    slidesPerView: 'auto',
                })
            }, 0)
        },
        openTargetModal() {

        }
    },
}