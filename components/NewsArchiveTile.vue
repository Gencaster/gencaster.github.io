<script setup>
const props = defineProps({
    article: Object,
})
</script>

<template>
    <div>
        {{article.title}}
    </div>
</template>

<style lang="scss" scoped>
    div {
        background: $grey;
    }
</style>