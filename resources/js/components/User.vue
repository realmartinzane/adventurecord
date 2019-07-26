<template>
    <b-row class="profile">
        <b-col class="profile-left" lg="3" offset-lg="2">
            <div class="img-container mb-3">
                <img src="/img/brand_logo.png">
                <b-button class="adv-btn small-btn mt-2">
                    <font-awesome-icon :icon="['fas', 'cog']" class="mr-1"></font-awesome-icon>
                    Settings
                </b-button>
            </div>
            <div class="info-container">
                <div class="field-group">
                    <div class="short-field"><font-awesome-icon :icon="['fas', 'coins']" class="mr-1"></font-awesome-icon>200</div>
                    <div class="short-field"><font-awesome-icon :icon="['far', 'gem']" class="mr-1"></font-awesome-icon>75</div>
                </div>
                <div class="field-group">
                    <div><font-awesome-icon :icon="['fas', 'campground']" class="mr-1"></font-awesome-icon>RandomGuild</div>
                </div>
                <div class="field-group">
                    <div><div><font-awesome-icon :icon="['far', 'clock']" class="mr-1"></font-awesome-icon>25.07.2019</div></div>
                </div>
            </div>
        </b-col>
        <b-col class="profile-right" lg="7">
            <h1>VampY <span class="banned">Banned</span></h1>
            <sub>ID: 393447523471196160 </sub>
            <div class="stats-box">
                <img src="/img/humania.png" alt="">
                <div class="right">
                    <div>Level</div>
                    <div>17</div
                    ><div class="level-bar"><b-progress :value="25" :striped="true"></b-progress></div>
                </div>
            </div>
            <div class="location-box">
                <div>Current Location:</div>
                <img src="/img/terassyia.png" alt="" class="location">
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import '../../sass/_mixins.scss';

    .profile 
    {
        padding: 150px 0;
        color: white;
    }
    .profile-left
    {
        .img-container
        {
            img
            {
                display: block;
                margin: auto;
                width: 150px;
                height: 150px;
                object-fit: contain;
                background: black;
                outline: 2px solid black;
                border: 4px solid #FFD700;
            }
            button
            {
                display: block;
                margin: auto;
            }
        }
        .info-container
        {
            font-size: 1.1rem;
            text-align: center;
            .field-group 
            {
                div
                {
                    display: inline-block;
                    width: 150px;
                    margin: 5px 0;
                    text-align: left;
                    &.short-field
                    {
                        width: 75px;
                        text-align: left;
                    }
                }
                &:nth-child(2) div {position: relative; right: 6px}
            }
            .fa-coins {color: #FFD700}
            .fa-gem {color: #6755b9}
            .fa-campground {color: #cb4154;}
            .fa-clock {color: #00bfff}
        }
    }
    .profile-right
    {
        h1, sub {margin: 0;}
        .banned
        {
            color: #ec4853;
            font-size: 1rem;
            text-transform: uppercase;
        }
        .stats-box
        {
            margin: 15px 0;
            width: 90%;
            max-width: 800px;
            background: #2e2e36;
            border: 1px solid #3d3d49;
            @include box-shadow(0 0 10px black);
            padding: 20px;
            img
            {
                height: 80px;
                width: 115px;
            }
            .right
            {
                display: inline-block;
                vertical-align: middle;
                width: calc(100% - 120px);
                div {margin: 0;}
                div:nth-child(2)
                {
                    display: inline-block;
                    font-size: 2.5rem;
                    width: 50px;
                    line-height: 1.1;
                    margin-right: 10px;
                }
                .level-bar 
                {
                    display: inline-block;
                    width: calc(100% - 60px);
                }
                .progress-bar {background-color: #FFC107}
            }
        }
        .location-box
        {
            margin: 20px 0;
            width: 90%;
            max-width: 800px;
            div 
            {
                font-size: 1.0rem;
                margin-bottom: 5px;
            }
            img 
            {
                width: 100%;
                border: 1px solid #3d3d49;
                @include box-shadow(0 0 10px black);
            }
        }
    }
</style>
