<script setup>
    const props = defineProps({
        heading: String,
    })
</script>

<template>
    <h2 :id="heading.toLowerCase()">{{ heading }}</h2>
</template>

<style lang="scss" scoped>
h2 {
    @include fontStyle('headline');

    font-weight: normal;
    margin-top: 0;
    margin-bottom: 0.5em;
}
</style>