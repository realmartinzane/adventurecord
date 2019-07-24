<template>
    <b-container fluid>
        <navigation-bar-desktop-component></navigation-bar-desktop-component>
        <navigation-bar-mobile-component></navigation-bar-mobile-component>
        <router-view></router-view>
        <updates-component v-if="$route.name == 'home'"></updates-component>
        <footer-component></footer-component>
    </b-container>
</template>

<script>
import NavigationBarDesktopComponent from './components/NavigationBarDesktop.vue'
import NavigationBarMobileComponent from './components/NavigationBarMobile.vue'
import UpdatesComponent from './components/Updates.vue'
import FooterComponent from './components/Footer.vue'
export default {
    components:
    {
        NavigationBarDesktopComponent,
        NavigationBarMobileComponent,
        UpdatesComponent,
        FooterComponent
    }
}
</script>

<style lang="scss" scoped>

@import '../sass/_mixins.scss';

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
</style>
