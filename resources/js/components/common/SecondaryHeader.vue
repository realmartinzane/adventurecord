<template>
    <header v-if="!classes" class="u-center-text u-margin-bottom-lg" >
        <h2 class="heading-secondary">
            <slot></slot>
        </h2>
    </header>

    <header v-else :class="classes" >
        <h2 class="heading-secondary">
            <slot></slot>
        </h2>
    </header>
    
</template>

<script>
export default {
    props: ['classes']
    
}
</script>

<style lang="scss">

</style>