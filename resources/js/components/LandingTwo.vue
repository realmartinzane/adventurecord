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

        <div class="info-container">
            <div 
                class="slide-info">
            </div>
            <div class="info-content"
                :id="'slide_info_0'" 
                :class="{ 'info-active': slide == 0 }" 
                key="slide_info_0">
                <h2>Lorem ipsum dolor sit amet consectetur </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem elit, ac aliquam lorem feugiat at. Aenean ac tincidunt ante. Maecenas ultrices vulputate consequat. Morbi eu nisi nunc.  </p>
                <a href="#">Lorem ipsum</a>
            </div>

            <div class="info-content"
                :id="'slide_info_1'" 
                :class="{ 'info-active': slide == 1 }" 
                key="slide_info_1">
                <h2>This is a text about Lorem Ipsum </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </p>
                <a href="#">Lorem ipsum</a>
            </div>
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
    
    .info-container
    {
        width: 800px;
        height: 1215px;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .slide-info
    {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 1215px 800px 0 0;
        border-color: transparent rgba(0,0,0, 0.75)  transparent transparent;
    }
    .info-content
    {
        position: absolute;
        z-index: 1;
        bottom: 10%;
        right: 5%;
        color: white;
        width: 450px;
        height: 350px;
        padding: 25px;
        opacity: 0;
        text-align: center;
        @include transition(opacity 600ms);
        h2 {font: normal 2.5rem 'Roboto Condensed', sans-serif;}
        p
        {
            font: 300 'Heebo', sans-serif;
            color: rgb(223, 223, 223);
            line-height: 1.75;
        }
        a
        {
            @include transform(translate(-50%, 0));
            padding: 10px 25px;
            background-color: transparent;
            border: 1px solid #DCC458;
            color: #DCC458;
            @include border-radius(4px);
            font: 500 0.8rem 'Roboto Condensed', sans-serif;
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
    .info-active 
    {
        opacity: 1;
        z-index: 2; 
        @include transition(opacity 600ms)
    }
    
</style>