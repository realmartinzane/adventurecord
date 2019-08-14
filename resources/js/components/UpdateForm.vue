<template>
    <section class="section-update-form">
        <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">{{ isEditRoute ? 'Edit Update' : 'Create a New Update' }}</h2>
        </header>

         <form class="form">
            <div class="form__group">
                <label for="title" class="form__label">Title</label>
                <input
                    type="text" 
                    name="title" 
                    id="title" 
                    class="form__input" 
                    v-model="$v.form.title.$model"
                    :state="$v.form.title.$dirty ? !$v.form.title.$error : null">
                <p class="form__feedback" id="title_feedback" :class="{'u-show': $v.form.title.$error}">This is a required field and cannot exceed 100 characters.</p>
            </div>

            <div class="form__group">
                <label for="body" class="form__label">Body</label>
                <textarea
                    name="body" 
                    id="body" 
                    class="form__textarea"
                    rows="8"
                    v-model="$v.form.body.$model"
                    :state="$v.form.body.$dirty ? !$v.form.body.$error : null">
                </textarea>
                <p class="form__feedback" id="body_feedback" :class="{'u-show': $v.form.body.$error}">This is a required field and cannot exceed 250 characters.</p>
            </div>

            <div class="form__group u-margin-top-md">
                <button type="submit" class="form__submit btn btn--primary" @click="submit">Submit</button>
            </div>
        </form>
    </section>
    <!--
    <b-row class="update-form">
        <div v-if="isEditRoute && !form.title && !form.body" class="spinner"><b-spinner label="Spinning"></b-spinner></div>
        <section-header-component 
            :text="isEditRoute ? 'Edit Update' : 'Create a New Update'"
            :spacing="true">
        </section-header-component>
        <b-col cols="10" offset="1" lg="8" offset-lg="2" xl="6" offset-xl="3">
            <b-form class="adv-form" @submit.prevent="submit" v-if="(isEditRoute && form.title && form.body) || !isEditRoute">
                <b-form-group
                    id="title-group"
                    label="Title"
                    label-for="title"
                    description="Enter the title of your update (Note: Make sure the title is unique)"
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
                    description="Enter the body of your update"
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
        </b-col>   
    </b-row>
    -->
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data(){return{
        form:
        {
            title: null,
            body: null
        },
        id: this.$route.params.id,
    }},
    validations:
    {
        form:
        {
            title: {required, maxLength: maxLength(100)},
            body: {required, maxLength: maxLength(2500)}
        }
    },
    computed:
    {
        isEditRoute() {return this.$route.name === 'updates.edit'},
        endpoint() {return this.isEditRoute ? `/updates/${this.id}/update` : `updates/store`}
    },
    mounted()
    {
        if(this.isEditRoute) this.fetch();
    },
    methods:
    {
        submit()
        {
            event.preventDefault();
            this.$v.form.$touch()
            if (this.$v.form.$anyError)
            {
                if (this.$v.form.title.$dirty) this.$v.form.body.$error = true;
                if (this.$v.form.body.$dirty) this.$v.form.body.$error = true;
                return
            }

            axios.post(this.endpoint, 
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
                        message: data
                    })
                })
            })
            .catch(error =>
            {
                this.$toast.error({
                    title:'Error!',
                    message: 'There was an error. Please try again later.'
                })
            })
        },
        fetch()
        {
            axios.get('/updates/' + this.id )
            .then(({data}) =>
            {
                this.form.title = data.title;
                this.form.body = data.body;
            });
        }
    }
}
</script>