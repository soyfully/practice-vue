<style src="./home.scss" lang="scss"></style>
<script src="./home.js" />

<template>
    <div id='main' class='main'>
        <div class="container">
            <div class="wrap">
                <div class='top_txt'>
                Hello, I'm
                <span style='display:inline-block' class='ani'>Soi Kim.</span>
                </div>
                <div class="bottom_txt">
                    <span class='ani'> Front-end developer,</span>
                    and interested in <br>
                    interaction with <span style='display:inline-block' class='ani'>JS</span> <br>
                    and <span style='display:inline-block' class='ani'>framework.</span>
                    <div class='copyrigth'>
                        ⓒ 2020. KIM SOI All Rights Reserved.
                    </div>
                </div>
                <div class="study-icon">
                    <a class="go" role='button' v-bind:href="url" target="_blank">G O</a>
                    <img class="turn" :src="image" />
                </div>
            </div>

        </div>
    </div>
</template>