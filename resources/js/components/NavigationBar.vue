<template>
    <b-navbar>
        <b-navbar-brand href="#">
            <img src="/img/brand2.png" alt="">
        </b-navbar-brand>

        <b-navbar-nav>
            <b-nav-item>Home</b-nav-item>
            <b-nav-item>Updates</b-nav-item>
            <b-nav-item>Commands</b-nav-item>
            <b-nav-item>Marketplace</b-nav-item>
            <b-nav-item>Wiki</b-nav-item>
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
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

    .navbar {background-color: #10121A;}
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

</style>
