<template>
    <div class="post">
        <div class="post__left">
            <div class="post__img-container">
                <img :src="update.author.avatar" alt="Update Source Image" class="post__img">
            </div>
            
            <div class="post__btn-container" v-if="authUser != '' && authUserLoad == 2 && authUser.role.id == 1">
                <router-link class="btn btn--primary-blue post__left-btn" :to="{name: 'updates.edit', params: {id: update.id}}" v-tooltip.bottom="'Edit'">
                    <font-awesome-icon :icon="['far', 'edit']"></font-awesome-icon>
                </router-link>
                
                <button @click="showModal = true" class="btn btn--primary-red post__left-btn" v-tooltip.bottom="'Delete'" >
                    <font-awesome-icon :icon="['fas', 'trash-alt']"></font-awesome-icon>
                </button>
            </div>
        </div>

        <div class="post__right">
            <header class="post__header">
                <div class="post__header-left">
                    <h2 class="post__title">{{ update.title }}</h2>
                    <div class="post__author">Posted by <router-link :to="{name: 'users.show', params: {id: update.author_id}}" class="post__link">{{ update.author.name }}</router-link></div>
                </div>

                <div class="post__header-right">
                    <div class="post__date">{{ update.created_date }}</div>
                    <div class="post__views">
                        {{ update.views }}
                        <font-awesome-icon :icon="['far', 'eye']" v-tooltip.bottom="'Views'"></font-awesome-icon>
                    </div>
                </div>
            </header>

            <div v-if="isShowRoute" v-html="update.body_html" class="post__body"></div>
            <div v-if="!isShowRoute" v-html="body" class="post__body"></div>

            <footer class="post__footer">
                <div class="post__footer-left">
                    <link-component v-if="!isShowRoute" class="post__continue"  :to="{name: 'updates.show', params: {id: update.id}}">Continue Reading</link-component>
                </div>
                <div class="post__footer-right">
                        <toggle-like-component :update="update"></toggle-like-component>
                        
                        <div class="post__share u-margin-left-sm">
                            <font-awesome-icon :icon="['far', 'share-square']" v-tooltip.bottom="'Share'" @click="showLinks = !showLinks"></font-awesome-icon>
                            <social-sharing-component
                                v-if="showLinks"
                                :url="url"
                                :title="update.title"
                                :quote="update.title"
                                :hashtags="'adventurecord'"
                            ></social-sharing-component>
                        </div>
                    </div>
            </footer>
        </div>

        <popup-component v-show="showModal">
            <div class="popup__content">
                <header class="popup__header">
                    <h4 class="popup__header-text">Are you sure?</h4>
                    <button @click="showModal = false" class="popup__close">
                        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                    </button>
                </header>

                <div class="popup__body">
                    <p class="popup__question">
                        Do you really want to delete this post? This process cannot be undone.
                    </p>
                </div>

                <footer class="popup__footer popup__footer--prompt">
                    <button class="btn btn--secondary-gold popup__purchase" @click="destroy">Ok</button>
                    <button class="btn btn--secondary-gray popup__purchase" @click="showModal = false">Cancel</button>
                </footer>
            </div>
        </popup-component>
    </div>
</template>

<script>

import SocialSharingComponent from '../common/SocialSharing.vue'
import ToggleLikeComponent from '../common/ToggleLike.vue'
import LinkComponent from '../common/Link.vue'
import PopupComponent from '../common/Popup.vue'

