<template>
    <div class="post__likes-container">
        <div class="post__like" v-if="LikeUpdateAction != 1 && UnlikeUpdateAction != 1"> {{ likesCount }} </div> 
        <font-awesome-icon :icon="['far', 'heart']" v-tooltip.bottom="'Like'" @click="toggleLike" v-if="!liked && LikeUpdateAction != 1 && UnlikeUpdateAction != 1"></font-awesome-icon>
        <font-awesome-icon :icon="['fas', 'heart']" v-tooltip.bottom="'Like'" @click="toggleLike" v-if="liked && LikeUpdateAction != 1 && UnlikeUpdateAction != 1"></font-awesome-icon>
        <clip-loader :loading="true" color="#ec4853" size="2rem" class="post__spinner" v-if="LikeUpdateAction == 1 || UnlikeUpdateAction == 1"></clip-loader>
    </div>
</template>

<script>

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {ClipLoader},
    props: ['update'],
    computed:
    {
        liked()
        {
            return this.$store.getters.getUpdateLiked
        },

        LikeUpdateAction()
        {
            return this.$store.getters.getLikeUpdateAction
        },

        UnlikeUpdateAction()
        {
            return this.$store.getters.getUnlikeUpdateAction
        },
        likesCount()
        {
            return this.$store.getters.getUpdateLikesCount
        }
    },
    methods:
    {
        toggleLike()
        {
            return this.liked ? this.unlike() : this.like()
        },

        like()
        {
            this.$store.dispatch('likeUpdate', {id: this.update.id})

        },
        unlike()
        {
            this.$store.dispatch('unlikeUpdate', {id: this.update.id})
        }
    }
}
</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';

    .post
    {
        &__spinner
        {
            left: auto !important;
            right: 0 !important;
            transform: translateY(-65%) !important;
        }
        &__likes-container
        {
            position: relative;
            min-width: 5rem;
            min-height: 2.5rem;
            svg 
            {
                cursor: pointer;
                color: $color-red;
                font-size: 2rem;
            }
        }

        &__like
        {
            
            font-size: 2rem;
            color: $color-red;
        }
    }

</style>