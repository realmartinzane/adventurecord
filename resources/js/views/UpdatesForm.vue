<template>
    <main>
        <update-create-component v-if="isCreateRoute"></update-create-component>
        <update-edit-component v-else></update-edit-component>
    </main>
</template>

<script>

import UpdateCreateComponent from '../components/UpdateCreate.vue';
import UpdateEditComponent from '../components/UpdateEdit.vue';

export default {
    components: {UpdateCreateComponent, UpdateEditComponent},
    computed:
    {
        isCreateRoute() {return this.$route.name === 'updates.create'}
    }
}
</script>
