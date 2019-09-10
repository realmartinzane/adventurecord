<template>
    <section class="section-updates" :class="{'u-pos-relative': isHomeRoute }">
        <clip-loader v-if=" updatesLoad !== 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>
        <secondary-header-component v-if="updatesLoad == 2">Updates</secondary-header-component>
        <div class="posts" v-if="updatesLoad == 2">
            <div class="posts__post" v-for="update in fetchedUpdates" :key="update.id">
                <update-component :update="update"></update-component>
            </div>
            <div v-if="isHomeRoute" class="u-center-text">
                <link-component :to="'/updates'">View more updates</link-component>
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

        fetchedUpdates() {return this.$store.getters.getUpdates}
    },
    created()
    {
        this.fetchAll()
    },
    methods:
    {
        fetchAll()
        {
            this.$store.dispatch('fetchUpdates');
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
    }
    
</style>
