<template>
    <section>
        <section-header-component 
            :text="'Create a New Update'"
            :spacing="true">
        </section-header-component>
        <b-form>
            <b-form-group
                id="title-group"
                label="Title"
                label-for="title"
                description="Enter the title of your new update"
                >
                <b-form-input id="title" type="text"></b-form-input>
            </b-form-group>

            <b-form-group
                id="body-group"
                label="Body"
                label-for="body"
                description="Enter the body of your new update"
                >
                <b-form-textarea id="title" rows="8"></b-form-textarea>
            </b-form-group>

            <b-button type="submit" class="adv-btn">Submit</b-button>
        </b-form>
    </section>
</template>

<script>
import SectionHeaderComponent from './SectionHeader.vue'

export default {
    components:
    {
        SectionHeaderComponent
    }
}
</script>

<style lang="scss" scoped>

@import '../../sass/_mixins.scss';

    section
    {
        padding: 75px 0;
    }
    form
    {
        text-align: center;
        width: 880px;
        margin: 50px auto;
        color: white;
        font-size: 1.2rem;
        .form-group {text-align: left;}
        .form-control {color: lightgray;}
        input, textarea
        {
            background: #33333b;
            border: 1px solid #3d3d49;
            @include box-shadow(0 0 5px #000);
            &:focus 
            {
                background: #3d3d49;
                @include box-shadow(0 0 5px #3d3d49);
                border: 1px solid #212127;
            }
        }
        button {margin: auto;}
    }
</style>
