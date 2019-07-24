<template>
    <div class="social-links">
        <social-sharing 
            :url="url"
            :title="title"
            :description="description"
            :quote="quote"
            :hashtags="hashtags"
            :twitter-user="twitter_user"
            inline-template>
            <div>
                <network network="email">
                    <font-awesome-icon :icon="['far', 'envelope']" class="mr-1"></font-awesome-icon> Email
                </network>
                <network network="facebook">
                    <font-awesome-icon :icon="['fab', 'facebook']" class="mr-1"></font-awesome-icon> Facebook
                </network>
                <network network="line">
                    <font-awesome-icon :icon="['fab', 'line']" class="mr-1"></font-awesome-icon> Line
                </network>
                <network network="linkedin">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-1"></font-awesome-icon> LinkedIn
                </network>
                <network network="odnoklassniki">
                    <font-awesome-icon :icon="['fab', 'odnoklassniki']" class="mr-1"></font-awesome-icon> Odnoklassniki
                </network>
                <network network="reddit">
                    <font-awesome-icon :icon="['fab', 'reddit']" class="mr-1"></font-awesome-icon> Reddit
                </network>
                <network network="skype">
                    <font-awesome-icon :icon="['fab', 'skype']" class="mr-1"></font-awesome-icon> Skype
                </network>
                <network network="sms">
                    <font-awesome-icon :icon="['far', 'comments']" class="mr-1"></font-awesome-icon> SMS
                </network>
                <network network="telegram">
                    <font-awesome-icon :icon="['fab', 'telegram']" class="mr-1"></font-awesome-icon> Telegram
                </network>
                <network network="twitter">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="mr-1"></font-awesome-icon> Twitter
                </network>
                <network network="vk">
                    <font-awesome-icon :icon="['fab', 'vk']" class="mr-1"></font-awesome-icon> VKontakte
                </network>
                <network network="weibo">
                    <font-awesome-icon :icon="['fab', 'weibo']" class="mr-1"></font-awesome-icon> Weibo
                </network> 
                <network network="whatsapp">
                    <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-1"></font-awesome-icon> Whatsapp
                </network>
            </div>
        </social-sharing>
    </div>
</template>

<script>
export default {
    props: ['url', 'title', 'description', 'quote', 'hashtags', 'twitter_user']
}
</script>

<style lang="scss">

@import '../../sass/_mixins.scss';

    .post-footer .right .share
    {
        .social-links
        {
            position: absolute;
            bottom: 0;
            @media screen and (min-width: 1201px) {left: 40px;}
            @media screen and (max-width: 1200px) {right: 40px;}
            width: 150px;
            background: #10121A;
            @include box-shadow(0 0 10px #10121A);
            border: 1px solid #3d3d49;
            padding: 10px;
            text-align: left;
        }
        span 
        {
            display: block;
            width: 100%;
            padding: 3px;
            color: lightgray;
            svg {font-size: 1.2rem}
            &:hover {background: #212127};
            &:nth-child(2) svg {color: #1B80E4}
            &:nth-child(3) svg {color: #00B900}
            &:nth-child(4) svg {color: #1B80E4}
            &:nth-child(5) svg {color: #FFC518}
            &:nth-child(6) svg {color: #FF9800}
            &:nth-child(7) svg {color: #03ACF8}
            &:nth-child(9) svg {color: #37AEE2}
            &:nth-child(10) svg {color: #03ACF8}
            &:nth-child(11) svg {color: #1F8EEF}
            &:nth-child(12) svg {color: #E6162D}
            &:nth-child(13) svg {color: #5ACF5F}
        }
    }
    
</style>
