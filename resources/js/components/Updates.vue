<template>
    <section class="updates">
        <section-header-component 
            :text="isUpdates ? 'Updates' : 'Latest Updates'"
            :spacing="isUpdates">
        </section-header-component>
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
import SectionHeaderComponent from './SectionHeader.vue'

export default {
    components: {UpdateComponent, SectionHeaderComponent},
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
    
    .hr-lg {width: 880px;}
    .posts {margin: 50px 0;}
    
    .view-more 
    {
        text-align: center;
        font-size: 0.8rem;
        a
        {
            color: #FFD700;
            text-transform: uppercase;
        }
    }
    
</style>
