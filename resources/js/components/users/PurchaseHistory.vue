<template>
    <clip-loader v-if="userLoad != 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>
    <section class="section-purchase-history" v-else>
        
        <h3 class="purchase-history__heading">Purchase History</h3>

        <div class="purchase-history__empty" v-if="user.purchases.length == 0">
            Your purchase history is empty. Go get yourself something nice from the 
            <link-component to="/shop">Shop</link-component>
        </div>

        <table class="purchase-history__table" v-else>
            <tr class="purchase-history__row purchase-history__row--first">
                <th class="purchase-history__column purchase-history__column--command">Date</th>
                <th class="purchase-history__column purchase-history__column--function">Discord ID</th>
                <th class="purchase-history__column purchase-history__column--function">Product</th>
                <th class="purchase-history__column purchase-history__column--function">Category</th>
                <th class="purchase-history__column purchase-history__column--function">Price</th>
                <th class="purchase-history__column purchase-history__column--function">Status</th>
            </tr>

            <tr class="purchase-history__row" v-for="purchase in user.purchases" :key="purchase.id">
                <td class="purchase-history__column">{{ purchase.date }}</td>
                <td class="purchase-history__column">{{ purchase.user.provider_id }}</td>
                <td class="purchase-history__column">{{ purchase.product.name }}</td>
                <td class="purchase-history__column">{{ purchase.product.category.name }}</td>
                <td class="purchase-history__column">${{ purchase.product.price }}</td>
                <td class="purchase-history__column">Successful</td>
            </tr>
        </table>
    </section>
</template>

<script>

import LinkComponent from '../common/Link.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {LinkComponent, ClipLoader},
    data(){return{
        id: this.$route.params.id
    }},

    computed: 
    {
        
        user() {return this.$store.getters.getUser},

        userLoad() {return this.$store.getters.getUserLoad}
    },

    created()
    {
        this.fetchUser()
    },

    methods: 
    {
        fetchUser()
        {
            this.$store.dispatch('fetchUser', {id: this.id})
        }
    }
}
</script>

<style lang="scss">
    
@import '../../../sass/abstracts/_variables.scss';

    .purchase-history 
    {
        &__heading 
        {
            margin-bottom: 2rem;
        }

        &__table
        {
            width: 100%;
            border-top: 2px solid $color-border-light;
            border-bottom: 2px solid $color-border-light;
            text-align: left;
            border-collapse: collapse
        }

        &__row
        {
            font-weight: normal;
            border-bottom: 1px solid $color-border-light;
        }

        &__row--first
        {
            border-bottom: 2px solid $color-border-light;
            font-weight: bold;
            .purchase-history__column {color: $color-white;}
        }

        &__column
        {
            padding: .8rem 1.5rem;
        }
    }

</style>
