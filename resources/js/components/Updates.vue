<template>
    <section class="updates">
        <section-header-component 
            :text="isUpdates ? 'Updates' : 'Latest Updates'"
            :spacing="isUpdates">
        </section-header-component>
        <div class="posts">
            <div class="hr-lg"></div>
            <div v-for="update in updates" :key="update.id">
                <update-component :update="update"></update-component>
                <div class="hr-lg"></div>
            </div>
            <div v-if="!isUpdates" class="view-more">
                <b-link :to="'/updates'" class="adv-link">View more updates</b-link>
            </div>
        </div>
    </section>
</template>

<script>
import UpdateComponent from './Update.vue'
import SectionHeaderComponent from './SectionHeader.vue'

export default {
    components: {UpdateComponent, SectionHeaderComponent},
    data(){return{
        updates: []
    }},
    computed:
    {
        isUpdates() {return this.$route.name === 'updates.index'},

        endpoint() {return `/updates/data`}
    },
    created()
    {
        axios.get(this.endpoint)
        .then(response => this.updates = response.data)
    }
}
</script>

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';

    .updates
    {
        padding: 75px 0;
    }
    
    .hr-lg {width: 880px;}
    .posts {margin: 50px 0;}
    
    .view-more 
    {
        text-align: center;
        font-size: 0.8rem;
    }
    
</style>
