<template>
    <div class="section-landing">
        <carousel 
            class="carousel" 
            :perPage="1"
            :scrollPerPage="false"
            :paginationPosition="'bottom-overlay'"
            :autoplay="true"
            :autoplayHoverPause="false"
            :autoplayTimeout="5000"
            :mouseDrag="false"
            :loop="true"
            :paginationColor="'rgba(255,255,255, .4)'"
            :paginationActiveColor="'rgba(255,255,255, .8)'">

            <slide class="slide">
                <div class="slide__container">
                    <div class="slide__content">
                        <h2 class="slide__title">This is a text about Lorem Ipsum </h2>
                        <p class="slide__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                        <button class="btn btn--primary u-margin-top-sm">Lorem ipsum</button>
                    </div>
                </div>
            </slide>

            <slide class="slide">
                <div class="slide__container">
                    <div class="slide__content">
                        <h2 class="slide__title">Lorem ipsum dolor sit amet consectetur</h2>
                        <p class="slide__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem elit, ac aliquam lorem feugiat at. Aenean ac tincidunt ante. Maecenas ultrices vulputate consequat. Morbi eu nisi nunc. </p>
                        <button class="btn btn--primary u-margin-top-sm">Lorem ipsum</button>
                    </div>
                </div>
            </slide>

            <slide class="slide">
                <div class="slide__container">
                    <div class="slide__content">
                        <h2 class="slide__title">This is a text about Lorem Ipsum </h2>
                        <p class="slide__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                        <button class="btn btn--primary u-margin-top-sm">Lorem ipsum</button>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
export default {
    data(){return{
        sliding: null,
        slide: 0
      }
    },
    methods: {
      onSlideStart(slide) 
      {
        this.sliding = true
      },
      onSlideEnd(slide) 
      {
        this.sliding = false
      }
    }
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';

    .carousel
    {
        margin-top: 5.5rem;
        @media screen and (max-width: 991px) {margin-top: 8rem;}
        height: 80rem;
        @media screen and (max-width: 1400px) {height: 60rem;}
    }

    .VueCarousel-wrapper, .VueCarousel-inner
    {
        height: 100% !important;
    }

    .slide
    {
        user-select: none;
        position: relative;
        background-size: cover;
        background-position: 50% 70%;
        height: 100%;
        &:nth-child(1) 
        {
            background-image: url(/../img/slides/bohemia_small.png);

            @media only screen and (min-width: 60em),
                   (-webkit-min-device-pixel-ratio: 2),
                   (min-resolution: 192dpi)
                   
            {
                background-image: url(/../img/slides/bohemia_large_1x.png);
            }

            @media only screen and (min-width: 60em) and (-webkit-min-device-pixel-ratio: 2), 
                   only screen and (min-width: 60em) and (min-resolution: 192dpi)
            {
                background-image: url(/../img/slides/bohemia_large_2x.png);
            }

        }
        &:nth-child(2)
        {
            background-image: url(/../img/slides/desert_small.png);

            @media only screen and (min-width: 60em),
                   (-webkit-min-device-pixel-ratio: 2),
                   (min-resolution: 192dpi)
                   
            {
                background-image: url(/../img/slides/desert_large_1x.png);
            }

            @media only screen and (min-width: 60em) and (-webkit-min-device-pixel-ratio: 2), 
                   only screen and (min-width: 60em) and (min-resolution: 192dpi)
            {
                background-image: url(/../img/slides/desert_large_2x.png);
            }
        }

        &:nth-child(3)
        {
            background-image: url(/../img/slides/chaiyna_small.png);
            background-position: 50% 30%;

            @media only screen and (min-width: 60em),
                   (-webkit-min-device-pixel-ratio: 2),
                   (min-resolution: 192dpi)
                   
            {
                background-image: url(/../img/slides/chaiyna_large_1x.png);
            }

            @media only screen and (min-width: 60em) and (-webkit-min-device-pixel-ratio: 2), 
                   only screen and (min-width: 60em) and (min-resolution: 192dpi)
            {
                background-image: url(/../img/slides/chaiyna_large_2x.png);
            }
        }

        &__container
        {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 80rem;
            height: 151%;
            @media screen and (max-width: 1400px) 
            {
                width: 60rem;
            }           
            background: linear-gradient(to bottom right, transparent 0%, transparent 50%, rgba(0,0,0, 0.75) 50%, rgba(0,0,0, 0.75) 100%);

            
            @media only screen and (max-width: 62em)
            {
                background: none;
                width: 100%;
                height: 100%;
            }
        }

        &__content
        {
            position: absolute;
            bottom: 10%;
            right: 10%;
            width: 40rem;
            text-align: center;
            @media only screen and (max-width: 87.5em) 
            {
                width: 30rem;
                bottom: 8%;
                right: 8%;
            }

            @media only screen and (max-width: 62em)
            {
                bottom: 50%;
                right: 50%;
                transform: translate(50%, 50%);
                width: 46rem;
                background: rgba($color-black, .75);
                padding: 3rem;
                box-shadow: 0 0 10px $color-black;
            }

            @media only screen and (max-width: 30em)
            {
                width: 35rem !important;
            }
        }

        &__title
        {
            font-size: 4rem;
            line-height: 1.2;
            font-weight: 300;
            margin-bottom: 1rem;
            @media only screen and (max-width: 87.5em) {font-size: 3rem;}
        }

        &__text
        {
            font-size: 1.4rem;
            color: $color-gray-light;

        }
    }
</style>