<template>
    <b-container fluid>
        <navigation-bar-component></navigation-bar-component>
        <navigation-bar-two-component></navigation-bar-two-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </b-container>
</template>

<script>
import NavigationBarComponent from './components/NavigationBar.vue'
import NavigationBarTwoComponent from './components/NavigationBarTwo.vue'
import FooterComponent from './components/Footer.vue'
export default {
    components:
    {
        NavigationBarComponent,
        NavigationBarTwoComponent,
        FooterComponent,
    }
}
</script>

<style lang="scss" scoped>
    .container-fluid > *:nth-child(3)
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
