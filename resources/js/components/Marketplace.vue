<template>
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
    </b-row>
</template>

<script>

import SectionHeaderComponent from './SectionHeader.vue'

export default {
    components: {SectionHeaderComponent}
}
</script>

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';
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
</style>
