<template>
    <section class="section-shop">
        <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">Shop</h2>
        </header>

        <div class="products">
            <product-component></product-component>
            <product-component></product-component>
        </div>
    </section>
</template>

<script>

import ProductComponent from './Product.vue'

export default {
    components: {ProductComponent}
}
</script>

<style lang="scss">

</style>