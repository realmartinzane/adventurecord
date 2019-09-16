<template>
    <section class="section-updates" :class="{'u-pos-relative': isHomeRoute }">
        <clip-loader v-if=" updatesLoad !== 2 && updates.length == 0" :loading="true" color="#FFD700" size="5rem"></clip-loader>
        <secondary-header-component v-if="updatesLoad == 2 || updates.length > 0">Updates</secondary-header-component>
        
        <div class="posts" v-if="updatesLoad == 2 || updates.length > 0">
            <update-component v-for="update in updates[0]" :key="update.id" :update="update"></update-component>
            
            <div class="u-center-text posts__pagination u-margin-top-md">
                <link-component :to="'/updates'" v-if="isHomeRoute">View more updates</link-component>
                <link-component variant="button" @click.native="fetchUpdates(false)" v-if ="!isHomeRoute && updatesLoad == 2 && (updatesPage !== updatesLastPage)">Load more updates</link-component>
                <clip-loader v-if=" updatesLoad !== 2 && updates" :loading="true" color="#FFD700" size="3rem"></clip-loader>
            </div>
        </div>
    </section>
</template>

<script>
import UpdateComponent from './Update.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import LinkComponent from '../common/Link.vue'
import SecondaryHeaderComponent from '../common/SecondaryHeader.vue'

export default {
    components: {UpdateComponent, ClipLoader, LinkComponent, SecondaryHeaderComponent},
    computed:
    {
        isHomeRoute() {return this.$route.name === 'landing' || this.$route.name === 'home'},

        updatesLoad() {return this.$store.getters.getUpdatesLoad},

        updates() {return this.$store.getters.getUpdates},

        updatesPage() {return this.$store.getters.getUpdatesPage},

        updatesLastPage() {return this.$store.getters.getUpdatesLastPage}
    },
    created()
    {
        this.fetchUpdates(true)
    },
    methods:
    {
        fetchUpdates(isFresh)
        {
            this.$store.dispatch('fetchUpdates', {isFresh});
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../../sass/abstracts/_variables.scss';
    
    .posts 
    {
        margin: 50px 0;

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

        &__pagination 
        {
            position: relative;
            height: 2.7rem;
        }
    }
    
</style>
