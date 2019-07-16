<template>
    <div class="wrapper">
        <navigation-bar-two-component></navigation-bar-two-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
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
    .wrapper > *:nth-child(2)
    {
        background: #212127;
        min-height: calc(100% - 74px);
    }
</style>
