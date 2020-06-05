<template>
    <div id='footer'>
        <div class="sub-footer">
            <a class="back" role='button' v-bind:href="_url">
            <!-- <button class="back" role='button' v-on:click="reset"> -->
                <div class="icon">
                    <em style=""></em>
                    <em style=""></em>
                </div>
                <div class="txt">Go to Site</div>
            </a>
        </div>
    </div>
</template>

<script>
    // import $ from 'jquery'

    export default {
        props: {
            _url: { type: String, default: '' }
        },
        methods: {
            // reset : function () {
            //     $('html, body').attr('_back', 'true');
            // }
        },
    }
</script>

<style scoped>
    #footer {float: right; margin-top: 100px}
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
</style>