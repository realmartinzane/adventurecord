<template>
    <main>
        <section class="section-product">
            <secondary-header-component v-if="checkLoad == 2">Shop</secondary-header-component>
            <clip-loader v-if="checkLoad !== 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>
            <product-component v-if="checkLoad == 2" :fetchedProduct="fetchedProduct"></product-component>
        </section>
    </main>
</template>

<script>

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import ProductComponent from '../components/shop/Product.vue'
import SecondaryHeaderComponent from '../components/common/SecondaryHeader.vue'

export default {
    components: {ProductComponent, ClipLoader, SecondaryHeaderComponent},
    data(){return{
        id: this.$route.params.id,
    }},
    computed: 
    {
        checkLoad() {return this.$store.getters.getProductLoad},

        fetchedProduct() {return this.$store.getters.getProduct}
    },
    created()
    {
        this.fetchSingle()
    },
    methods: 
    {
        fetchSingle()
        {
            this.$store.dispatch('fetchProduct', {id: this.id});
        },
    }
}
</script>
