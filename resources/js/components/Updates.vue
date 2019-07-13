<template>
    <div class="updates">
        <div class="section-header">
            <h2>Latest Updates</h2>
            <div class="hr-sm"></div>
        </div>
        <div class="posts">
            <div class="hr-lg"></div>
            <div class="post">
                <div class="left">
                    <img src="/img/brand_logo.png" alt="">
                </div
                ><div class="right">
                    <div class="post-header mt-4">
                        <div class="left">
                            <h2>Lorem ipsum dolor sit amet</h2>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis non lacus ac consectetur. Aliquam lobortis ac velit et vulputate. Maecenas pulvinar eget purus at convallis. Maecenas finibus dolor eu metus blandit, vel lobortis orci viverra...
                    </div>
                    <div class="post-footer mt-3">
                        <div class="left">
                            <b-link>Continue Reading</b-link>
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
            <div class="hr-lg"></div>
            <div class="post">
                <div class="left">
                    <img src="/img/brand_logo.png" alt="">
                </div
                ><div class="right">
                    <div class="post-header mt-4">
                        <div class="left">
                            <h2>Pellentesque aliquam rhoncus finibus</h2>
                            <div class="author">
                                <p>Posted by VampY</p>
                            </div>
                        </div
                        ><div class="right">
                            <div class="date">12.07.2019</div>
                            <div class="views-count">
                                261
                                <font-awesome-icon :icon="['far', 'eye']" class="ml-1"></font-awesome-icon>
                            </div>
                        </div>
                    </div>
                    <div class="post-body mt-4">
                        Pellentesque aliquam rhoncus finibus. Vestibulum vitae arcu tincidunt, porttitor massa eu, euismod lectus. Fusce malesuada magna sit amet lacus feugiat, ac varius odio tristique. Duis ligula quam, efficitur a enim vitae, malesuada maximus leo...
                    </div>
                    <div class="post-footer mt-3">
                        <div class="left">
                            <b-link>Continue Reading</b-link>
                        </div
                        ><div class="right">
                            <div class="likes">
                                <div>88</div> <font-awesome-icon :icon="['far', 'heart']" class="ml-1"></font-awesome-icon>
                            </div>
                            <div class="share">
                                <font-awesome-icon :icon="['far', 'share-square']" class="ml-2"></font-awesome-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hr-lg"></div>
            <div class="post">
                <div class="left">
                    <img src="/img/brand_logo.png" alt="">
                </div
                ><div class="right">
                    <div class="post-header mt-4">
                        <div class="left">
                            <h2>Sed a elit eu lectus porta efficitur a nec ante</h2>
                            <div class="author">
                                <p>Posted by VampY</p>
                            </div>
                        </div
                        ><div class="right">
                            <div class="date">12.07.2019</div>
                            <div class="views-count">
                                342
                                <font-awesome-icon :icon="['far', 'eye']" class="ml-1"></font-awesome-icon>
                            </div>
                        </div>
                    </div>
                    <div class="post-body mt-4">
                        Sed a elit eu lectus porta efficitur a nec ante. Nam metus leo, sollicitudin vitae faucibus et, viverra quis neque. Praesent faucibus sagittis libero, sit amet semper erat tincidunt in. Sed maximus fermentum varius. Aenean pulvinar urna at augue faucibus...
                    </div>
                    <div class="post-footer mt-3">
                        <div class="left">
                            <b-link>Continue Reading</b-link>
                        </div
                        ><div class="right">
                            <div class="likes">
                                <div>108</div> <font-awesome-icon :icon="['far', 'heart']" class="ml-1"></font-awesome-icon>
                            </div>
                            <div class="share">
                                <font-awesome-icon :icon="['far', 'share-square']" class="ml-2"></font-awesome-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hr-lg"></div>
            <div class="view-more">
                <b-link>View more updates</b-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
            .comments {color: #F2B73B;}
            .share {color: #3CB1B6;}
        }
    }
    .view-more 
    {
        text-align: center;
        font-size: 0.8rem;
        }
    
</style>
