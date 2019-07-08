<template>
    <div class="carousel-wrapper">
        <b-carousel
            id="landing"
            :interval="3000"
            v-model="slide"
            indicators
            fade
            background="#10121A"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">

            <b-carousel-slide img-src="/img/slide_01.png"></b-carousel-slide>
            <b-carousel-slide img-src="/img/slide_02.png"></b-carousel-slide>
        </b-carousel>

        <div 
            class="slide-card" 
            :id="'slide_card_0'" 
            :class="{ 'card-active': slide == 0 }" 
            key="slide_card_0">
            <h2>Lorem ipsum dolor sit amet consectetur </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem elit, ac aliquam lorem feugiat at. Aenean ac tincidunt ante. Maecenas ultrices vulputate consequat. Morbi eu nisi nunc.  </p>
            <a href="#">Lorem ipsum</a>
        </div>
         <div 
            class="slide-card" 
            :id="'slide_card_1'" 
            :class="{ 'card-active': slide == 1 }" 
            key="slide_card_1">
            <h2>Lorem ipsum dolor sit amet consectetur </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem elit, ac aliquam lorem feugiat at. Aenean ac tincidunt ante. Maecenas ultrices vulputate consequat. Morbi eu nisi nunc.  </p>
            <a href="#">Lorem ipsum</a>
        </div>

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

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';

    .carousel, .carousel-inner {position: relative;}
    .carousel-item
    {
        position: relative;
        height: 750px;
        img
        {
            position:absolute;
            left: 0;
            bottom: 0;
        }
    }
    .carousel-wrapper
    {
        position: relative;
    }
    .slide-card
    {
        width: 450px;
        height: 350px;
        padding: 25px;
        position: absolute;
        z-index: 2;
        top: 50%;
        background-color: rgba(16, 18, 26, 0.8);
        opacity: 0;
        @include transform(translateY(-50%));
        @include transition(opacity 600ms);
        color: white;
        @include box-shadow(0 0 5px rgba(16, 18, 26, 0.8));
        h2 {font: bold 2.5rem 'Roboto Condensed', sans-serif;}
        p
        {
            font-family: 'Open Sans', sans-serif;
            color: rgb(223, 223, 223);
            line-height: 1.75;
        }
        a
        {
            position: absolute;
            bottom: 25px;
            left: 50%;
            @include transform(translate(-50%, 0));
            padding: 10px 25px;
            background-color: transparent;
            border: 1px solid #DCC458;
            color: #DCC458;
            @include border-radius(4px);
            font: bold 0.9rem 'Roboto Condensed', sans-serif;
            text-transform: uppercase;
            @include transition((color 100ms, background-color 100ms));
            &:hover
            {
                text-decoration: none;
                background-color: rgb(201, 179, 80);
                border: 1px solid rgb(201, 179, 80);
                color: white;
            }
        }
    }
    #slide_card_0 {right: 10%}
    #slide_card_1 {left: 10%}
    .card-active 
    {
        opacity: 1; 
        @include transition(opacity 600ms)
    }
</style>