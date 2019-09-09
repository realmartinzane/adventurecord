<template>
    <main>
        <section class="section-product">
            <header class="u-center-text u-margin-bottom-lg">
                <h2 class="heading-secondary">Product</h2>
            </header>
            <product-component></product-component>
        </section>
    </main>
</template>

<script>

import ProductComponent from '../components/shop/Product.vue';

export default {
    components: {ProductComponent}
}
</script>
