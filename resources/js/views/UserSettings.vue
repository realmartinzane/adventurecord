<template>
    <main>
        <user-settings-component></user-settings-component>
        <purchase-history-component></purchase-history-component>
    </main>
</template>

<script>

import UserSettingsComponent from '../components/users/UserSettings.vue'
import PurchaseHistoryComponent from '../components/users/PurchaseHistory.vue'

export default {
    components: {UserSettingsComponent, PurchaseHistoryComponent}
}
</script>
