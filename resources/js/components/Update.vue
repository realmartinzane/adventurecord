<template>
    <section :class="{'section-update': isShowRoute, 'item-update': !isShowRoute}" id="#section_update">
        <div class="post" v-if="fetchedUpdate">
            <div class="post__left">
                <div class="post__img-container">
                    <img src="/img/brand_logo.png" alt="Update Source Image" class="post__img">
                </div>
                
                <div class="post__btn-container">
                    <router-link class="btn btn--primary-blue post__left-btn" :to="{name: 'updates.edit', params: {id: fetchedUpdate.id}}">
                        <font-awesome-icon :icon="['far', 'edit']"></font-awesome-icon>
                    </router-link>
                    
                    <a href="#delete_prompt" class="btn btn--primary-red post__left-btn" >
                        <font-awesome-icon :icon="['fas', 'trash-alt']"></font-awesome-icon>
                    </a>
                </div>
            </div>

            <div class="post__right">
                <header class="post__header">
                    <div class="post__header-left">
                        <h2 class="post__title">{{ fetchedUpdate.title }}</h2>
                        <div class="post__author">Posted by VampY</div>
                    </div>

                    <div class="post__header-right">
                        <div class="post__date">{{ fetchedUpdate.created_date }}</div>
                        <div class="post__views">
                            {{ fetchedUpdate.views }}
                            <font-awesome-icon :icon="['far', 'eye']"></font-awesome-icon>
                        </div>
                    </div>
                </header>

                <div v-html="body" class="post__body"></div>

                <footer class="post__footer">
                    <div class="post__footer-left">
                        <router-link v-if="!isShowRoute" class="post__continue link"  :to="{name: 'updates.show', params: {id: fetchedUpdate.id}}">Continue Reading</router-link>
                    </div>
                    <div class="post__footer-right">
                            <div class="post__likes-container">
                                <div class="post__likes">{{ fetchedUpdate.likes }}</div> <font-awesome-icon :icon="['far', 'heart']"></font-awesome-icon>
                            </div>
                            <div class="post__share u-margin-left-sm">
                                <font-awesome-icon :icon="['far', 'share-square']" @click="showLinks = !showLinks"></font-awesome-icon>
                                <social-sharing-component
                                    v-if="showLinks"
                                    :url="url"
                                    :title="fetchedUpdate.title"
                                    :quote="fetchedUpdate.title"
                                    :hashtags="'adventurecord'"
                                ></social-sharing-component>
                            </div>
                        </div>
                </footer>
            </div>
        </div>

        <div class="popup" id="delete_prompt">
            <div class="popup__content">
                <header class="popup__header">
                    <h4 class="popup__header-text">Are you sure?</h4>
                    <a href="#" class="popup__close">
                        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                    </a>
                </header>

                <div class="popup__body">
                    <p class="popup__question">
                        Do you really want to delete this post? This process cannot be undone.
                    </p>
                </div>

                <footer class="popup__footer popup__footer--prompt">
                    <button class="btn btn--secondary-gold popup__purchase">Ok</button>
                    <button class="btn btn--secondary-gold popup__purchase">Cancel</button>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>

import SocialSharingComponent from './SocialSharing.vue'

export default {
    props: ['update'],
    components: {SocialSharingComponent},
    data(){return{
        id: this.$route.params.id,
        fetchedUpdate: null,
        showModal: false,
        showLinks: false,
        url: ''
    }},
    computed:
    {
        isShowRoute() {return this.$route.name === 'updates.show'},
        body() {return this.fetchedUpdate.body_html.length < 250 ? this.fetchedUpdate.body_html : (this.isShowRoute ? this.fetchedUpdate.body_html : this.fetchedUpdate.body_html.substring(0,250) + "...")}
    },
    mounted()
    {
        this.url = window.location.href;
        if(this.id && !this.isShowRoute) this.fetch();
        else if(this.id && this.isShowRoute) this.fetchSingle();
        else this.fetchedUpdate = this.update;
    },
    methods:
    {
        fetch()
        {
            axios.get(`/updates/${this.id}`)
            .then(({data}) =>
            {
                this.fetchedUpdate = data;
            });
        },
        fetchSingle()
        {
            axios.get(`/updates/${this.id}/single`)
            .then(({data}) =>
            {
                this.fetchedUpdate = data;
            });
        },
        destroy()
        {
            axios.post(`/updates/${this.fetchedUpdate.id}/destroy`)
            .then(({data})=> 
            {
                if(this.isShowRoute)
                {
                    this.$router.push('/updates', () =>
                    {
                        this.$toast.success({
                            title:'Success',
                            message: data
                        })
                    });
                }
                else
                {
                    this.$parent.fetch();
                    this.$toast.success({
                            title:'Success',
                            message: data
                        })
                }
            });
        }
    }
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';

    .post
    {
        width: 95%;

        
        @media only screen and (max-width: 30em)
        {
            width: 98%;
            margin: auto;
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
            padding: .5rem;
            background-color: $color-black;
            outline: 3px solid $color-black;
            border: 5px solid $color-primary;

            @media only screen and (max-width: 30em)
            {
                height: 7.5rem;
                width: 7.5rem;
                outline: 1px solid $color-black;
                border: 3px solid $color-primary;
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
            * {display: inline-block;}
        }

        &__likes-container
        {
            svg {color: $color-red;}
        }

        &__likes
        {
            color: $color-red;
        }

        &__share
        {
           svg {color: $color-blue;}
        }
    }
</style>
