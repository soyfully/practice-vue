import $ from 'jquery'

export default {
    data: function () {
        return {
            profileJson: this.$jsonLabel.profile,
            defaultColor: 'rgb(157 189 95)',
        }
    },
    mounted () {

    },
    methods: {
        menuOpener() {
            const menuContent = $('.content');

            $('.sub, .main').removeClass('reverse').addClass('move');
            setTimeout(function () {
                $('.menu-component').addClass('open');
            }, 300)
            setTimeout(function () {
                menuContent.removeClass('close').addClass('open').css('display', 'block');
            }, 600)
        },
        menuCloser() {
            const menuContent = $('.content');

            menuContent.removeClass('open').addClass('close');
            setTimeout(function () {
                $('.sub, .main').removeClass('move').addClass('reverse');
            }, 200)
            setTimeout(function () {
                $('.menu-component').removeClass('open');
            }, 600)
        },
    }
}

//         openIcon.on('mouseenter', function () {
//             openIcon.addClass('on');
//         })

//         openIcon.on('mouseleave', function () {
//             openIcon.removeClass('on');
//         })