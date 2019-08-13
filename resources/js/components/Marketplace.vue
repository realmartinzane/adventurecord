<template>
    <section class="section-marketplace">
        <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">Marketplace</h2>
        </header>

        <form action="#" class="form">
            <div class="form__group">
                <input type="text" class="form__input" id="item" placeholder="Search for items..."
                ><button type="submit" class="form__search">
                    <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
                </button>
            </div>
        </form>

        <div class="u-center-text u-margin-top-md u-margin-bottom-sm">
            <h3 class="heading-tertiary">Popular Items Now</h3>
        </div>

        <div class="row">
            <div class="col-1-of-3">
                <div class="item">
                    <div class="item__left">
                        <img src="/img/brand_logo.png" alt="Item Image" class="item__img">
                    </div>
                    <div class="item__right">
                        <h4 class="item__name">Item Name</h4>
                        <div class="item__info">Class: Mage</div>
                        <div class="item__info">Armor: 24</div>
                    </div>
                </div>
            </div>

            <div class="col-1-of-3">
                <div class="item">
                    <div class="item__left">
                        <img src="/img/brand_logo.png" alt="Item Image" class="item__img">
                    </div>
                    <div class="item__right">
                        <h4 class="item__name">Item Name</h4>
                        <div class="item__info">Class: Mage</div>
                        <div class="item__info">Armor: 24</div>
                    </div>
                </div>
            </div>

            <div class="col-1-of-3">
                <div class="item">
                    <div class="item__left">
                        <img src="/img/brand_logo.png" alt="Item Image" class="item__img">
                    </div>
                    <div class="item__right">
                        <h4 class="item__name">Item Name</h4>
                        <div class="item__info">Class: Mage</div>
                        <div class="item__info">Armor: 24</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--
    <b-row>
        <section-header-component 
            :text="'Marketplace'"
            :spacing="true">
        </section-header-component>
        <b-col cols="10" offset="1" lg="8" offset-lg="2" xl="6" offset-xl="3">
            <b-form class="adv-form">
                <b-input-group>
                    <b-form-input placeholder="Search for items.."></b-form-input>
                    <b-input-group-text slot="append">
                        <b-button class="adv-search">
                            <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
                        </b-button>
                    </b-input-group-text>
                </b-input-group>
            </b-form>
        </b-col>
        <b-col cols="10" offset="1" class="items">
            <h2>Popular Items Now</h2>
            <div class="item-card" @click="showModal = !showModal">
                <div class="left">
                    <img src="/img/brand_logo.png" alt="">
                </div
                ><div class="right">
                    <h3>Item Name</h3>
                    <p>Class: Mage</p>
                    <p>Armor: 24</p>
                </div>
                <b-modal
                    v-model="showModal"
                    modal-class="item-modal"
                    title="Item Information"
                    header-text-variant="light"
                    body-bg-variant="dark"
                    body-text-variant="light"
                    footer-bg-variant="dark"
                    footer-text-variant="light"> 
                    <div class="left">
                    <img src="/img/brand_logo.png" alt="">
                    </div
                    ><div class="right">
                        <h3>Item Name</h3>
                        <p>This is the item description, where you will find more information about the item you are currently viewing.</p>
                    </div>
                    <div class="more-info">
                        <p><span>Armor:</span> 24</p
                        ><p><span>Rarity:</span> Epic</p
                        ><p><span>Class:</span> Mage</p
                        ><p><span>Sell Price:</span> 174</p
                        ><p><span>Level:</span> 17+</p
                        ><p><span>Obtainable:</span> Yes</p>
                    </div>
                    <div slot="modal-footer">
                        <b-button>Purchase</b-button>
                    </div>
                </b-modal>
            </div
            ><div class="item-card">
                <div class="left">
                    <img src="/img/brand_logo.png" alt="">
                </div
                ><div class="right">
                    <h3>Item Name</h3>
                    <p>Class: Mage</p>
                    <p>Armor: 24</p>
                </div>
            </div
            ><div class="item-card">
                <div class="left">
                    <img src="/img/brand_logo.png" alt="">
                </div
                ><div class="right">
                    <h3>Item Name</h3>
                    <p>Class: Mage</p>
                    <p>Armor: 24</p>
                </div>
            </div
            ><div class="item-card">
                <div class="left">
                    <img src="/img/brand_logo.png" alt="">
                </div
                ><div class="right">
                    <h3>Item Name</h3>
                    <p>Class: Mage</p>
                    <p>Armor: 24</p>
                </div>
            </div>

        </b-col>
    </b-row>
    -->
