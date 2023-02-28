<script setup>
    const props = defineProps({
        heading: String,
        tiles: Array,
    })
</script>

<template>
    <SectionHeading :heading="heading"></SectionHeading>
    <section>
        <SupportItem v-for="tile in tiles" :tile="tile"></SupportItem>
    </section>
</template>

<style lang="scss" scoped>

</style>