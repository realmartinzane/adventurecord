<template>
    <div class="categories">
        <input class="categories__radio" type="radio" name="category" id="category_1" checked><label for="category_1" class="categories__label" @click="$parent.filterProducts(0)">All</label>
        <input class="categories__radio" type="radio" name="category" id="category_2"><label for="category_2" class="categories__label" @click="$parent.filterProducts(1)">Membership</label>
        <input class="categories__radio" type="radio" name="category" id="category_3"><label for="category_3" class="categories__label" @click="$parent.filterProducts(2)">Special</label>
        <input class="categories__radio" type="radio" name="category" id="category_4"><label for="category_4" class="categories__label" @click="$parent.filterProducts(3)">Bundles</label>
        <input class="categories__radio" type="radio" name="category" id="category_5"><label for="category_5" class="categories__label" @click="$parent.filterProducts(4)">Themes</label>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';

    .categories 
    {
        &__label 
        {
            margin: 0 2rem;
            font-size: 1.8rem;
            cursor: pointer;
            &:hover 
            {
                color: $color-primary;
            }
        }

        &__radio 
        {
            display: none;
        }
        
        &__radio:checked + &__label
        {
            color: $color-primary;
        }
    }
</style>