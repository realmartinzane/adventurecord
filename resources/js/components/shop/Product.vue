<template>
    <div class="product">
        <div class="product__left">
            <img class="product__img" :src="'/img/products/' + fetchedProduct.image" alt="Theme Showcase Image">
            <div class="product__ribbon" v-if="fetchedProduct.category.name == 'Special'">
                Special
            </div>
        </div>
        <div class="product__right">
            <h3 class="product__name">{{ fetchedProduct.name }}</h3>
            <div class="product__description" v-html="description"></div>
            <p class="product__note" v-if="isShowRoute">Note: Once purchased, this item is non-refundable.</p>         
            
            <div class="product__footer">
                <div class="product__category"> {{ fetchedProduct.category.name }}</div>
                <div class="product__purchase">
                    <div class="product__price">{{ fetchedProduct.price }}</div
                    ><button v-if="isShowRoute" class="btn btn--secondary-gold product__button">Purchase</button>
                    <router-link v-else class="product__button btn btn--secondary-gold" :to="{name: 'products.show', params: {id: fetchedProduct.id}}" >View Product</router-link>
                </div>
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

        description() {return !this.isShowRoute ? (this.fetchedProduct.description_html.length < 250 ? this.fetchedProduct.description_html : this.fetchedProduct.description_html.substring(0,250) + "...") : this.fetchedProduct.description_html},
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
            position: relative;
            overflow: hidden;

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
            background: $color-secondary-dark;
        }

        &__ribbon
        {
            position: absolute;
            top: 5rem;
            left: 5rem  ;
            transform: translate(-50%, -50%) rotate(-45deg);
            width: 20rem;
            background-color: $color-red;
            color: $color-white;
            text-transform: uppercase;
            text-align: center;
            font-size: 2rem;
            letter-spacing: 2px;
            padding: .5rem 0;
            border-top: 2px solid $color-white;
            border-bottom: 2px solid $color-white;
            outline: 4px solid $color-red;
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

        &__note 
        {
            color: $color-primary;
            display: block;
        }

        &__footer 
        {
            height: 4rem;
            text-align: center;

            @media only screen and (max-width: 44.375em) 
            {
                height: auto;
                margin: 1rem 0;
            }
        }

        &__category 
        {
            position: absolute;
            bottom: 2rem;
            left: 31.5rem;
            border: 1px solid $color-primary-dark;
            border-radius: 20px;
            padding: 0 1rem;
            text-transform: uppercase;
            font-size: 1.2rem;
            color: $color-primary-dark;
            letter-spacing: 1px;
            vertical-align: bottom;
            
            @media only screen and (max-width: 44.375em) 
            {
                position: static;
                margin: 1rem auto;
                display: inline-block;
            }
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