<template>
    <b-row class="navbar-mobile">
        <b-navbar>
            <b-navbar-brand :to="'/'">
                <img src="/img/brand.png" alt="">
            </b-navbar-brand>

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown toggle-class="adv-toggle" right>
                    <template slot="button-content"><font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon></template>
                    <!--
                    <b-dropdown-item @click="AuthProvider('discord')">Log in</b-dropdown-item>
                    -->
                    <b-dropdown-item :to="'user'">View Profile</b-dropdown-item>
                    <b-dropdown-item :to="'user/settings'">Settings</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item :to="'/'">Home</b-dropdown-item>
                    <b-dropdown-item :to="'/updates'">Updates</b-dropdown-item>
                    <b-dropdown-item :to="'/commands'">Commands</b-dropdown-item>
                    <b-dropdown-item href="https://youtu.be/mTzogDbNAI0" target="_blank">Tutorial</b-dropdown-item>
                    <b-dropdown-item href="https://adventurecord.fandom.com/wiki/AdventureCord_Wiki" target="_blank">Wiki</b-dropdown-item>
                    <b-dropdown-item :to="'/marketplace'">Marketplace</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </b-row>
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
            .dropdown-divider {border-color: #3d3d49;}
        }
    }

</style>
