<template>
    <div :class="{ 'update' : isUpdate }">
        <div class="post">
            <div class="left">
                <img src="/img/brand_logo.png" alt="">
            </div
            ><div class="right">
                <div class="post-header mt-4">
                    <div class="left">
                        <h2>{{ update.title }}</h2>
                        <div class="author">
                            <p>Posted by VampY</p>
                        </div>
                    </div
                    ><div class="right">
                        <div class="date">{{ update.created_date }}</div>
                        <div class="views-count">
                            {{ update.views }}
                            <font-awesome-icon :icon="['far', 'eye']" class="ml-1"></font-awesome-icon>
                        </div>
                    </div>
                </div>
                <div class="post-body mt-4">
                    <p>{{ update.body }}</p>                    
                </div>
                <div class="post-footer mt-3">
                    <div class="left">
                        <b-link v-if="!isUpdate" :to="'/update'" class="adv-link">Continue Reading</b-link>
                    </div
                    ><div class="right">
                        <div class="likes">
                            <div>{{ update.likes }}</div> <font-awesome-icon :icon="['far', 'heart']" class="ml-1"></font-awesome-icon>
                        </div>
                        <div class="share">
                            <font-awesome-icon :icon="['far', 'share-square']" class="ml-2"></font-awesome-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['update'],
    computed:
        {
            isUpdate() {return this.$route.name === 'updates.show'}
        }
}
</script>

<style lang="scss" scoped>
    .update 
    {
        padding: 150px 0;
    }
    
    .hr-lg {width: 880px;}
    .post
    {
        width: 800px;
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
</style>
