<template>
    <section class="section-shop">
        <clip-loader v-if=" productsLoad !== 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>
        <header class="u-center-text u-margin-bottom-lg" v-if="productsLoad == 2">
            <h2 class="heading-secondary">Shop</h2>
        </header>

        <div class="categories" v-if="productsLoad == 2">
            <input class="categories__radio" type="radio" name="category" id="category_1" checked><label for="category_1" class="categories__label" @click="filterProducts(0)">All</label>
            <input class="categories__radio" type="radio" name="category" id="category_2"><label for="category_2" class="categories__label" @click="filterProducts(1)">Membership</label>
            <input class="categories__radio" type="radio" name="category" id="category_3"><label for="category_3" class="categories__label" @click="filterProducts(2)">Special</label>
            <input class="categories__radio" type="radio" name="category" id="category_4"><label for="category_4" class="categories__label" @click="filterProducts(3)">Bundles</label>
            <input class="categories__radio" type="radio" name="category" id="category_5"><label for="category_5" class="categories__label" @click="filterProducts(4)">Themes</label>
        </div>

        <div class="products" v-if="productsLoad == 2">
            <product-component v-for="fetchedProduct in filteredProducts" :key="fetchedProduct.id" :fetchedProduct="fetchedProduct"></product-component>
        </div>
    </section>
</template>

<script>

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import ProductComponent from './Product.vue'

export default {
    components: {ProductComponent, ClipLoader},
    data(){return{
        filteredProducts: null
    }},
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
        async fetchAll()
        {
            await this.$store.dispatch('fetchProducts');
            this.filteredProducts = this.fetchedProducts
        },

        filterProducts(id)
        {
            if(id == 0) 
                this.filteredProducts = this.fetchedProducts
            else
                this.filteredProducts = this.fetchedProducts.filter(product => product.category_id == id)
        }
    }
}
</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';

    .section-shop {text-align: center;}
    .categories 
    {
        &__label 
        {
            margin: 0 2rem;
            font-size: 1.8rem;
            cursor: pointer;
            &:hover 
            {
                color: $color-primary;
            }
        }

        &__radio 
        {
            display: none;
        }
        
        &__radio:checked + &__label
        {
            color: $color-primary;
        }
    }
</style>