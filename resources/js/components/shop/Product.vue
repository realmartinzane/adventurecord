<template>
    <div class="product">
        <div class="product__left">
            <img class="product__img" :src="'/img/products/' + product.image" alt="Theme Showcase Image">
            <div class="product__ribbon" v-if="product.category.name == 'Special'">
                Special
            </div>
        </div>
        <div class="product__right">
            <h3 class="product__name">{{ product.name }}</h3>

            <div v-if="isShowRoute" v-html="product.description_html" class="product__description"></div>
            <div v-else v-html="description" class="product__description"></div>
            
            <p class="product__note" v-if="isShowRoute">Note: Once purchased, this item is non-refundable.</p>         
            
            <div class="product__footer">
                <div class="product__category"> {{ product.category.name }}</div>
                <div class="product__purchase">
                    <div class="product__price--show" v-if="(isShowRoute && authUser ? true : false)">&dollar;{{ product.price }}</div
                    ><div class="product__price" v-else>&dollar;{{ product.price }}</div
                    ><div v-if="(isShowRoute && authUser ? true : false)" id="paypal-button"></div
                    ><router-link v-else-if="!isShowRoute" class="product__button btn btn--secondary-gold" :to="{name: 'products.show', params: {id: product.id}}" >View Product</router-link
                    ><a href="/login/discord" v-else class="product__button btn btn--secondary-gold">Log in to purchase</a>
                </div>
            </div>
        </div>

        <popup-component v-show="showSuccessModal">
            <div class="popup__content">
                <header class="popup__header">
                    <h4 class="popup__header-text">Purchase Successful!</h4>
                    <button @click="showSuccessModal = false" class="popup__close">
                        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                    </button>
                </header>

                <div class="popup__body">
                    <p class="popup__question">
                        Your purchase was successful! 
                        <br>
                        Thank you for supporting Adventure Cord.
                    </p>
                </div>

                <footer class="popup__footer popup__footer--prompt">
                    <button class="btn btn--secondary-gold popup__purchase" @click="showSuccessModal = false">Ok</button>
                </footer>
            </div>
        </popup-component>

        <popup-component v-show="showErrorModal">
            <div class="popup__content">
                <header class="popup__header">
                    <h4 class="popup__header-text">Purchase Failed!</h4>
                    <button @click="showErrorModal = false" class="popup__close">
                        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                    </button>
                </header>

                <div class="popup__body">
                    <p class="popup__question">
                        There was an error executing the payment. Please try again later
                        <br>
                        Make sure to contact us if this error persists.
                    </p>
                </div>

                <footer class="popup__footer popup__footer--prompt">
                    <button class="btn btn--secondary-gold popup__purchase" @click="showErrorModal = false">Ok</button>
                </footer>
            </div>
        </popup-component>
    </div>
</template>

<script>

import PopupComponent from '../common/Popup.vue'

export default {
    props: ['product'],
    components: {PopupComponent},
    data(){return{
        showSuccessModal: false,
        showErrorModal: false
    }},
    computed: 
    {
        isShowRoute() {return this.$route.name == 'products.show'},

        description() {return this.product.description_html.length < 250 ? this.product.description_html : this.product.description_html.substring(0,250) + "..."},

        authUser() {return this.$store.getters.getAuthUser}
    },
    mounted()
    {
        if(this.isShowRoute && this.authUser) this.paypalRender();
    },
    methods: 
    {
        paypalRender()
        {
            let self = this;
            paypal.Button.render(
            {
                env: 'sandbox', // Or 'production'
                // Set up the payment:
                // 1. Add a payment callback
                
                payment: function(data, actions) 
                {
                    // 2. Make a request to your server
                    return actions.request.post(`/api/v1/shop/products/${self.$route.params.id}/create-payment`)
                        .then(function(res) 
                        {
                        // 3. Return res.id from the response
                        return res.id;
                        })

                        .catch(function(err) 
                        {
                            self.showErrorModal = true;
                        });
                    },
                    // Execute the payment:
                    // 1. Add an onAuthorize callback

                onAuthorize: function(data, actions) 
                {
                    // 2. Make a request to your server
                    return actions.request.post(`/api/v1/shop/products/${self.$route.params.id}/execute-payment`, 
                    {
                        paymentID: data.paymentID,
                        payerID:   data.payerID,
                        providerID: self.authUser.provider_id
                    })
                        .then(function(res) 
                        {
                            self.showSuccessModal = true;
                        })

                        .catch(function(err) 
                        {
                            self.showErrorModal = true;
                        });
                }
            }, '#paypal-button');
        }
    }
}

</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';

    .product
    {
        text-align: left;
        background: $color-secondary-light;
        border: 1px solid $color-border-dark;
        border-radius: 3px;
        line-height: 1;
        box-shadow: 0 0 10px $color-black;
        position: relative;
        margin: 2.5rem auto;

        @media only screen and (max-width: 44.375em)
        {
            width: 65%;
        }

        @media only screen and (max-width: 30rem)
        {
            width: 34rem;
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
            @media only screen and (min-width: 44.375em)
            {
                width: calc(100% - 15rem)
            }
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
            &--show 
            {
                border: none;
            }
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