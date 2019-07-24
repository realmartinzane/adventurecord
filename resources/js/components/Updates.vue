<template>
    <b-row class="updates">
        <div v-if="!updates" class="spinner"><b-spinner label="Spinning"></b-spinner></div>
        <section-header-component 
            :text="isUpdates ? 'Updates' : 'Latest Updates'"
            :spacing="isUpdates">
        </section-header-component>
        <div class="posts">
            <b-col cols="12" md="10" offset-md="1" offset="1" xl="8" offset-xl="2" class="hr-lg"></b-col>
            <div v-for="update in updates" :key="update.id">
                <update-component :update="update"></update-component>
                <b-col cols="12" md="10" offset-md="1" xl="8" offset-xl="2" class="hr-lg"></b-col>
            </div>
            <div v-if="!isUpdates" class="view-more">
                <b-link :to="'/updates'" class="adv-link">View more updates</b-link>
            </div>
        </div>
    </b-row>
</template>

<script>
import UpdateComponent from './Update.vue'
import SectionHeaderComponent from './SectionHeader.vue'

export default {
    components: {UpdateComponent, SectionHeaderComponent},
    data(){return{
        updates: null
    }},
    computed:
    {
        isUpdates() {return this.$route.name === 'updates.index'},

        endpoint() {return `/updates/data`}
    },
    mounted()
    {
        this.fetch()
    },
    methods:
    {
        fetch()
        {
            axios.get(this.endpoint)
            .then(response => this.updates = response.data)
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';

    .updates
    {
        padding: 75px 0;
    }
    
    .posts 
    {
        margin: 50px 0;
        width: 100%;
    }
    
    .view-more 
    {
        text-align: center;
        font-size: 0.8rem;
    }
    
</style>
