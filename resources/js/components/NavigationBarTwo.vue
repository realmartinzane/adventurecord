<template>
    <div>
        <div class="brand">
            <div class="triangle"></div>
                <div class="content">
                    <img src="/img/brand_name.png">
                    <img src="/img/brand_logo.png">
                </div>
            </div>
        <b-navbar>
            <b-navbar-nav>
                <b-nav-item>Home</b-nav-item>
                <b-nav-item>Updates</b-nav-item>
                <b-nav-item>Commands</b-nav-item>
                <b-nav-item>Wiki</b-nav-item>
                <b-nav-item>Marketplace</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <b-button>
                        <font-awesome-icon :icon="['fab', 'discord']" size="lg" class="mr-1"></font-awesome-icon>
                        <span>Log in with discord</span>
                    </b-button>
                    </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


@import '../../sass/_mixins.scss';

    .brand {position: relative}
    .triangle
    {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 410px 270px 0 0;
        border-color: rgb(32, 36, 51) transparent transparent transparent;
    }
    .content
    {
        position: absolute;
        top: 0;
        z-index: 2;
    }
    img
    {
        display: block;
        margin-left: 10px;
        @include transition(all 200ms);
        &:hover
        {
            @include transform(scale(1.1));
        }
        &:nth-child(1)
        {
            margin-top: 25px;
            width: 200px;
            
        }
        &:nth-child(2)
        {
            margin-top: 20px;
            width: 100px;
            height: auto;
        }
    }
    .navbar
    {
        position: absolute;
        top: 0;
        left: 225px;
        background: #10121A;
        width: calc(100% + 45px);
    }
    .navbar-nav
    {
        position: relative;
        left: 45px;
        .nav-item
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
    }
    
</style>
