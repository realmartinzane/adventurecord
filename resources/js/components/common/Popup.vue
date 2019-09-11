<template>
    <div class="popup">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';
@import '../../../sass/abstracts/_mixins.scss';

    .popup
    {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 10000;
        background-color: rgba($color-black, .6);

        &__content
        {
            @include absoluteCenter;
            z-index: 15000;
            background: $color-secondary-light;
            border: 1px solid $color-border-light;
            border-radius: 3px;
            width: 50rem;

            @media only screen and (max-width: 30em)
            {
                width: 95%;
            }
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
            position: absolute;
            top: 2.5rem;
            right: 2rem;
            font-size: 2rem;
            line-height: 1;
            color: rgba($color-white, .6);
            border: none;
            background: none;
            cursor: pointer;
        }

        &__body
        {
            padding: 1.5rem;
        }

        &__question 
        {
            line-height: 1.7;
        }

        // Prompt

        &__footer--prompt
        {
            text-align: right;
            padding: 2rem;
        }
    }
</style>