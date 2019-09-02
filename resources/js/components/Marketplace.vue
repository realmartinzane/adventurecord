<template>
    <section class="section-marketplace">
        <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">Marketplace</h2>
        </header>

        <search-component 
                class="user-profile__search"
                :placeholder="'Search for items...'"
                :message="searchMessage"
                :submit="search">
            </search-component>

        <div class="u-center-text u-margin-top-md u-margin-bottom-sm">
            <h3 class="heading-tertiary">Popular Items Now</h3>
        </div>

        <div class="row">
            <div class="col-1-of-3">
                <div class="item__content" @click="showModal = true">
                    <div class="item__left">
                        <img src="/img/brand/brand_logo_1x.png" alt="Item Image" class="item__img">
                    </div>
                    
                    <div class="item__right">
                        <h4 class="item__name">Item Name</h4>
                        <div class="item__info">Class: Mage</div>
                        <div class="item__info">Armor: 24</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popup" v-show="showModal">
            <div class="popup__content">
                <header class="popup__header">
                    <h4 class="popup__header-text">Item Information</h4>
                    <button class="popup__close" @click="showModal = false">
                        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                    </button>
                </header>

                <div class="popup__body">
                    <div class="popup__left">
                        <img class="popup__img" src="/img/brand/brand_logo_1x.png" alt="Item Image">
                    </div>

                    <div class="popup__right">
                        <h3 class="popup__name">Item Name</h3>
                        <p class="popup__description">
                            This is the item description, where you will find more information about the item you are currently viewing.
                        </p>
                        <div class="popup__info"><span class="popup__label">Armor:</span>24</div>
                        <div class="popup__info"><span class="popup__label">Rarity:</span>Epic</div>
                        <div class="popup__info"><span class="popup__label">Class:</span>Mage</div>
                        <div class="popup__info"><span class="popup__label">Sell Price:</span>174</div>
                        <div class="popup__info"><span class="popup__label">Level:</span>17+</div>
                        <div class="popup__info"><span class="popup__label">Obtainable:</span>Yes</div>
                    </div>
                </div>

                <footer class="popup__footer">
                    <button v-if="authUser != '' && authUserLoad == 2" class="btn btn--secondary-gold popup__purchase">Purchase</button>
                    <a v-if="authUser == '' && authUserLoad == 2" href="/login/discord" class="link">Log in to purchase this item</a>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>

import SearchComponent from './Search'

export default {
    components: {SearchComponent},
    data(){return{
        showModal: false,
        searchMessage: ''
    }},
    computed:
    {
        authUserLoad() {return this.$store.getters.getAuthUserLoad()},
        
        authUser() {return this.$store.getters.getAuthUser}
    },
    methods:
    {
        search()
        {
            console.log('Searching...')
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
