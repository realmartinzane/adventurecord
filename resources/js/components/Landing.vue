<template>
    <b-row>
        <div class="carousel-wrapper">
            <b-carousel
                id="landing"
                :interval="5000"
                v-model="slide"
                indicators
                fade
                background="#10121A"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

                <b-carousel-slide class="triangle-caption" img-src="/img/slide_01.png">
                    <div class="info-content"
                        :id="'slide_info_0'" 
                        :class="{ 'info-active': slide == 0 }" 
                        key="slide_info_0">
                        <h2>Lorem ipsum dolor sit amet consectetur </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor sem elit, ac aliquam lorem feugiat at. Aenean ac tincidunt ante. Maecenas ultrices vulputate consequat. Morbi eu nisi nunc.  </p>
                        <b-button class="adv-btn">Lorem ipsum</b-button>
                    </div>
                </b-carousel-slide>
                <b-carousel-slide class="triangle-caption" img-src="/img/slide_02.png">
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

@import '../../sass/_mixins.scss';

    .carousel-caption
    {
        height: 135%;
        width: 50%;
        padding: 0;
        position: absolute;
        bottom: 0;
        right: 0;
        left: auto;
        background: linear-gradient(to bottom right, transparent 0%, transparent 50%, rgba(0,0,0, 0.75) 50%, rgba(0,0,0, 0.75) 100%);
    }
    
    .info-content
    {
        position: absolute;
        left: 38%;
        bottom: 7.5%;
        color: white;
        width: 500px;
        height: 375px;
        padding: 25px;
        text-align: center;
        opacity: 1;
        @include transition(opacity 600ms);
        @media screen and (max-width: 1600px) {width: 450px; height: 350px;}
        @media screen and (max-width: 1440px) {position: absolute; left: 32.5%; bottom: 0}
        @media screen and (max-width: 1300px) {position: absolute; left: 29%; bottom: -2.5%}
        h2 
        {
            font: normal 3.0rem 'Roboto Condensed', sans-serif;
            @media screen and (max-width: 1600px) {font-size: 2.5rem}
            @media screen and (max-width: 1440px) {font-size: 2.0rem}
        }
        p
        {
            font: 300 1.0rem 'Heebo', sans-serif;
            color: rgb(223, 223, 223);
            line-height: 1.75;
            @media screen and (max-width: 1600px) {font-size: 0.9rem}
        }
    }
    .info-active 
    {
        opacity: 1;
        z-index: 2; 
        @include transition(opacity 600ms)
    }
    
</style>