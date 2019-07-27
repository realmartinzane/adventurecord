<template>
    <b-row class="settings">
        <section-header-component 
            :text="'VampY - Settings'"
            :spacing="true">
        </section-header-component>
        <b-col cols="10" offset="1" lg="8" offset-lg="2" xl="6" offset-xl="3">
            <b-form class="adv-form">
                <b-form-group id="language-group" label="Language:" label-for="language">
                    <b-form-select
                        id="language"
                        :options="languages"
                        value="en"
                        :select-size="3"
                    ></b-form-select>
                </b-form-group>

                <b-button type="submit" class="adv-btn">Submit</b-button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>

import SectionHeaderComponent from './SectionHeader.vue'

export default {
    components: {SectionHeaderComponent},
    data(){return{
        languages:
        [
            {text: "English", value: 'en'},
            {text: "Swedish", value: 'se'}
        ]
    }}
}
</script>

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';

</style>
