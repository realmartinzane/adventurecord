<template>
    <div class="section-header" :class="{ 'mt-5' : spacing }">
        <h2>{{ text }}</h2>
        <div class="hr-sm"></div>
    </div>
</template>

<script>
export default {
    props: ['text', 'spacing']
}
</script>

<style lang="scss" scoped>
    .section-header
    {
        text-align: center;
        color: white;
        h2 {font: 300 2.25rem'Roboto Condensed', sans-serif;}
    }
</style>

