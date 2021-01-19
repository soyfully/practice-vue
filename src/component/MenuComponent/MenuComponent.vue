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
                    <div class='title'>{{ menuJson.contact.title }}</div>
                    <div class='sub-title'>
                        <ul>
                            <li>{{menuJson.contact.phone}}</li>
                            <li>{{menuJson.contact.email}}</li>
                        </ul>
                        <ul>
                            <li>{{menuJson.contact.name}}</li>
                            <li>{{menuJson.contact.position}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>