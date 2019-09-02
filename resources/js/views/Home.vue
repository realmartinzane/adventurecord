<template>
    <main>
        <landing-component></landing-component>
        <updates-component></updates-component>
    </main>
</template>

<script>

import LandingComponent from '../components/Landing.vue';
import UpdatesComponent from '../components/updates/Updates.vue';

export default {
    components: {LandingComponent, UpdatesComponent}
}
</script>
