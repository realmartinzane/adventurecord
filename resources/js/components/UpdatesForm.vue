<template>
    <section class="section-update-form">
        <clip-loader v-if="isEditRoute && updateLoad != 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>

        <header v-if="(isEditRoute && updateLoad == 2) || !isEditRoute" class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">{{ isEditRoute ? 'Edit Update' : 'Create a New Update' }}</h2>
        </header>

         <form class="form" v-if="(isEditRoute && updateLoad == 2) || !isEditRoute">
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
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    mixins: [validationMixin],
    components: {ClipLoader},

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

        updateLoad() {return this.$store.getters.getUpdateLoad},

        fetchedUpdate() {return this.$store.getters.getUpdate}
    },

    created()
    {
        if(this.isEditRoute) this.$store.dispatch('fetchUpdate', {id: this.id})
    },
    
    methods:
    {
        /*
        submit()
        {
            event.preventDefault();
            this.$v.form.$touch()
            if (this.$v.form.$anyError) return

            if(!this.isEditRoute)
            {
                this.$store.dispatch('storeUpdate', this.form)
            }
        },

        
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
        */
    }
}
</script>