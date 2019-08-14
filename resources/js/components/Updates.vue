<template>
    <section class="section-updates">
       <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">Updates</h2>
        </header>
        <div class="posts">
            <div class="posts__post" v-for="update in updates" :key="update.id">
                <update-component :update="update"></update-component>
            </div>
            <div v-if="!isIndexRoute" class="u-center-text">
                <router-link :to="'/updates'" class="link">View more updates</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import UpdateComponent from './Update.vue'

export default {
    components: {UpdateComponent},
    data(){return{
        updates: null
    }},
    computed:
    {
        isIndexRoute() {return this.$route.name === 'updates.index'},

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

@import '../../sass/abstracts/_variables.scss';
    
    .posts 
    {
        margin: 50px 0;
        width: 100%;

        &__post
        {

            &:first-child::before
            {
                content: "";
                display: block;
                width: 100%;
                height: 1px;
                background-color: $color-border-light;
                margin-bottom: 4rem;
            }

            &::after
            {
                content: "";
                display: block;
                width: 100%;
                height: 1px;
                background-color: $color-border-light;
                margin-top: 2rem;
                margin-bottom: 4rem;
            }
        }
    }
    
</style>
