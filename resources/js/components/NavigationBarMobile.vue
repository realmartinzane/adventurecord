<template>
    <div class="mobile-navigation">
        <div class="mobile-navigation__brand">
            <img src="/img/brand.png" alt="Brand Image" class="mobile-navigation__brand-img">
        </div>
        
        <nav class="mobile-navigation__nav">

            <input type="checkbox" class="mobile-navigation__checkbox" id="nav_toggle">
            <label for="nav_toggle" class="mobile-navigation__button">
                <span class="mobile-navigation__icon">&nbsp;</span>
            </label>

            <ul class="mobile-navigation__list">
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

    .mobile-navigation
    {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 200;
        width: 100%;
        padding: 1rem;
        background-color: $color-secondary-dark;
        border: 1px solid $color-border-dark;
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
            }
            &:hover, &:focus, &:active
            {
                color: $color-primary;
                background-color: $color-secondary-light;
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
            height: 30rem;
        }
    }

</style>
