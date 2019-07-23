<template>
    <b-row class="navbar-mobile">
        <b-navbar>
            <b-navbar-brand href="#">
                <img src="/img/brand.png" alt="">
            </b-navbar-brand>

            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <b-button>
                        <font-awesome-icon :icon="['fab', 'discord']" size="lg" class="mr-1"></font-awesome-icon>
                        <span>Log in</span>
                    </b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </b-row>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';

    .navbar {background-color: #10121A; width: 100%;}
    .navbar-brand {img{height: 50px;}}
    .navbar-nav .nav-item
    {
        margin: 0 10px;
        a
        {
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: bold;
            color: white;
            &:hover, &:active, &:focus {color: #DCC458;}
        }
        button
        {
            text-transform: uppercase;
            background-color: #7289da;
            svg {vertical-align: middle}
        }
        .adv-link 
        {
            border: none; 
            background: transparent;
            font-size: 1.3rem;
            @include transition(all 100ms);
            @include transform(scale(1.4));
            vertical-align: middle;
            &:hover
            {
                @include transform(scale(1.6));
            }
        }

    }

</style>
