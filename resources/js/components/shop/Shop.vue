<template>
    <section class="section-shop">
        <clip-loader v-if=" productsLoad !== 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>
        <header class="u-center-text u-margin-bottom-lg" v-if="productsLoad == 2">
            <h2 class="heading-secondary">Shop</h2>
        </header>

        <div class="products" v-if="productsLoad == 2">
            <product-component v-for="fetchedProduct in fetchedProducts" :key="fetchedProduct.id" :fetchedProduct="fetchedProduct"></product-component>
        </div>
    </section>
</template>

<script>

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import ProductComponent from './Product.vue'

export default {
    components: {ProductComponent, ClipLoader},
    computed: 
    {
        fetchedProducts() {return this.$store.getters.getProducts},
        
        productsLoad() {return this.$store.getters.getProductsLoad}
    },
    created()
    {
        this.fetchAll()
    },
    methods:
    {
        fetchAll()
        {
            this.$store.dispatch('fetchProducts');
        }
    }
}
</script>

<style lang="scss">

</style>