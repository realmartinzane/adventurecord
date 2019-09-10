<template>
    <section class="section-shop">
        <clip-loader v-if=" productsLoad !== 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>
        <secondary-header-component v-if="productsLoad == 2">Shop</secondary-header-component>

        <categories-component v-if="productsLoad == 2"></categories-component>

        <div class="products" v-if="productsLoad == 2">
            <product-component v-for="product in products" :key="product.id" :product="product"></product-component>
        </div>
    </section>
</template>

<script>

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import ProductComponent from './Product.vue'
import SecondaryHeaderComponent from '../common/SecondaryHeader.vue'
import CategoriesComponent from '../common/Categories.vue'

export default {
    components: {ProductComponent, ClipLoader, SecondaryHeaderComponent, CategoriesComponent},
    data(){return{
        filteredProducts: null
    }},
    computed: 
    {
        products() {return this.$store.getters.getProducts},
        
        productsLoad() {return this.$store.getters.getProductsLoad}
    },
    created()
    {
        this.fetchProducts()

    },
    methods:
    {
        async fetchProducts()
        {
            await this.$store.dispatch('fetchProducts');
            this.filteredProducts = this.products
        },

        filterProducts(id)
        {
            if(id == 0) 
                this.filteredProducts = this.products
            else
                this.filteredProducts = this.products.filter(product => product.category_id == id)
        }
    }
}
</script>

<style lang="scss">

    .section-shop {text-align: center;}
    
</style>