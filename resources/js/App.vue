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
