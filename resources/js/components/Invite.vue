<template>
    <section class="section-invite u-center-text">
        <clip-loader v-if="inviteLoad" :loading="true" color="#FFD700" size="5rem"></clip-loader>

        <div class="invited" v-if="!inviteLoad">
            <secondary-header-component  :classes="'u-center-text u-margin-bottom-md'" >Official Discord Server</secondary-header-component>
        <a href="https://discord.gg/h22Nund" class="btn btn--secondary-discord" target="_blank">
            <font-awesome-icon :icon="['fab', 'discord']" size="lg" class="u-margin-right-sm"></font-awesome-icon>
            <span>Join</span>
        </a>

        <secondary-header-component v-if="true" :classes="'u-center-text u-margin-bottom-md u-margin-top-lg'">Discord Bot</secondary-header-component>
        <a href="https://discordapp.com/oauth2/authorize?client_id=518152560792567828&amp;scope=bot&amp;permissions=1073867905" target="_blank" class="btn btn--secondary-discord">
            <font-awesome-icon :icon="['fab', 'discord']" size="lg" class="u-margin-right-sm"></font-awesome-icon>
            <span>Invite</span>
        </a>

        </div>
        
    </section>
</template>

<script>

import SecondaryHeaderComponent from './common/SecondaryHeader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {SecondaryHeaderComponent, ClipLoader},
    data(){return{
        inviteLoad: true
    }},
    mounted()
    {
        setTimeout(() => 
        {
            this.inviteLoad = false
        }, 500)
    }
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';

</style>
