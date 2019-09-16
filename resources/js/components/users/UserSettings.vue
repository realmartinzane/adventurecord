<template>
    <section class="section-user-settings">
        <secondary-header-component>User Settings</secondary-header-component>

        <!--
        <form-component action="#" class="form">
            <div class="form__group">
                <label for="lang" class="form__label">Adventure Cord Language</label>
                <select name="lang" id="lang" class="form__select">
                    <option v-for="(lang, index) in languages" :key="index" :value="lang.value">{{ lang.text }}</option>
                </select>
            </div>
            <div class="form__group u-margin-top-md">
                <button type="submit" class="form__submit btn btn--primary">Submit</button>
            </div>
        </form-component>
        -->
    </section>
</template>

<script>
import FormComponent from '../common/Form.vue'
import SecondaryHeaderComponent from '../common/SecondaryHeader.vue'

export default {
    components: {FormComponent, SecondaryHeaderComponent},
    data(){return{
        languages:
        [
            {text: "English", value: 'en'},
            {text: "Swedish", value: 'se'}
        ],
        id: this.$route.params.id
    }},
    computed:
    {        
        user() {return this.$store.getters.getAuthUser}
    },
    created()
    {
        if(this.user.id != this.id)
            this.$router.replace('/')
        
    }
}
</script>
