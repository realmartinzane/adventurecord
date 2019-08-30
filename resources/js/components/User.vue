<template>
    <section class="section-user">
        <clip-loader v-if="profileLoad != 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>
        <div class="u-center-text" v-if="profileLoad == 2 && !user.profile">
            <p>No AdventureCord profile found for this user. Make sure to <a class="link" href="#">use the bot on our server</a> first.</p>
        </div>
        <div class="user-profile" v-if="profileLoad == 2 && user.profile">

            <header class="user-profile__header user-profile__header--sm">
                <h2 class="user-profile__name">
                    {{ user.name }} 
                </h2>
                <p v-if="user.profile.Banned == 'Y'" class="user-profile__ban">Banned for {{ user.profile.BanReason }}</p>
                <sub class="user-profile__id">ID: {{ user.provider_id }} </sub>
            </header>

            <div class="user-profile__left">
                <img :src="user.avatar" alt="Profile Image" class="user-profile__img">
                <router-link :to="{name: 'users.settings', params: {id: user.id}}" class="user-profile__btn btn btn--primary">
                    <font-awesome-icon :icon="['fas', 'cog']" class="mr-1"></font-awesome-icon>
                    Settings
                </router-link>
                <div class="user-profile__info">
                    <div class="user-profile__label" v-tooltip.left="'Experience'">
                        <font-awesome-icon :icon="['fas', 'bolt']" class="user-profile__exp"></font-awesome-icon>
                    </div>
                    <div class="user-profile__data">
                        {{ user.profile.experience_amount }}
                    </div>

                    <div class="user-profile__label" v-tooltip.left="'Gold'">
                        <font-awesome-icon :icon="['fas', 'coins']" class="user-profile__gold"></font-awesome-icon>
                    </div>
                    <div class="user-profile__data">
                        {{ user.profile.gold_amount }}
                    </div>

                    <div class="user-profile__label" v-tooltip.left="'Gems'">
                        <font-awesome-icon :icon="['far', 'gem']" class="user-profile__gems"></font-awesome-icon>
                    </div>
                    <div class="user-profile__data">
                        {{ user.profile.gems_amount }}
                    </div>

                    <div class="user-profile__label" v-tooltip.left="'Guild'">
                        <font-awesome-icon :icon="['fas', 'campground']" class="user-profile__guild"></font-awesome-icon>
                    </div>
                    <div class="user-profile__data">
                        RandomGuild
                    </div>

                    <div class="user-profile__label" v-tooltip.left="'Last Active'">
                        <font-awesome-icon :icon="['far', 'clock']" class="user-profile__activity"></font-awesome-icon>
                    </div>
                    <div class="user-profile__data">
                        {{ user.profile.last_active }}
                    </div>
                </div>
            </div>
            <div class="user-profile__right">
                <header class="user-profile__header user-profile__header--lg">
                    <h2 class="user-profile__name">
                        {{ user.name }} 
                        <span v-if="user.profile.Banned == 'Y'" class="user-profile__ban">Banned for {{ user.profile.BanReason }}</span>
                    </h2>
                    <sub class="user-profile__id">ID: {{ user.provider_id }} </sub>
                </header>
                <div class="user-profile__stats">
                    <div class="user-profile__stats-left">
                        <img :src="'/img/nations/' + user.profile.Nation + '.png'" alt="Humania Logo" class="user-profile__nation">
                    </div>
                    <div class="user-profile__stats-right">
                        <div class="user-profile__level-label">Level</div>
                        <div class="user-profile__level">{{ user.profile.level.level }}</div>
                        <div class="user-profile__progress-bar">
                            <div class="user-profile__progress" :style="{width: user.profile.level.percentage + '%'}"></div>
                        </div>
                    </div>
                </div>

                <div class="user-profile__location">
                    <div class="user-profile__location-label">Current Location:</div>
                    <img :src="'/img/locations/' + user.profile.Location + '.png'" alr="Location Image" class="user-profile__location-img">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {ClipLoader},
    data(){return{
        id: this.$route.params.id,
    }},
    computed:
    {
        userLoad() {return this.$store.getters.getUserLoad},
        
        user() {return this.$store.getters.getUser},

        profileLoad() {return this.$store.getters.getProfileLoad}
    },
    created()
    {
        console.log(this.id)
        this.fetchSingle();
        console.log(this.id)
    },
    methods:
    {
        fetchSingle()
        {
            this.$store.dispatch('fetchUser', {id: this.id})
        },
    }
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';

    .user-profile
    {
        &__header
        {
            &--sm
            {
                display: none;
                @media only screen and (max-width: 30em)
                {
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin: 3rem 0;
                }
            }

            &--lg
            {
                display: block;
                @media only screen and (max-width: 30em)
                {
                    display: none;
                }
            }
        }

        &__left
        {
            display: inline-block;
            width: 30%;
            padding: 3rem 6rem;
            @media only screen and (max-width: 85em)
            {
                padding: 3rem;
            }
            
            @media only screen and (max-width: 41.25em)
            {
                padding: 1rem;
            }

            @media only screen and (max-width: 30em)
            {
                width: 100%;
                margin-bottom: 3rem;
            }
            vertical-align: top;
            text-align: center;
        }

        &__right
        {
            display: inline-block;
            width: 69%;
            padding: 3rem;
            @media only screen and (max-width: 30em)
            {
                width: 100%;
            }
        }

        // Left Styling
        &__img
        {
            width: 12rem;
            height: 12rem;
            
            border: 3px solid $color-black;
            outline: 5px solid $color-primary-dark;
            background-color: $color-black;
        }

        &__btn
        {
            margin-top: 1rem;
            padding: .5rem 1rem !important;
            position: relative;
            z-index: 5000;
            @media only screen and (max-width: 30em)
            {
                display: block !important;
                width: 10rem;
                margin: auto;
                margin-top: 1rem;
            }
        }

        &__info
        {
            @media only screen and (max-width: 30em)
            {
                width: 25rem;
                margin: auto;
            }
            margin-top: 2rem;
        }

        &__label
        {
            display: inline-block;
            width: 25%;
            margin: .5rem 0;
            text-align: left;
            position: relative;
            z-index: 5000;
        }

        &__exp
        {
            color: $color-exp;
        }

        &__gold
        {
            color: $color-primary;
        }

        &__gems
        {
            color: $color-gems;
        }

        &__guild
        {
            color: $color-guild;
        }

        &__activity
        {
            color: $color-activity;
        }

        &__data
        {
            display: inline-block;
            width: 70%;
            text-align: right;
        }

        // Right Styling
        &__name
        {
            font-size: 4rem;
            font-weight: 300;
            line-height: 1;
        }

        &__ban
        {
            font-size: 1.5rem;
            text-transform: uppercase;
            color: $color-red;
        }

        &__id
        {
            font-size: 1.2rem;
            text-transform: uppercase;
        }

        &__stats
        {
            background-color: $color-secondary-light;
            border: 1px solid $color-border-light;
            box-shadow: 0 0 10px $color-black;
            margin: 1.5rem 0;
            padding: 1rem 1.5rem;
        }

        &__stats-left
        {
            display: inline-block;
            width: 10rem;
        }

        &__nation
        {
            width: 100%;
        }

        &__stats-right
        {
            display: inline-block;
            width: calc(100% - 10.5rem);
            vertical-align: top;
        }

        &__level-label
        {
            margin-top: 1rem;
        }

        &__level
        {
            font-size: 4rem;
            line-height: 1;
            display: inline-block;
            min-width: 5.5rem;
        }

        &__progress-bar
        {
            display: inline-block;
            width: calc(100% - 8.5rem);
            height: 2rem;
            background: $color-gray-light;
            border-radius: 3px;
        }

        &__progress
        {
            height: 100%;
            background-image: repeating-linear-gradient(45deg, $color-primary, $color-primary 1rem, #e2c000 1rem, #e2c000 2rem);
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        &__location
        {
            margin: 1.5rem 0;
        }

        &__location-img
        {
            width: 100%;
            height: auto;
            border: 1px solid $color-border-light;
            box-shadow: 0 0 10px $color-black;
        }

    }
</style>
