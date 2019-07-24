<template>
    <b-row>
        <landing-component></landing-component>
        <updates-component></updates-component>
    </b-row>
</template>

<script>

import LandingComponent from '../components/Landing.vue'
import UpdatesComponent from '../components/Updates.vue'

export default {
    components:
    {
        LandingComponent,
        UpdatesComponent
    }
}
</script>
