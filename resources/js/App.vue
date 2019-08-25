<template>
    <div class="container">
        <navigation-bar-desktop-component></navigation-bar-desktop-component>
        <navigation-bar-mobile-component></navigation-bar-mobile-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavigationBarDesktopComponent from './components/NavigationBarDesktop.vue'
import NavigationBarMobileComponent from './components/NavigationBarMobile.vue'
import FooterComponent from './components/Footer.vue'

export default {
    created()
    {
        this.$store.dispatch('fetchAuthUser')
    },
    components:
    {
        NavigationBarDesktopComponent,
        NavigationBarMobileComponent,
        FooterComponent
    }
}
</script>

<style lang="scss">

    .navigation
    {
        @media screen and (max-width: 991px){display: none;}
    }

    .mobile-navigation 
    {
        @media screen and (min-width: 992px){display: none;}
    }
    
</style>
