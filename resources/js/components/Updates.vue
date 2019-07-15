<template>
    <section class="updates">
        <div class="section-header" :class="{ 'mt-5' : isUpdates }">
            <h2>{{ isUpdates ? '' : 'Latest' }} Updates</h2>
            <div class="hr-sm"></div>
        </div>
        <div class="posts">
            <div class="hr-lg"></div>
            <update-component></update-component>
            <div class="hr-lg"></div>
            <update-component></update-component>
            <div class="hr-lg"></div>
            <update-component></update-component>
            <div class="hr-lg"></div>
            <div v-if="!isUpdates" class="view-more">
                <b-link>View more updates</b-link>
            </div>
        </div>
    </section>
</template>

<script>
import UpdateComponent from './Update.vue'

export default {
    components: {UpdateComponent},
    computed:
    {
        isUpdates() {return this.$route.name === 'updates'}
    }
}
</script>

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';

    .updates
    {
        padding: 75px 0;
        background: #212127;
        a
            {
                color: #FFD700;
                text-transform: uppercase;
                &:hover {color: #FFD700}
            }
    }
    .section-header
    {
        text-align: center;
        color: white;
        h2 {font: 300 2.25rem'Roboto Condensed', sans-serif;}
    }
    .hr-lg {width: 880px;}
    .posts {margin: 50px 0;}
    .post
    {
        width: 880px;
        margin: auto;
        > .left
        {
            width: 20%;
            display: inline-block;
            text-align: center;
            img
            {
                width: 100px;
                height: 100px;
                background: black;;
                outline: 2px solid black;
                border: 4px solid #FFD700;
                margin: 25px 0;
                padding: 10px;
                
            }
        }
        > .right
        {
            width: 80%;
            display: inline-block;
            vertical-align: top;
        }
    }
    .post-header
    {
        color: white;
        > .left
        {
            width: 80%;
            display: inline-block;
            h2
            {
                font: 1.75rem 'Ruboto Condensed', sans-serif;
            }
        }
        .author
        {
            p 
            {
                margin: 0;
                color: lightgray;
            }
        }
        > .right
        {
            width: 20%;
            display: inline-block;
            vertical-align: top;
            text-align: right;
            .date {color: lightgray;}
            .views-count {font-size: 1.1rem}
        }
    }
    .post-body
    {
        color: lightgray;
        font: 1rem Nunito, sans-serif;
        line-height: 1.5;
    }
    .post-footer
    {
        .left
        {
            width: 25%;
            display: inline-block;
            
        }
        .right
        {
            width: 75%;
            display: inline-block;
            vertical-align: top;
            text-align: right;
            color: white;
            font-size: 1;
            div {display: inline-block;}
            > div 
            {
                margin: 0 5px; 
                &:hover {cursor: pointer;}
            }
            > div * {vertical-align: middle;}
            svg {font-size: 1.2rem}
            .likes {color: #ec4853}
            .share {color: #3CB1B6;}
        }
    }
    .view-more 
    {
        text-align: center;
        font-size: 0.8rem;
    }
    
</style>
