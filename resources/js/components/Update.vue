<template>
    <div :class="{ 'update' : isUpdate }">
        <div class="post">
            <div class="left">
                <img src="/img/brand_logo.png" alt="">
            </div
            ><div class="right">
                <div class="post-header mt-4">
                    <div class="left">
                        <h2>Nunc non cursus massa</h2>
                        <div class="author">
                            <p>Posted by VampY</p>
                        </div>
                    </div
                    ><div class="right">
                        <div class="date">12.07.2019</div>
                        <div class="views-count">
                            278
                            <font-awesome-icon :icon="['far', 'eye']" class="ml-1"></font-awesome-icon>
                        </div>
                    </div>
                </div>
                <div class="post-body mt-4">
                    <p>Nunc non cursus massa. Duis at lacus feugiat, tristique justo quis, ultricies neque. Cras at lacinia tortor. Pellentesque aliquet pretium ligula et placerat. Nam varius vestibulum lorem, pellentesque scelerisque libero congue vel. Duis magna sem, rutrum non condimentum vel, ullamcorper et nibh.</p>                    
                </div>
                <div class="post-footer mt-3">
                    <div class="left">
                        <b-link v-if="!isUpdate" :to="'/update'">Continue Reading</b-link>
                    </div
                    ><div class="right">
                        <div class="likes">
                            <div>93</div> <font-awesome-icon :icon="['far', 'heart']" class="ml-1"></font-awesome-icon>
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
    computed:
        {
            isUpdate() {return this.$route.name === 'update'}
        }
}
</script>

<style lang="scss" scoped>
    .update 
    {
        padding: 150px 0;
        background: #212127;
        min-height: 100%;
    }
    a
    {
        color: #FFD700;
        text-transform: uppercase;
    }
    .hr-lg {width: 880px;}
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
</style>
