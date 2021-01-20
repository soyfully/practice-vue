<style src="./App.scss" lang="scss"></style>
<script src="./App.js" />

<template>
    <div id="app">
        <MenuComponent />
        <router-view />
        <GenesisComponent />
        <ElifeComponent ref='eLife'/>
        <DongaComponent ref='dongA'/>
        <pluginComponent />
    </div>
</template>