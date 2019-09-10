<template>
    <form class="form">
        <slot></slot>
    </form>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';

    .form
    {
        position: relative;
        z-index: 5000;
        &__group
        {
            width: 70%;
            
            @media only screen and (max-width: 30em)
            {
                width: 90% !important;
            }
            margin: auto;
        }

        &__label
        {
            display: block;
            font-size: 2rem;
        }

        &__select, &__input, &__textarea
        {
            width: 100%;
            background-color: $color-secondary-light;
            border: 1px solid $color-border-dark;
            border-radius: 3px;
            padding: 1rem;
            color: $color-gray-light;
            resize: vertical;
            font-family: 'Lato', sans-serif;
            font-size: 1.6rem;

            &:active, &:focus
            {
                border: 1px solid rgba($color-primary, .6);
                box-shadow: 0 0 5px rgba($color-primary, .6);
                outline: none;
            }
        }
        &__feedback
        {
            visibility: hidden;
            margin-top: .5rem;
            font-size: 1.4rem;
            color: $color-red;
        }

        &__submit 
        {
            display: block;
            margin: auto;
        }
    }
</style>