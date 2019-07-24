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
                <b-nav-item-dropdown toggle-class="adv-toggle" right>
                    <template slot="button-content"><font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon></template>
                    <b-dropdown-item>Home</b-dropdown-item>
                    <b-dropdown-item>Updates</b-dropdown-item>
                    <b-dropdown-item>Commands</b-dropdown-item>
                    <b-dropdown-item>Tutorial</b-dropdown-item>
                    <b-dropdown-item>Wiki</b-dropdown-item>
                    <b-dropdown-item>Marketplace</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </b-row>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import '../../sass/_mixins.scss';

    .navbar-mobile
    {
        position: relative;
        z-index: 3;
        .navbar
        {
            position: relative;
            z-index: 2;
            background-color: #10121A; 
            width: 100%;
            }
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
        }
        .dropdown-menu 
        {
            background: #212127;
            .dropdown-item
            {
                padding-top: 7.5px;
                padding-bottom: 7.5px;
                &:hover {background: #2d2d35}
            }
        }
    }

</style>
