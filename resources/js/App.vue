<template>
    <div class="container">
        <navigation-bar-desktop-component></navigation-bar-desktop-component>
        <navigation-bar-mobile-component></navigation-bar-mobile-component>
        <router-view :key="$route.fullPath"></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavigationBarDesktopComponent from './components/global/NavigationBarDesktop.vue'
import NavigationBarMobileComponent from './components/global/NavigationBarMobile.vue'
import FooterComponent from './components/global/Footer.vue'

export default {
    components:
    {
        NavigationBarDesktopComponent,
        NavigationBarMobileComponent,
        FooterComponent
    },
    created()
    {
        this.fetchAuthUser()
    },
    methods:
    {
        fetchAuthUser()
        {
            this.$store.dispatch('fetchAuthUser')
        }
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
