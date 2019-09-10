<template>
    <router-link class="link" :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: ['to']
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
        }

        &:hover, &:focus, &:active
        {
            text-decoration: underline;
        }
    }
</style>