</template>

<script>

export default {
    data(){return{
        showModal: false
    }}
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';

    .form
    {
        &__input
        {
            display: inline-block;
            width: calc(90% - 2px);
            border: none;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            vertical-align: top;
        }

        &__search
        {
            &
            {
                display: inline-block;
                padding: .8rem;
                width: calc(10% - 2px);
                border: 1px solid $color-primary;
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
                font-size: 1.5rem;
                background-color: rgba($color-primary, .8);
                color: $color-secondary-light;
                transition: all 200ms;
                cursor: pointer;
            }

            &:hover, &:active, &:focus
            {
                outline: none;
                background-color: $color-primary;
                border-color: $color-primary;
                
            }
        }
    }

    .item
    {
        background-color: $color-secondary-light;
        border: 1px solid $color-border-light;
        box-shadow: 0 0 1rem $color-primary;
        padding: 1.5rem;
        
        &__left
        {
            display: inline-block;
            height: 6.5rem;
            width: 6.5rem;
            padding: .5rem;
            background: black;
            outline: 1px solid black;
            border: 4px solid #FFD700;
            vertical-align: middle;
        }

        &__img
        {
            width: 100%;
        }

        &__right
        {
            display: inline-block;
            width: calc(100% - 8rem);
            margin-left: 1rem;
            vertical-align: middle;
        }

        &__name
        {
            font-size: 2.3rem;
            font-weight: 400;
        }

        &__info
        {

        }
    }

    

/*
    input::placeholder {color: lightgray;}
    .input-group-text 
    {
        padding: 0;
        background: transparent;
        border: 1px solid #3d3d49;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .adv-search
    {
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: #FFD700;
        color: #10121A;
        padding: 0 10px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .items 
    {
        text-align: center; 
        margin-bottom: 75px;
        h2
        {
            color: white;
        }
    }
    .item-card
    {
        display: inline-block;
        text-align: left;
        width: 100%;
        background: #2e2e36;
        border: 1px solid #3d3d49;
        margin: 15px 0;
        @include box-shadow(0 0 10px black);
        @media screen and (min-width: 480px) {width: 80%; margin: 15px auto;}
        @media screen and (min-width: 860px) {width: calc(50% - 30px); margin: 15px;}
        @media screen and (min-width: 1200px) {width: calc(33% - 30px);}
        @media screen and (min-width: 1600px) {width: calc(25% - 30px);}
        padding: 20px;
        @include transition(all 200ms);
        &:hover
        {
            cursor: pointer;
            @include transform(scale(1.05))
        }
    }
    .item-modal, .item-card
    {
        .left
        {
            display: inline-block;
            height: 65px;
            width: 65px;
            padding: 5px;
            background: black;
            outline: 2px solid black;
            border: 4px solid #FFD700;
            img {width: 100%; height: 100%;}
        }
        .right
        {
            display: inline-block;
            vertical-align: middle;
            width: calc(100% - 85px);
            margin-left: 15px;
            color: white;
            p {margin-bottom: 0;}
        }
    }
    .item-card:nth-child(2) .left {border-color: #9d73d4}
    .item-card:nth-child(3) .left {border-color: #84CEEB}
    .item-card:nth-child(4) .left {border-color: #F76D6D}
    .item-card:nth-child(2) {@include box-shadow(0 0 10px rgb(157, 115, 212));}
    .item-card:nth-child(3) {@include box-shadow(0 0 10px #84CEEB);}
    .item-card:nth-child(4) {@include box-shadow(0 0 10px #F76D6D);}
    .item-card:nth-child(5) {@include box-shadow(0 0 10px #FFD700);}

    .item-modal .modal-content
    {
        header, footer {border: none;}
        header {background-color: #9d73d4;}
        .more-info
        {
            margin-left: 20px;
            @media screen and (min-width: 460px) {margin-left: 85px;}
            margin-top: 25px;
            p 
            {
                display: inline-block;
                width: 50%;
                margin: 5px 0;
                font-size: 1.0rem;
                letter-spacing: .5px;
                span 
                {
                    color: white; 
                    font-weight: bold;
                }
            }
        }
        .modal-footer
        {
            justify-content: center;
            button
            {
                background-color: #9d73d4;
                &:hover
                {
                    background-color: rgb(138, 101, 187);
                }
            }
        }
    }
*/
</style>
