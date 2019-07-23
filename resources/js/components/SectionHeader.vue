<template>
    <b-col cols="12" class="section-header text-center" :class="{ 'spacing' : spacing }">
        <h2>{{ text }}</h2>
        <div class="hr-sm"></div>
    </b-col>
</template>

<script>
export default {
    props: ['text', 'spacing']
}
</script>

<style lang="scss" scoped>
    .section-header
    {
        color: white;
        h2 {font: 300 2.25rem'Roboto Condensed', sans-serif;}
    }
    .spacing {margin-top: 125px;}
</style>

