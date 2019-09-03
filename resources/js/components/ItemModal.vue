<template>
    <div class="popup">
        <div class="popup__content">
            <header class="popup__header">
                <h4 class="popup__header-text">Item Information</h4>
                <button class="popup__close" @click="$emit('close')">
                    <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                </button>
            </header>

            <div class="popup__body">
                <div class="popup__left">
                    <img class="popup__img" src="/img/brand/brand_logo_1x.png" alt="Item Image">
                </div>

                <div class="popup__right">
                    <h3 class="popup__name"> {{ data.details.ItemName }}</h3>
                    <p class="popup__description">
                        {{ data.details.ItemDescription }}
                    </p>
                    <div class="popup__info"><span class="popup__label">{{ data.details.StatType }}:</span>{{ data.details.Stats }}</div>
                    <div class="popup__info"><span class="popup__label">Rarity:</span>{{ data.details.ItemRarity }}</div>
                    <div class="popup__info"><span class="popup__label">Class:</span>{{ data.details.ItemClass }}</div>
                    <div class="popup__info"><span class="popup__label">Sell Price:</span>
                    <font-awesome-icon :icon="['fas', 'coins']"></font-awesome-icon>
                    {{ data.details.sell_price_amount }}
                    </div>
                    <div class="popup__info"><span class="popup__label">Level:</span>{{ data.details.LevelRequirement }}</div>
                    <div class="popup__info"><span class="popup__label">Obtainable:</span>{{ data.details.ItemObtainable }}</div>
                </div>
            </div>

            <footer class="popup__footer">
                <button v-if="authUser != '' && authUserLoad == 2" class="btn btn--secondary-gold popup__purchase">
                    Purchase for 
                    <font-awesome-icon :icon="['fas', 'coins']"></font-awesome-icon>
                    {{ data.price_amount }}
                    </button>
                <a v-if="authUser == '' && authUserLoad == 2" href="/login/discord" class="link">Log in to purchase this item</a>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    computed:
    {
        authUserLoad() {return this.$store.getters.getAuthUserLoad()},
        
        authUser() {return this.$store.getters.getAuthUser},
    }
}
</script>