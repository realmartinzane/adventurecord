<template>
    <section class="section-purchase-history">
        <h3 class="purchase-history__heading">Purchase History</h3>

        <div class="purchase-history__empty" v-if="true">
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

            <tr class="purchase-history__row">
                <td class="purchase-history__column">10.09.2019</td>
                <td class="purchase-history__column">312348590581923859</td>
                <td class="purchase-history__column">LordGrim's Medieveal Theme</td>
                <td class="purchase-history__column">Themes</td>
                <td class="purchase-history__column">$19.90</td>
                <td class="purchase-history__column">Completed</td>
            </tr>

            <tr class="purchase-history__row">
                <td class="purchase-history__column">10.09.2019</td>
                <td class="purchase-history__column">312348590581923859</td>
                <td class="purchase-history__column">LordGrim's Medieveal Theme</td>
                <td class="purchase-history__column">Themes</td>
                <td class="purchase-history__column">$19.90</td>
                <td class="purchase-history__column">Completed</td>
            </tr>

            <tr class="purchase-history__row">
                <td class="purchase-history__column">10.09.2019</td>
                <td class="purchase-history__column">312348590581923859</td>
                <td class="purchase-history__column">LordGrim's Medieveal Theme</td>
                <td class="purchase-history__column">Themes</td>
                <td class="purchase-history__column">$19.90</td>
                <td class="purchase-history__column">Completed</td>
            </tr>
        </table>
    </section>
</template>

<script>

import LinkComponent from '../common/Link.vue'

export default {
    components: {LinkComponent}
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
