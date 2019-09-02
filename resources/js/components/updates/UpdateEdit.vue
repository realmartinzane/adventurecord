<template>
    <section class="section-update-form">
        <clip-loader v-if="updateLoad != 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>

        <header v-if="updateLoad == 2" class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">Edit Update</h2>
        </header>

         <form class="form" v-if="updateLoad == 2">
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
        updateLoad() {return this.$store.getters.getUpdateLoad},
        fetchedUpdate() {return this.$store.getters.getUpdate},
        updateStatus() {return this.$store.getters.getUpdateStatus}
    },

    async created()
    {
        try {await this.$store.dispatch('fetchUpdate', {id: this.id})}
        catch(ex) {return}
        finally 
        {
            this.form.title = this.fetchedUpdate.title
            this.form.body = this.fetchedUpdate.body
        }
    },
    
    methods:
    {
        async update()
        {
            let response = await this.$store.dispatch('updateUpdate', {id: this.id, form: this.form})
            if(this.updateStatus == 2)
            {
                this.$router.push('/updates', () =>
                {
                    this.$toast.success(
                        {
                            title:'Success',
                            message: response
                        })
                })
            }
            else if(this.updateStatus == 3)
            {
                this.$toast.error(
                    {
                        title:'Error!',
                        message: response
                    })
            }
        },

        submit()
        {
            event.preventDefault();

            this.$v.form.$touch()

            if (this.$v.form.$anyError) return

            this.update()
        }
    }
}
</script>