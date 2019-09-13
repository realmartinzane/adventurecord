<template>

    <button v-if="variant == 'button'" class="link">
        <slot></slot>
    </button>
    <router-link v-else class="link" :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: ['to', 'variant']
}
</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';

    .link
    {
        &, &:link, &:visited
        {
            text-transform: uppercase;
            color: $color-primary;
            text-decoration: none;
            font-size: 1.4rem;
            display: inline-block;

            // Button Styles
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

        &:hover, &:focus, &:active
        {
            text-decoration: underline;
        }
    }
</style>