<template>
    <div class="navigation">
        <div class="navigation__brand">
            <div class="navigation__brand-content">
                <img srcset="/img/brand_name_1x.png 1x, /img/brand_name_2x.png 2x" alt="Brand Name" class="navigation__brand-name">
                <img srcset="/img/brand_logo_1x.png 1x, /img/brand_logo_2x.png 2x" alt="Brand Logo" class="navigation__brand-logo">
            </div>
        </div>

        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item"><router-link :to="'/'" class="navigation__link">Home</router-link ></li>
                <li class="navigation__item"><router-link :to="'/updates'" class="navigation__link">Updates</router-link></li>
                <li class="navigation__item"><router-link :to="'/commands'" class="navigation__link">Commands</router-link></li>
                <li class="navigation__item"><a href="https://youtu.be/mTzogDbNAI0" target="_blank" class="navigation__link">Tutorial</a></li>
                <li class="navigation__item"><a href="https://adventurecord.fandom.com/wiki/AdventureCord_Wiki" target="_blank" class="navigation__link">Wiki</a></li>
                <li class="navigation__item"><router-link :to="'/marketplace'" class="navigation__link">Marketplace</router-link></li>
            </ul>

            <button v-if="authUser == ''" class="btn btn--secondary-discord navigation__login">
                <font-awesome-icon :icon="['fab', 'discord']" size="lg" class="u-margin-right-sm"></font-awesome-icon>
                <span>Log in with discord</span>
            </button>

            <clip-loader class="navigation__spinner" v-if="authUserLoad != 2" :loading="true" color="#FFD700" size="2rem"></clip-loader>

            <div v-if="authUser != '' && authUserLoad == 2" class="navigation__account">
                <input type="checkbox" class="navigation__checkbox" id="account_toggle">
                <label for="account_toggle" class="navigation__button">
                    My Account
                    <font-awesome-icon :icon="['fas', 'caret-down']" size="lg" class="u-margin-left-xs"></font-awesome-icon>
                </label>

                <ul class="navigation__account-list">
                    <li class="navigation__account-item"><router-link :to="'/users/' + authUser.id" class="navigation__account-link">Profile</router-link ></li>
                    <li class="navigation__account-item"><router-link :to="'/users/' + authUser.id + '/settings'" class="navigation__account-link">Settings</router-link ></li>
                    <li class="navigation__account-item"><button @click="logout()" class="navigation__account-link">Log Out</button ></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {ClipLoader},
    computed: 
    {
        authUserLoad() {return this.$store.getters.getAuthUserLoad},
        
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

    .navigation
    {
        &__brand
        {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 300;
            width: 27rem;
            height: 41rem;
            background-image: linear-gradient(123.5deg, 
                                    $color-logo-bg 50%,
                                    transparent 50%);
        }

        &__brand-content
        {
            position: absolute;
            top: 0;
            z-index: 400;
        }

        &__brand-name
        {
            display: block;
            width: 20rem;
            margin-left: 1rem;
            margin-top: 2.5rem;
        }

        &__brand-logo
        {
            display: block;
            width: 10rem;
            margin-left: 1rem;
            margin-top: 2rem;
        }

        &__nav
        {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 200;
            width: 100%;
            background-color: $color-secondary-dark;
            border-bottom: 1px solid $color-border-dark;
            height: 5.5rem;
        }

        &__list
        {
            list-style: none;
            display: inline-block;
            width: calc(76% - 27rem);
            position: absolute;
            top: 50%;
            left: 27rem;
            transform: translateY(-50%);
        }

        &__item
        {
            display: inline-block;
            margin: 0 1rem;
        }

        &__link
        {
            &, &:link, &:visited
            {
                display: inline-block;
                text-decoration: none;
                color: inherit;
                font-size: 1.4rem;
                font-weight: 700;
            }

            &:hover, &:active, &:focus
            {
                color: $color-primary;
            }
        }

        &__login
        {
            position: absolute;
            top: 50%;
            right: 2rem;
            transform: translateY(-50%);
        }

        

        &__checkbox
        {
            display: none;
        }

        &__spinner
        {
            position: absolute;
            top: 50%;
            right: 4rem !important;
            left: auto !important;
            transform: translate(-50%, -40%) !important;
        }

        &__button
        {
            position: absolute;
            top: 50%;
            right: 2rem;
            transform: translateY(-50%);

            font-size: 1.4rem;
            font-weight: 700;
            cursor: pointer;

            &:hover
            {
                color: $color-primary;
            }
        }

        &__account-list
        {
            position: absolute;
            top: 5.5rem;
            right: 0;
            width: 20rem;
            height: 0;
            overflow: hidden;
            list-style: none;
            text-align: left;
            background-color: $color-secondary;
            transition: all 200ms;
            border: none;
            box-shadow: none;
        }

        &__account-link
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
        }

        // Checkbox Functionality
        &__checkbox:checked ~ &__account-list
        {
            height: 13rem;
            border-left: 1px solid $color-border-light;
            border-bottom: 1px solid $color-border-light;
            box-shadow: 0 0 10px $color-black;
        }
    }

</style>
