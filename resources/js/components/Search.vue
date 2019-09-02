<template>
        <div class="search">
            <input type="text" class="search__input" id="item" :placeholder="placeholder" v-model="searchData"

            ><button @click="submit(searchData)" class="btn btn--secondary-gold search__btn">
                <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
            </button>
            <p class="search__msg">{{ message }}</p>
        </div>
</template>

<script>
export default {
    props: ['placeholder', 'submit', 'message'],
    data(){return{
        searchData: null
    }}
    
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';

    .search
    {
        &__input
        {
            display: inline-block;
            width: calc(90% - 2px);
            border: 1px solid transparent;
            border-right: none;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            vertical-align: middle;
            padding: 1rem;
            padding-top: .9rem;
            background-color: $color-secondary-light;
            color: $color-gray-light;
            font-family: 'Lato', sans-serif;
            font-size: 1.6rem;

            @media only screen and (max-width: 56.25em)
            {
                width: calc(100% - 5.2rem);
            }
            &:focus, &:active
            {
                box-shadow: none;
                border-color: $color-primary;
                outline: none;
            }
        }

        &__btn
        {
            &, &:visited, &:link
            {
                
                display: inline-block;
                width: calc(10% - 2px);
                padding: 1rem !important;
                border: 1px solid $color-primary-dark;
                border-left: none;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                vertical-align: middle;
                font-size: 1.6rem !important;

                @media only screen and (max-width: 56.25em)
                {
                    width: 5rem;
                }
            }
        }
        &__msg
        {
            color: $color-red;
            font-size: 1.4rem;
            margin-top: .5rem;
            text-align: center;
        }
    }

</style>