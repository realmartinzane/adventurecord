<template>
    <section>
        <section-header-component 
            :text="'Create a New Update'"
            :spacing="true">
        </section-header-component>
        <b-form @submit.prevent="store">
            <b-form-group
                id="title-group"
                label="Title"
                label-for="title"
                description="Enter the title of your new update"
                >
                <b-form-input 
                    id="title" 
                    type="text" 
                    v-model="$v.form.title.$model"
                    :state="$v.form.title.$dirty ? !$v.form.title.$error : null">
                </b-form-input>

                <b-form-invalid-feedback id="title-live-feedback">
                    This is a required field and cannot exceed 100 characters.
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
                id="body-group"
                label="Body"
                label-for="body"
                description="Enter the body of your new update"
                >
                <b-form-textarea 
                    id="title" 
                    rows="8" 
                    v-model="$v.form.body.$model"
                    :state="$v.form.body.$dirty ? !$v.form.body.$error : null">
                </b-form-textarea>

                <b-form-invalid-feedback id="body-live-feedback">
                    This is a required field and cannot exceed 2 500 characters.
                </b-form-invalid-feedback>
            </b-form-group>

            <b-button type="submit" class="adv-btn" :disabled="$v.form.$invalid">Submit</b-button>
        </b-form>
    </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

import SectionHeaderComponent from './SectionHeader.vue'

export default {
    mixins: [validationMixin],
    components:
    {
        SectionHeaderComponent
    },
    data(){return{
        form:
        {
            title: null,
            body: null
        }
    }},
    validations:
    {
        form:
        {
            title: {required, maxLength: maxLength(100)},
            body: {required, maxLength: maxLength(2500)}
        }
    },
    methods:
    {
        store()
        {
            this.$v.form.$touch()
            if (this.$v.form.$anyError) return;

            axios.post(`/updates/store`, 
            {
                title: this.form.title,
                body: this.form.body
            })
            .then(({data}) => 
            {
                this.$router.push('/updates', () =>
                {
                    this.$toast.success({
                        title:'Success',
                        message:'Your update has been created.'
                    })
                })
            })
        }
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
                background: #363641;
                @include box-shadow(0 0 5px #363641);
                border: 1px solid #212127;
            }
        }
        button {margin: auto;}
    }
</style>
