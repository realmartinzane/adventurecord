<template>
    <div class="product">
        <div class="product__left">
            <img class="product__img" src="/img/themes/lord_grim_medieval.png" alt="Theme Showcase Image">
        </div>
        <div class="product__right">
            <h3 class="product__name">{{ fetchedProduct.name }}</h3>
            <p class="product__description">{{ fetchedProduct.description }}</p>           
            <div class="product__purchase">
                <div class="product__price">{{ fetchedProduct.price }}</div
                ><button v-if="isShowRoute" class="btn btn--secondary-gold product__button">Purchase</button>
                <router-link v-else class="product__button btn btn--secondary-gold" :to="{name: 'products.show', params: {id: fetchedProduct.id}}" >View Product</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['fetchedProduct'],
    computed: 
    {
        isShowRoute() {return this.$route.name == 'products.show'},

        // description() {return this.fetchedProduct.description_html.length < 250 ? this.fetchedProduct.description_html : this.fetchedProduct.description_html.substring(0,250) + "..."},
    },
}
</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';

    .product
    {
        background: $color-secondary-light;
        border: 1px solid $color-border-dark;
        border-radius: 3px;
        line-height: 1;
        box-shadow: 0 0 10px $color-black;
        position: relative;
        margin: 2.5rem auto;

        @media only screen and (max-width: 44.375em)
        {
            width: calc(49% - 1rem);
            display: inline-block;
            margin: 2.5rem .5rem;
        }

        @media only screen and (max-width: 30rem)
        {
            width: 34rem;
            display: block;
            margin: 2.5rem auto;
        }

        &__left 
        {
            width: 30rem;
            display: inline-block;

            @media only screen and (max-width: 44.375em)
            {
                width: 100%;
            }
        }

        &__img 
        {
            width: 100%;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        &__right 
        {
            line-height: 1.7;
            width: calc(100% - 30.5rem);
            display: inline-block;
            vertical-align: top;
            padding: 1.5rem;

            @media only screen and (max-width: 44.375em)
            {
                width: 100%;
            }
        }

        &__description
        {
            color: $color-gray-light;
        }

        &__purchase 
        {
            position: absolute;
            bottom: 1.5rem;
            right: 1.5rem;

            @media only screen and (max-width: 44.375em)
            {
                position: static;
                text-align: center;
                margin-top: 2rem;
            }
        }

        &__price 
        {
            text-align: center;
            border: 1px solid $color-primary-dark;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            border-right: none;
            display: inline-block;
            height: 3.4rem;
            padding: 0 .8rem;
            font-size: 1.8rem;
            line-height: 3.4rem;
            vertical-align: top;
            
        }
        
        &__button 
        {
            text-align: center;
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
            display: inline-block;
            height: 3.4rem;
            line-height: 1;
            vertical-align: top;

        }
    }

</style>