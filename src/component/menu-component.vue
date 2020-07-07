<template>
    <div class='menu-component'>
        <div class='menu_wrap'>
            <div class="menu-icon">
                <div class="icon">
                    <span class="line line-1"></span>
                    <span class="line line-2"></span>
                    <span class="line line-3"></span>
                </div>
            </div>
        </div>
        <div class="content-wrap">
            <div class='content'>
                <div class="content-icon">
                    <div class="icon">
                        <span class="line line-1"></span>
                        <span class="line line-2"></span>
                        <span class="line line-3"></span>
                    </div>
                </div>
                <div class="menu-list">
                    <div>This page is,</div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/profile">Profile</router-link>
                    <router-link to="/work">Works</router-link>
                </div>
                <div class="contact">
                    <div class="contact-list">
                        <div class="name">
                            KIM SOI
                        </div>
                        <div class="mail">
                            soyfully@gmail.com
                        </div>
                        <div class="phone">
                            +82 10-3799-1219
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        mounted () {
            menu.init();
        },
    }

    var menu = (function () {
        var openIcon, closeIcon, menuContent;
        var menuComp;

        function init () {
            openIcon = $('.menu_wrap .menu-icon');
            closeIcon = $('.content .content-icon')
            menuContent = $('.content');

            menuComp = $('.menu-component');

            menuComp.attr('_move', 'false');

            bindEvent();
        }

        function bindEvent () {
            openIcon.on('mouseenter', function () {
                openIcon.addClass('on');
            })

            openIcon.on('mouseleave', function () {
                openIcon.removeClass('on');
            })

            openIcon.on('click', function () {
                open();
            });

            closeIcon.on('click', function () {
                close();
            })

            $('.menu-list > a').on('click', function () {
                close();
            })
        }

        function open () {
            $('html, body').css('overflow','hidden').attr('_state','open');

            $('.sub, .main').removeClass('reverse').addClass('move');
            setTimeout(function () {
                $('.menu-component').addClass('open');
            }, 300)
            setTimeout(function () {
                menuContent.removeClass('close').addClass('open').css('display', 'block');
            }, 600)
        }

        function close () {
            $('html, body').css('overflow','visible').attr('_state','close');

            menuContent.removeClass('open').addClass('close');
            setTimeout(function () {
                $('.sub, .main').removeClass('move').addClass('reverse');
            }, 200)
            setTimeout(function () {
                $('.menu-component').removeClass('open');
            }, 600)

            menuContent.on("animationend", function(){
                if ($('html, body').attr('_state') == 'close') {
                    menuContent.css('display','none');
                }
            });
        }

        return {
            init : init,
            open : open,
            close : close
        }
    })();
</script>

<style scoped>
/* icon */
.menu_wrap{
    position: fixed; z-index: 2;
    right: 100px; top: 100px;
    width: 5vw; height: 5vw;
}
.menu-icon {
    width: 5vw; height: 5vw;
    cursor: pointer;
}
.icon .line {
    display: block; position: absolute;
    right: 0;
    width: 100%;
    height: 0.6vw;
    background: #fff;
    transition: 0.4s ease all
}
.menu-icon .icon .line.line-1 {top: 0; width: 50%}
.menu-icon .icon .line.line-2 {top: 25%; width: 80%}
.menu-icon .icon .line.line-3 {top: 50%; width: 60%}

.menu-icon.on .icon .line {width: 100%}

.content-icon {
    position: fixed; z-index: 2;
    right: 100px; top: 100px;
    width: 5vw; height: 5vw; overflow: hidden;
    cursor: pointer;
}
.content-icon .icon .line-1 {
  transform: translateY(334%) translateX(0) rotate(45deg);
  -webkit-transform: translateY(334%) translateX(0) rotate(45deg);
  -moz-transform: translateY(334%) translateX(0) rotate(45deg);
}
.content-icon .icon .line-2 {
  opacity: 0;
}
.content-icon .icon .line-3 {
  transform: translateY(334%) translateX(0) rotate(-45deg);
  -webkit-transform: translateY(334%) translateX(0) rotate(-45deg);
  -moz-transform: translateY(334%) translateX(0) rotate(-45deg);
}

/* menu content */
/* .content-wrap .bg {
    width: 100%; height: 100%;
    position: absolute;
    top: 0; left: 0;
    background: #fff;
    z-index: 5;
    display: none;
} */
.content {
    display: none;
    position: absolute; z-index: 15; box-sizing: border-box;
    top: 0%; left: 0; padding: 100px;
    width: 100%; height: 100%;
    background-color: rgb(107, 154, 180);
}
/* menu content > list */
.content .menu-list {
    position: relative;
    font-family: 'OPTIImprovNewWideNine'; font-size: 4.5vw;
}
.content .menu-list {}
.content .menu-list a {
    margin-right: 1vw; line-height: 2;
    transition: 0.4s all ease; opacity: 0.5;
}
.content .menu-list a:hover {
    opacity: 1; transition: 0.4s all ease;
}

.content .menu-list .router-link-exact-active {
    opacity: 1; transition: 0.4s all ease;
}
/* menu content > contect list */
.content .contact {
    position: absolute; box-sizing: border-box;
    display: flex; align-items: flex-end; justify-content: space-between;
    padding-left: inherit; padding-right: inherit; padding-bottom: inherit;
    bottom: 0; left: 0; right: 0;
    font-family: 'GothaProLig'; font-size: 1.5vw; line-height: 1.6
}
.content .contact .contact-list {}
/* menu content > sns list */
.content .contact .sns {display: flex; align-items: flex-end; justify-content: space-between; width: 160px;}
.content .contact .sns div {width: 60px; height: 60px; background-color: #fff;}
.content .contact .sns div img {width: 100%;}








.menu-component:after{content:''; display:block; position:absolute; bottom:0px; right:0px; z-index:10; width:100%; height:0%; background:#fff; transition: all 0.8s cubic-bezier(.4,.31,.19,1)}
.menu-component.open:after{height: 100%;}
.content.open {animation:detail_open_animate 1s forwards cubic-bezier(.66,0,.34,1); display: block;}
@keyframes detail_open_animate {
    0% {transform:translate(0,100%);}
    100% {transform:translate(0, 0%);}
}
.content.close {animation:detail_close_animate 1s forwards cubic-bezier(.66,0,.34,1); display: block;}
@keyframes detail_close_animate {
    0% {transform:translate(0, 0%);}
    100% {transform:translate(0, 100%);}
}


</style>