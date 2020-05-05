<template>
    <div id='footer'>
        <div class="sub-footer">
            <button class="back" role='button'>
            <!-- <button class="back" role='button' v-on:click="reset"> -->
                <div class="icon">
                    <em style=""></em>
                    <em style=""></em>
                </div>
                <div class="txt">Download</div>
            </button>
        </div>
    </div>
</template>

<script>
    // import $ from 'jquery'

    export default {
        methods: {
            // reset : function () {
            //     $('html, body').attr('_back', 'true');
            // }
        },
    }
</script>

<style scoped>
    #footer {float: right; margin-bottom: 100px}
    .sub-footer {display: flex; align-items: flex-end; justify-content: space-between;}
    .sub-footer button {font-family: 'OPTIImprovNewWideNine'; font-size: 2.5vw; color: #fff; cursor: pointer;}
    .back .icon {
        position: absolute;
    }
    .back em {
        display: block; background-color: #fff;
    }
    .back em:first-child {
        position: relative; top: 1.6vw; transform: rotate(150deg); width: 2.5vw; height: 0.6vw;
    }
    .back em:last-child {
        width: 8vw; height: 0.6vw; margin-top: 1.7vw;
    }
    .back .txt {
        margin-left: 10vw;
    }
</style>