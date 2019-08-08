<template>
    <div class="container">
        <navigation-bar-desktop-component></navigation-bar-desktop-component>
    </div>
</template>

<script>
import NavigationBarDesktopComponent from './components/NavigationBarDesktop.vue'
export default {
    components:
    {
        NavigationBarDesktopComponent
    }
}
</script>

<style lang="scss">

@import '../sass/_mixins.scss';

/*
    .container-fluid {@include box-sizing(border-box)}
    .container-fluid > *:nth-child(3), .container-fluid > .updates
    {
        background: #212127;
        min-height: calc(100% - 74px);
    }
    .navbar-mobile 
    {
        @media screen and (min-width: 992px){display: none;}
    }
    .navbar-desktop
    {
        @media screen and (max-width: 991px){display: none;}
    }
*/
</style>
