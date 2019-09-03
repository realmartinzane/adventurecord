<template>
    <section class="section-marketplace">
        <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">Marketplace</h2>
        </header>

        <search-component 
            class="marketplace__search"
            :placeholder="'Search for items...'"
            :message="searchMessage"
            :submit="search">
        </search-component>

        <div class="u-center-text u-margin-top-md u-margin-bottom-sm">
            <h3 class="heading-tertiary">Popular Items Now</h3>
        </div>

        <clip-loader v-if="topItemsLoad != 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>

        <div class="row" v-if="topItemsLoad == 2">
            <div class="col-1-of-3" v-for="topItem in topItems" :key="topItem.Id">
                <div class="item__content" @click="openModal(topItem)">
                    <div class="item__left">
                        <img src="/img/brand/brand_logo_1x.png" alt="Item Image" class="item__img">
                    </div>
                    
                    <div class="item__right">
                        <h4 class="item__name">{{ topItem.details.ItemName }}</h4>
                        <div class="item__info">Class: {{ topItem.details.ItemClass }}</div>
                        <div class="item__info">{{ topItem.details.StatType }}: {{ topItem.details.Stats }}</div>
                    </div>
                </div>
            </div>
        </div>

        <item-modal-component v-if="showModal" @close="showModal = false" :data="modalData"></item-modal-component>
    </section>
</template>

<script>

import SearchComponent from './common/Search'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import ItemModalComponent from './ItemModal.vue'

export default {
    components: {SearchComponent, ClipLoader, ItemModalComponent},
    data(){return{
        showModal: false,
        modalData: null,
        searchMessage: ''
    }},
    computed:
    {
        authUserLoad() {return this.$store.getters.getAuthUserLoad()},
        
        authUser() {return this.$store.getters.getAuthUser},

        topItems() {return this.$store.getters.getTopItems},

        topItemsLoad() {return this.$store.getters.getTopItemsLoad}
    },
    created()
    {
        this.fetchTopItems();
    },
    methods:
    {
        openModal(data)
        {
            this.modalData = data
            this.showModal = true
        },
        search()
        {
            console.log('Searching...')
        },
        fetchTopItems()
        {
            this.$store.dispatch('fetchTopItems')
        }
    }
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';
@import '../../sass/abstracts/_mixins.scss';

    .marketplace__search
    {
        width: 95%;
        max-width: 80rem;
        margin: auto;
    }

    .item
    {
        &__content
        {
            background-color: $color-secondary-light;
            border: 1px solid $color-border-light;
            box-shadow: 0 0 1rem $color-primary;
            padding: 1.5rem;
            cursor: pointer;
            transition: all 200ms;
            color: $color-white;
            
            &:hover
            {
                transform: scale(1.05);
            }
        }
        
        &__left
        {
            display: inline-block;
            height: 6.5rem;
            width: 6.5rem;
            padding: .5rem;
            background: $color-black;
            outline: 1px solid $color-black;
            border: 4px solid $color-primary;
            vertical-align: middle;
        }

        &__img
        {
            width: 100%;
        }

        &__right
        {
            display: inline-block;
            width: calc(100% - 8rem);
            margin-left: 1rem;
            vertical-align: middle;
        }

        &__name
        {
            font-size: 2.3rem;
            font-weight: 400;
        }
    }
</style>
