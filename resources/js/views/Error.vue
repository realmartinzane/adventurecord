<template>
    <main class="error">
        <error-401-component v-if="route == 'error.401'"></error-401-component>
        <error-404-component v-if="route == 'error.404'"></error-404-component>
    </main>
</template>

<script>

import Error401Component from '../components/errors/Error401.vue';
import Error404Component from '../components/errors/Error404.vue';

export default {
    components: {Error401Component, Error404Component},
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