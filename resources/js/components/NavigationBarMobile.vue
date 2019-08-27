<template>
    <div class="mobile-navigation">
        <div class="mobile-navigation__brand">
            <router-link :to="'/home'"><img srcset="/img/nav_brand_1x.png 1x, /img/nav_brand_2x.png 2x" alt="Brand Image" class="mobile-navigation__brand-img"></router-link>
        </div>
        
        <nav class="mobile-navigation__nav">

            <input type="checkbox" class="mobile-navigation__checkbox" id="nav_toggle">
            <label for="nav_toggle" class="mobile-navigation__button">
                <span class="mobile-navigation__icon">&nbsp;</span>
            </label>

            <ul class="mobile-navigation__list">
                <clip-loader class="mobile-navigation__spinner" v-if="authUserLoad != 2" :loading="true" color="#FFD700" size="2rem"></clip-loader>
                
                <div class="u-spacer-sm" v-if="authUserLoad != 2"></div>
                
                <li class="navigation__account-item" v-if="authUser == '' && authUserLoad == 2" >
                    <a href="/login/discord" class="mobile-navigation__link mobile-navigation__link--discord">
                        <font-awesome-icon :icon="['fab', 'discord']" size="lg" class="u-margin-right-sm"></font-awesome-icon>
                        Login with Discord
                    </a>
                </li>
                
                <div v-if="authUser != '' && authUserLoad == 2">
                    <li class="mobile-navigation__item"><router-link :to="'/updates/create'" class="mobile-navigation__link">Create a New Update</router-link ></li>
                    <li class="u-horizontal-line"></li>
                    <li class="mobile-navigation__item"><router-link :to="'/users/' + authUser.id" class="mobile-navigation__link">Profile</router-link ></li>
                    <li class="mobile-navigation__item"><router-link :to="'/users/' + authUser.id + '/settings'" class="mobile-navigation__link">Settings</router-link ></li>
                    <li class="mobile-navigation__item"><button @click="logout()" class="mobile-navigation__link">Log Out</button ></li>
                </div>

                <li class="u-horizontal-line"></li>
                <li class="mobile-navigation__item"><router-link :to="'/'" class="mobile-navigation__link">Home</router-link ></li>
                <li class="mobile-navigation__item"><router-link :to="'/updates'" class="mobile-navigation__link">Updates</router-link></li>
                <li class="mobile-navigation__item"><router-link :to="'/commands'" class="mobile-navigation__link">Commands</router-link></li>
                <li class="mobile-navigation__item"><a href="https://youtu.be/mTzogDbNAI0" target="_blank" class="mobile-navigation__link">Tutorial</a></li>
                <li class="mobile-navigation__item"><a href="https://adventurecord.fandom.com/wiki/AdventureCord_Wiki" target="_blank" class="mobile-navigation__link">Wiki</a></li>
                <li class="mobile-navigation__item"><router-link :to="'/marketplace'" class="mobile-navigation__link">Marketplace</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {ClipLoader},
    computed: 
    {
        authUserLoad() {return this.$store.getters.getAuthUserLoad()},
        
        authUser() {return this.$store.getters.getAuthUser}
    },
    methods:
    {
        logout()
        {
            this.$store.dispatch('logout')
            window.location = '/logout'
        },
    }
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';

    .mobile-navigation
    {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 100%;
        padding: 1rem;
        background-color: $color-secondary-dark;
        border-bottom: 1px solid $color-border-dark;
        &__brand
        {
            height: 5rem;
            width: 69%;
            display: inline-block;
        }

        &__brand-img
        {
            height: 100%;
            width: auto;
        }

        &__nav
        {
            display: inline-block;
            width: 29%;
            text-align: right;
            vertical-align: top;
        }

        &__checkbox
        {
            display: none;
        }

        &__button
        {
            display: inline-block;
            cursor: pointer;
            height: 5rem;
            width: 5rem;
            text-align: center;
        }

        &__icon
        {
            position: relative;
            margin-top: 2.5rem;
            &, &::before, &::after
            {
                display: inline-block;
                width: 3rem;
                height: 2px;
                background-color: $color-primary;
            }

            &::before, &::after
            {
                content: "";
                position: absolute;
                left: 0;
                transition: all 200ms;
            }

            &::before
            {
                top: -.8rem;
            }

            &::after 
            {
                bottom: -.8rem;
            }
        }
        
        &__button:hover &__icon::before
        {
            top: -1rem;
        }

        &__button:hover &__icon::after
        {
            top: 1rem;
        }

        &__list
        {
            position: absolute;
            top: 8rem;
            right: 0;
            height: 0;
            width: 20rem;
            overflow: hidden;
            list-style: none;
            text-align: left;
            background-color: $color-secondary;
            transition: all 200ms;
            border: none;
            box-shadow: none;
        }

        &__spinner
        {
            position: absolute;
            top: 1.5rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
        }

        &__link
        {
            &, &:link, &:visited
            {
                display: block;
                text-decoration: none;
                color: inherit;
                font-size: 1.4rem;
                font-weight: 700;
                padding: 1rem 2rem;
                border: none;
                width: 100%;
                background: transparent;
                text-align: left;
                cursor: pointer;
            }
            &:hover, &:focus, &:active
            {
                color: $color-primary;
                background-color: $color-secondary-light;
            }
            &--discord
            {
                &:hover, &:focus, &:active
                {
                    color: $color-discord;
                }
            }
        }

        // Checkbox Animation
        &__checkbox:checked + &__button &__icon
        {
            background-color: transparent;
        }

        &__checkbox:checked + &__button &__icon::before
        {
            top: 0;
            transform: rotate(135deg);
        }

        &__checkbox:checked + &__button &__icon::after
        {
            top: 0;
            transform: rotate(-135deg);
        }

        // Checkbox Functionality
        &__checkbox:checked ~ &__list
        {
            height: 47rem;
            border: 1px solid $color-border-light;
            border-right: none;
            box-shadow: 0 0 10px $color-black;
        }
    }

</style>
