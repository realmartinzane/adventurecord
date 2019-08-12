<template>
    <div class="container">
        <navigation-bar-desktop-component></navigation-bar-desktop-component>
        <navigation-bar-mobile-component></navigation-bar-mobile-component>
        <main>
            <router-view></router-view>
        </main>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavigationBarDesktopComponent from './components/NavigationBarDesktop.vue'
import NavigationBarMobileComponent from './components/NavigationBarMobile.vue'
import FooterComponent from './components/Footer.vue'

export default {
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
