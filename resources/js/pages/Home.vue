<template>
    <div>
        <landing-two-component></landing-two-component>
        <updates-component></updates-component>
    </div>
</template>

<script>

import LandingTwoComponent from '../components/LandingTwo.vue'
import UpdatesComponent from '../components/Updates.vue'

export default {
    components:
    {
        LandingTwoComponent,
        UpdatesComponent
    }
}
</script>
