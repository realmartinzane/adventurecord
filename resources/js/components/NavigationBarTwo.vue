<template>
    <b-row>
        <div class="brand">
            <div class="triangle"></div>
                <div class="content">
                    <img src="/img/brand_name.png">
                    <img src="/img/brand_logo.png">
                </div>
            </div>
        <b-navbar>
            <b-navbar-nav>
                <b-nav-item :to="'/'">Home</b-nav-item>
                <b-nav-item :to="'/updates'">Updates</b-nav-item>
                <b-nav-item :to="'/commands'">Commands</b-nav-item>
                <b-nav-item href="https://youtu.be/mTzogDbNAI0" target="_blank">Tutorial</b-nav-item>
                <b-nav-item href="https://adventurecord.fandom.com/wiki/AdventureCord_Wiki" target="_blank">Wiki</b-nav-item>
                <b-nav-item>Marketplace</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav>
                <b-nav-item>
                    <b-button>
                        <font-awesome-icon :icon="['fab', 'discord']" size="lg" class="mr-1"></font-awesome-icon>
                        <span>Log in with discord</span>
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

    .brand {position: relative}
    .triangle
    {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 411px 271px 0 0;
        border-color: #4d4d5c transparent transparent transparent;
    }
    .triangle:before
    {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 410px 270px 0 0;
        border-color: rgb(31, 35, 48) transparent transparent transparent;
        top: -411px;
    }
    .content
    {
        position: absolute;
        top: 0;
        z-index: 4;
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
        left: 0;
        background: #10121A;
        width: 100%;
        z-index: 2;
        border: 1px solid #3d3d49
    }
    .navbar-nav
    {
       &:nth-child(1)
       {
            position: relative;
            left: 250px;
       }
        &:nth-child(2) 
        {
            position: absolute;
            right: 0;
        }
        .nav-item
        {
            margin: 0 10px;
            a
            {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: bold;
                color: white;
                &:hover, &:active, &:focus {color: #FFD700;}
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
