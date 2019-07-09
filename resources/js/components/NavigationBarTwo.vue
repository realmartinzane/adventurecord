<template>
    <div>
        <nav>
            <div class="brand">
                <div class="content">
                    <img src="/img/brand_name.png">
                    <img src="/img/brand_logo.png">
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


@import '../../sass/_mixins.scss';

    .brand 
    {
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 410px 270px 0 0;
        border-color: #10121A transparent transparent transparent;
        .content
        {
            position: absolute;
            top: 0;
            left: 0;
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
    }
</style>
