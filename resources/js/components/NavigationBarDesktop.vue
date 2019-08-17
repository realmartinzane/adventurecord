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

            <div class="navigation__account">
                <a href="" class="btn btn--secondary-discord">
                    <font-awesome-icon :icon="['fab', 'discord']" size="lg" class="u-margin-right-sm"></font-awesome-icon>
                    <span>Log in with discord</span>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: 
    {
        AuthProvider(provider) 
        {
            var self = this
            this.$auth.authenticate(provider)
            .then(response =>
            {
                self.SocialLogin(provider,response)
            })
            .catch(err => 
            {
                console.log({err:err})
            });
        },
        
        SocialLogin(provider,response)
        {

            this.$http.post('/sociallogin/'+provider,response)
            .then(response => 
            {
                console.log(response.data)
            })
            .catch(err => 
            {
                console.log({err:err})
            })
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
            padding: .8rem 0;
            background-color: $color-secondary-dark;
            border-bottom: 1px solid $color-border-dark;
        }

        &__list
        {
            list-style: none;
            margin-left: 27rem;
            display: inline-block;
            width: calc(76% - 27rem);
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

        &__account
        {
            display: inline-block;
            width: 22%;
            text-align: right;
        }
    }

</style>
