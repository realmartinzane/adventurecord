<template>
    <div class="section-landing">
        <carousel 
            class="carousel" 
            :perPage="1"
            :scrollPerPage="false"
            :paginationPosition="'bottom-overlay'"
            :autoplay="true"
            :autoplayHoverPause="false"
            :autoplayTimeout="1000000"
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
        </carousel>
    </div>
    <!--
    <b-row class="landing-row">
        <div class="carousel-wrapper">
            <b-carousel
                id="triangle"
                :interval="5000"
                v-model="slide"
                indicators
                fade
                background="#10121A"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

                <b-carousel-slide class="triangle" img-src="/img/slide_01.png">
                    <div class="info-content"
                        :id="'slide_info_0'" 
                        :class="{ 'info-active': slide == 0 }" 
                        key="slide_info_0">
                        <h2>Lorem ipsum dolor sit amet consectetur </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem elit, ac aliquam lorem feugiat at. Aenean ac tincidunt ante. Maecenas ultrices vulputate consequat. Morbi eu nisi nunc.  </p>
                        <b-button class="adv-btn">Lorem ipsum</b-button>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide class="triangle" img-src="/img/slide_02.png">
                    <div class="info-content"
                        :id="'slide_info_1'" 
                        :class="{ 'info-active': slide == 1 }" 
                        key="slide_info_1">
                        <h2>This is a text about Lorem Ipsum </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                        <b-button class="adv-btn">Lorem ipsum</b-button>
                    </div>
                </b-carousel-slide>
            </b-carousel>

            <b-carousel
                id="rectangle"
                :interval="5000"
                v-model="slide"
                indicators
                fade
                background="#10121A"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

                <b-carousel-slide class="rectangle" img-src="/img/slide_01.png">
                    <div class="info-content"
                        :id="'slide_info_0'" 
                        :class="{ 'info-active': slide == 0 }" 
                        key="slide_info_0">
                        <h2>Lorem ipsum dolor sit amet consectetur </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem elit, ac aliquam lorem feugiat at. Aenean ac tincidunt ante. Maecenas ultrices vulputate consequat. Morbi eu nisi nunc.  </p>
                        <b-button class="adv-btn">Lorem ipsum</b-button>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide class="rectangle" img-src="/img/slide_02.png">
                    <div class="info-content"
                        :id="'slide_info_1'" 
                        :class="{ 'info-active': slide == 1 }" 
                        key="slide_info_1">
                        <h2>This is a text about Lorem Ipsum </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                        <b-button class="adv-btn">Lorem ipsum</b-button>
                    </div>
                </b-carousel-slide>
            </b-carousel>
        </div>
    </b-row>
    -->
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
        position: relative;
        background-size: cover;
        background-position: 50% 70%;;
        height: 100%;
        &:nth-child(1) {background-image: url(/../img/slide_01.png);}
        &:nth-child(2) {background-image: url(/../img/slide_02.png);}

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
            background-color: orangered;
            background: linear-gradient(to bottom right, transparent 0%, transparent 50%, rgba(0,0,0, 0.75) 50%, rgba(0,0,0, 0.75) 100%);
        }

        &__content
        {
            position: absolute;
            bottom: 10%;
            right: 10%;
            width: 40rem;
            text-align: center;
            @media screen and (max-width: 1400px) 
            {
                width: 30rem;
                bottom: 8%;
                right: 8%;
            }
        }

        &__title
        {
            font-size: 4rem;
            line-height: 1.2;
            font-weight: 300;
            margin-bottom: 1rem;
            @media screen and (max-width: 1400px) {font-size: 3rem;}
        }

        &__text
        {
            font-size: 1.4rem;
            color: $color-gray-light;

        }
    }

/*
    .landing-row {min-height: auto !important}
    @media screen and (max-width: 1200px)
    {
        .carousel-wrapper {height: 800px;}
        .carousel, .carousel-inner, .carousel-item {height: 100%;}
        .carousel-item img {width: 100%; height: 100%; object-fit: cover}
    }
    #triangle 
    {
        display: none;
        @media screen and (min-width: 1200px) {display: block;}
    }
    #rectangle 
    {
        display: block;
        @media screen and (min-width: 1200px) {display: none;}
    }
    .triangle .carousel-caption
    {
        height: 135%;
        width: 50%;
        padding: 0;
        position: absolute;
        bottom: 0;
        right: 0;
        left: auto;
        background: linear-gradient(to bottom right, transparent 0%, transparent 50%, rgba(0,0,0, 0.75) 50%, rgba(0,0,0, 0.75) 100%);
        .info-content
        {
            position: absolute;
            left: 38%;
            bottom: 7.5%;
            width: 500px;
            height: 375px;
            @media screen and (max-width: 1600px) {width: 450px; height: 350px;}
            @media screen and (max-width: 1440px) {position: absolute; left: 32.5%; bottom: 0}
            @media screen and (max-width: 1300px) {position: absolute; left: 29%; bottom: -2.5%}
            h2
            {
                font-size: 3.0rem;
                @media screen and (max-width: 1600px) {font-size: 2.5rem}
                @media screen and (max-width: 1440px) {font-size: 2.0rem}
            }
            p
            {
                font-size: 1.0rem;
                @media screen and (max-width: 1600px) {font-size: 0.9rem}
            }
        }
    }

    .rectangle .carousel-caption
    {
        height: 100%;
        width: 100%;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: auto;
        background: rgba(0,0,0, 0.5);
        .info-content
        {
            position: absolute;
            bottom: 20%;
            left: 50%;
            margin-left: -225px;
            height: 350px;
            width: 450px;
            h2, p {text-shadow: 1px 1px 2px black;}
            @media screen and (max-width: 420px) 
            {
                padding: 15px;
                width: 330px;
                height: 400px;
                margin-left: -165px;
            }
        }
    }
    
    .info-content
    {
        
        color: white;
        padding: 25px;
        text-align: center;
        opacity: 1;
        @include transition(opacity 600ms);
        
        h2 {font: normal 'Roboto Condensed', sans-serif;}
        p
        {
            font: 300 'Heebo', sans-serif;
            color: rgb(223, 223, 223);
            line-height: 1.75;
        }
    }
    .info-active 
    {
        opacity: 1;
        z-index: 2; 
        @include transition(opacity 600ms)
    }
*/
    
</style>