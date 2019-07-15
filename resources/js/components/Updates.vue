<template>
    <section class="updates">
        <div class="section-header" :class="{ 'mt-5' : isUpdates }">
            <h2>{{ isUpdates ? '' : 'Latest' }} Updates</h2>
            <div class="hr-sm"></div>
        </div>
        <div class="posts">
            <div class="hr-lg"></div>
            <update-component></update-component>
            <div class="hr-lg"></div>
            <update-component></update-component>
            <div class="hr-lg"></div>
            <update-component></update-component>
            <div class="hr-lg"></div>
            <div v-if="!isUpdates" class="view-more">
                <b-link>View more updates</b-link>
            </div>
        </div>
    </section>
</template>

<script>
import UpdateComponent from './Update.vue'

export default {
    components: {UpdateComponent},
    computed:
    {
        isUpdates() {return this.$route.name === 'updates'}
    }
}
</script>

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';

    .updates
    {
        padding: 75px 0;
        background: #212127;
    }
    .section-header
    {
        text-align: center;
        color: white;
        h2 {font: 300 2.25rem'Roboto Condensed', sans-serif;}
    }
    .hr-lg {width: 880px;}
    .posts {margin: 50px 0;}
    
    .view-more 
    {
        text-align: center;
        font-size: 0.8rem;
    }
    
</style>
