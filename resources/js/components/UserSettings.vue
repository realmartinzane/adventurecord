<template>
    <section class="section-user-settings">
        <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">User Settings</h2>
        </header>

        <form action="#" class="form">
            <div class="form__group">
                <label for="lang" class="form__label">Adventure Cord Language</label>
                <select name="lang" id="lang" class="form__select">
                    <option v-for="(lang, index) in languages" :key="index" :value="lang.value">{{ lang.text }}</option>
                </select>
            </div>
            <div class="form__group u-margin-top-md">
                <button type="submit" class="form__submit btn btn--primary">Submit</button>
            </div>
        </form>
    </section>
</template>

<script>

export default {
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

@import '../../sass/abstracts/_variables.scss';

    .form
    {
        &__group 
        {
            width: 50%;
            margin: auto;
        }

        &__label
        {
            display: block;
        }

        &__select
        {
            width: 100%;
            background-color: $color-secondary-light;
            border: 1px solid $color-border-dark;
            border-radius: 3px;
            padding: 1rem;
            color: $color-gray-light;
        }

        &__submit 
        {
            display: block;
            margin: auto;
        }
    }

</style>