export default {
    props: ['update'],
    components: {SocialSharingComponent, ToggleLikeComponent, LinkComponent, PopupComponent},
    data(){return{
        showModal: false,
        showLinks: false,
        url: ''
    }},
    computed:
    {
        isShowRoute() {return this.$route.name === 'updates.show'},
        
        body() {return this.update.body_html.length < 250 ? this.update.body_html : this.update.body_html.substring(0,250) + "..."},

        updateStatus() {return this.$store.getters.getUpdateStatus},
        
        authUserLoad() {return this.$store.getters.getAuthUserLoad()},
        
        authUser() {return this.$store.getters.getAuthUser}
    },
    created()
    {
        this.url = window.location.href;
    },
    methods:
    {

        toggleLike()
        {
            console.log(this.update.is_liked);
        },
        
        async destroy()
        {
            let response = await this.$store.dispatch('destroyUpdate', {id: this.update.id})
            if(this.updateStatus == 2 && this.isShowRoute)
            {
                this.$router.push('/updates', () =>
                {
                    this.$toast.success(
                        {
                            title:'Success',
                            message: response
                        })
                })
            }
            else if(this.updateStatus == 2 && !this.isShowRoute)
            {
                this.$parent.fetchAll();
                this.$toast.success({
                        title:'Success',
                        message: response
                    })
            }
            else if(this.updateStatus == 3)
            {
                this.$toast.error(
                    {
                        title:'Error!',
                        message: response
                    })
            }
        }
    }
}
</script>

<style lang="scss">

@import '../../../sass/abstracts/_variables.scss';

    .post
    {
        width: 95%;
        margin: auto;
        padding: 4rem 0;
        &:first-child {border-top: 1px solid $color-border-light;}
        border-bottom: 1px solid $color-border-light;

        @media only screen and (max-width: 30em)
        {
            width: 98%;
        }
        
        &__left
        {
            display: inline-block;
            margin: 0 3rem;
            vertical-align: top;
            
            @media only screen and (max-width: 30em)
            {
                margin-left: 0;
                margin-right: 1.5rem;
            }
        }

        &__img-container
        {
            height: 10rem;
            width: 10rem;
            background-color: $color-black;
            border: 3px solid $color-black;
            outline: 5px solid $color-primary-dark;

            @media only screen and (max-width: 30em)
            {
                height: 7.5rem;
                width: 7.5rem;
                border: 2px solid $color-black;
                outline: 2px solid $color-primary-dark;
            }
        }

        &__img
        {
            width: 100%;
        }

        &__btn-container
        {
            text-align: center;
        }

        &__left-btn
        {
            &, &:link, &:visited
            {
                display: inline-block;
                padding: .5rem 1rem !important;
                margin-top: 2rem;
                line-height: 1;
                font-size: 1.4rem;
                position: relative;
                z-index: 5000;
            }
        }

        &__right
        {
            display: inline-block;
            width: calc(100% - 18rem);
            
            @media only screen and (max-width: 30em)
            {
                width: calc(100% - 10rem);
            }
        }

        &__header-left
        {
            display: inline-block;
            width: 79%;
            @media only screen and (max-width: 37.5em)
            {
                width: 100%;
            }
        }

        &__title
        {
            font-size: 3rem;
            font-weight: 400;
            line-height: 1.15;
            margin-bottom: 1rem;
            @media only screen and (max-width: 30em)
            {
                font-size: 2rem;
            }
        }

        &__author
        {
            color: $color-gray-light;
        }

        &__link
        {
            &:link, &:visited
            {
                color: $color-primary;
                text-decoration: none;
            }
            &:hover, &:active, &:focus
            {
                text-decoration: underline;
            }
        }

        &__header-right
        {
            display: inline-block;
            width: 20%;
            text-align: right;
            vertical-align: top;
            @media only screen and (max-width: 37.5em)
            {
                display: none;
            }
        }

        &__date
        {
            font-size: 1.4rem;
            color: $color-gray-light;
        }

        &__views
        {
            font-size: 1.8rem;
        }

        &__body
        {
            margin: 2rem 0;
            color: $color-gray-light;
            p {margin: 1rem 0}
        }

        &__footer-left
        {
            display: inline-block;
            width: 14rem;
        }

        &__footer-right
        {
            display: inline-block;
            width: calc(100% - 15rem);
            text-align: right;
            * 
            {
                display: inline-block;
                line-height: 2rem;
                vertical-align: top;
            }
        }

        &__share
        {
           svg 
           {
               font-size: 2rem;
               cursor: pointer;
               color: $color-blue;
            }
        }
    }
</style>
