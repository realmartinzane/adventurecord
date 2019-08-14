<template>
    <section class="section-marketplace" id="section-marketplace">
        <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">Marketplace</h2>
        </header>

        <form action="#" class="form">
            <div class="form__group">
                <input type="text" class="form__input" id="item" placeholder="Search for items..."

                ><button type="submit" class="btn btn--primary-2 form__search">
                    <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
                </button>
            </div>
        </form>

        <div class="u-center-text u-margin-top-md u-margin-bottom-sm">
            <h3 class="heading-tertiary">Popular Items Now</h3>
        </div>

        <div class="row">
            <div class="col-1-of-3">
                <a href="#details_1" class="item__link">
                    <div class="item__content">
                        <div class="item__left">
                            <img src="/img/brand_logo.png" alt="Item Image" class="item__img">
                        </div>
                        
                        <div class="item__right">
                            <h4 class="item__name">Item Name</h4>
                            <div class="item__info">Class: Mage</div>
                            <div class="item__info">Armor: 24</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div class="details" id="details_1">
            <div class="details__content">
                <header class="details__header">
                    <h4 class="details__header-text">Item Information</h4>
                    <a href="#section-marketplace" class="details__close">
                        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                    </a>
                </header>

                <div class="details__body">
                    <div class="details__left">
                        <img class="details__img" src="/img/brand_logo.png" alt="Item Image">
                    </div>

                    <div class="details__right">
                        <h3 class="details__name">Item Name</h3>
                        <p class="details__description">
                            This is the item description, where you will find more information about the item you are currently viewing.
                        </p>
                        <div class="details__info"><span class="details__label">Armor:</span>24</div>
                        <div class="details__info"><span class="details__label">Rarity:</span>Epic</div>
                        <div class="details__info"><span class="details__label">Class:</span>Mage</div>
                        <div class="details__info"><span class="details__label">Sell Price:</span>174</div>
                        <div class="details__info"><span class="details__label">Level:</span>17+</div>
                        <div class="details__info"><span class="details__label">Obtainable:</span>Yes</div>
                    </div>
                </div>

                <footer class="details__footer">
                    <button class="btn btn--primary-2 details__purchase">Purchase</button>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';
@import '../../sass/abstracts/_mixins.scss';

    .form
    {
        &__input
        {
            display: inline-block;
            width: calc(90% - 2px);
            border: none;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            vertical-align: top;
        }

        &__search
        {
            &, &:visited, &:link
            {
                display: inline-block;
                padding: .8rem;
                width: calc(10% - 2px);
                border-top-left-radius: 0 !important;
                border-bottom-left-radius: 0 !important;
                font-size: 1.5rem;
            }
        }
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

    .details
    {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 10000;
        background-color: rgba($color-black, .6);
        opacity: 0;
        visibility: hidden;
        transition: all 300ms;

        &__content
        {
            @include absoluteCenter;
            z-index: 15000;
            background: $color-secondary-light;
            border: 1px solid $color-border-light;
            border-radius: 3px;
            width: 50rem
        }

        &__header
        {
            background-color: $color-primary-dark;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            padding: 2rem;
        }

        &__header-text
        {
            font-size: 1.8rem;
            font-weight: 400;
        }

        &__close
        {
            &, &:link, &:visited
            {
                position: absolute;
                top: 2.5rem;
                right: 2rem;
                font-size: 2rem;
                line-height: 1;
                color: rgba($color-white, .6);
            }
        }

        &__body
        {
            padding: 1.5rem;
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
            vertical-align: top;
            margin-top: 1.5rem;
        }

        &__img
        {
            width: 100%;
        }

        &__right
        {
            display: inline-block;
            width: calc(100% - (8rem + 4rem));
            margin-left: 1rem;
            vertical-align: top;
        }

        &__name
        {
            font-size: 2.3rem;
            font-weight: 400;
        }

        &__description
        {
            font-size: 1.4rem;
            margin-bottom: 3rem;
        }
        
        &__info
        {
            width: 49%;
            display: inline-block;
            margin-bottom: .5rem;
        }

        &__label
        {
            display: inline-block;
            font-weight: bold;
            margin-right: .6rem;
        }

        &__footer
        {
            text-align: center;
            padding-bottom: 2rem;
        }

        &:target
        {
            opacity: 1;
            visibility: visible;
        }
    }
</style>
