<template>
    <footer class="footer">
        <p>AdventureCord, Copyright &copy; 2019</p>
        <p>Contact: <a href="mailto:support@adventurecord.com" class="link">support@adventurecord.com</a></p>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

@import '../../../sass/abstracts/_variables.scss';

    .footer
    {
        background: $color-secondary-dark;
        color: $color-gray-light;
        padding: 25px;
        border-top: 1px solid $color-border-light;
        p 
        {
            display: block;
            &:last-child .link {text-transform: none !important}
            
            @media only screen and(min-width: 34.375em)
            {
                display: inline-block;
                width: 49%;
                &:last-child {text-align: right;}
            }

        }
    }
</style>
