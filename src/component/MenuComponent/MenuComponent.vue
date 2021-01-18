<style src="./MenuComponent.scss" lang="scss"></style>
<script src="./MenuComponent.js" />

<template>
    <div class='menu-component'>
        <div class='menu_wrap'>
            <div 
                class="menu-icon"
                type="button"
                @click="menuOpener"
            >
                <div class="icon">
                    <span class="line line-1"></span>
                    <span class="line line-2"></span>
                    <span class="line line-3"></span>
                </div>
            </div>
        </div>
        <div class="content-wrap">
            <div class='content'>
                <div 
                    class="content-icon"
                    type="button"
                    @click="menuCloser"
                >
                    <div class="icon">
                        <span class="line line-1"></span>
                        <span class="line line-2"></span>
                        <span class="line line-3"></span>
                    </div>
                </div>
                <div class="menu-list">
                    <div>This page is,</div>
                    <router-link to="/" >Home</router-link>
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