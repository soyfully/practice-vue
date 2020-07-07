<template>
    <div id='footer'>
        <div class="sub-footer">
            <a class="back" role='button' v-bind:href="_url" target="_blank">
                <div class="icon">
                    <em style=""></em>
                    <em style=""></em>
                </div>
                <div class="txt">{{ _message }}</div>
            </a>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        props: {
            _url: { type: String, default: '' },
            _message : { type: String, default: '' }

        },
        methods: {

        },
        mounted () {
            if ($('html, body').hasClass('profile')) {
                $('#footer').addClass('profile-ver');
            }
        },
    }
</script>

<style scoped>
    #footer {float: right;}
    .sub-footer {display: flex; align-items: flex-end; justify-content: space-between;}
    .sub-footer a {font-family: 'OPTIImprovNewWideNine'; font-size: 2.5vw; color: #000; cursor: pointer;}
    .back .icon {
        position: relative;
    }
    .back em {
        position: absolute;
        display: block; background-color: #000;
    }
    .back em:first-child {
        position: relative; top: 1.6vw; transform: rotate(150deg); width: 2.5vw; height: 0.6vw;
    }
    .back em:last-child {
        width: 8vw; height: 0.6vw; margin-top: 1.7vw;
    }
    .back .txt {
        margin-left: 10vw; color: #000;
    }

    #footer.profile-ver {margin-bottom: 100px}
    #footer.profile-ver .back em {background-color: #fff;}
    #footer.profile-ver .back .txt {color: #fff;}
</style>