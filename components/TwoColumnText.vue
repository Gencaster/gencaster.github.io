<script setup>
const props = defineProps({
    heading: String,
    text: String,
})
</script>

<template>
    <section>
        <SectionHeading :heading="heading"></SectionHeading>
        <div>{{ text }}</div>
    </section>
</template>

<style lang="scss" scoped>
div {
    width: 100%;

    @include onScreen('tablet-portrait-up') {
        width: $tenColumns;
        column-count: 2;
        column-gap: 20px; // TODO
    }

    @include onScreen('tablet-landscape-up') {
        width: $tenColumns;
    }
}
</style>
