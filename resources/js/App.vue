<template>
    <b-container fluid>
        <navigation-bar-two-component></navigation-bar-two-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </b-container>
</template>

<script>
import NavigationBarTwoComponent from './components/NavigationBarTwo.vue'
import FooterComponent from './components/Footer.vue'
export default {
    components:
    {
        NavigationBarTwoComponent,
        FooterComponent,
    }
}
</script>

<style lang="scss" scoped>
    .container-fluid > *:nth-child(2)
    {
        background: #212127;
        min-height: calc(100% - 74px);
    }
</style>
