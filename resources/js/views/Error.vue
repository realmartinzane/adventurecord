<template>
    <main class="error">
        <error-401-component v-if="route == 'error.401'"></error-401-component>
    </main>
</template>

<script>

import Error401Component from '../components/Error401.vue';

export default {
    components: {Error401Component},
    computed:
    {
        route() {return this.$route.name },
    }
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';
@import '../../sass/abstracts/_mixins.scss';

    .error__wrap
    {
        @include absoluteCenter;
    }
</style>