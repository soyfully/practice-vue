<template>
    <div id='footer'>
        <div class="sub-footer">
            <a class="back" role='button' v-bind:href="linkUrl" target="_blank">
                <div class="icon">
                    <em style=""></em>
                    <em style=""></em>
                </div>
                <div class="txt">{{ linkTitle }}</div>
            </a>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        props: {
            linkUrl: { 
                type: String, 
                default: '' 
            },
            linkTitle : { 
                type: String, 
                default: '' 
            }

        },
        methods: {

        },
        mounted () {
            if (this.$store.state.isCurrentRouter == 'profile') {
                this.$el.classList.add('is-profile');
                $('#footer').addClass('profile-ver')
            } else {
                this.$el.classList.remove('is-profile');
                $('#footer').removeClass('profile-ver')
            }
        },
    }
</script>

<style scoped>
    #footer {
        float: right;
    }
    #footer.is-profile .sub-footer a, #footer.is-profile .back .txt  {
        color: #fff; 
    }
    #footer.is-profile .back em {
        background-color: #fff;
    }
    .sub-footer {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .sub-footer a {
        font-family: 'OPTIImprovNewWideNine'; 
        font-size: 2.5vw; 
        color: #000; 
        cursor: pointer;
    }
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