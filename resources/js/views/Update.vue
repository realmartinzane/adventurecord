<template>
    <main>
        <section class="section-update">
            <secondary-header-component v-if="updateLoad == 2">Update</secondary-header-component>
            <clip-loader v-if="updateLoad != 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>
            <update-component v-if="updateLoad == 2" :update="update"></update-component>
        </section>
    </main>
</template>

<script>

import UpdateComponent from '../components/updates/Update.vue'
import SecondaryHeaderComponent from '../components/common/SecondaryHeader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {UpdateComponent, SecondaryHeaderComponent, ClipLoader},
    data(){return{
        id: this.$route.params.id
    }},
    computed: 
    {
        update() {return this.$store.getters.getUpdate},
        
        updateLoad() {return this.$store.getters.getUpdateLoad},
    },
    created()
    {
        this.fetchUpdate();
    },
    methods:
    {
        fetchUpdate()
        {
            this.$store.dispatch('fetchUpdate', {id: this.id});
        },
    }
}
</script>
