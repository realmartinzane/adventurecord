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
        .slide-card
        {
            width: 300px;
            height: 300px;
            position: absolute;
            z-index: 2;
            top: 50%;
            background-color: rgba(16, 18, 26, 0.9);
            opacity: 0;
            @include transform(translateY(-50%));
            @include transition(opacity 600ms)
        }
        #slide_card_0 {right: 10%}
        #slide_card_1 {left: 10%}
        .card-active 
        {
            opacity: 1; 
            @include transition(opacity 600ms)
        }
    }
</style>