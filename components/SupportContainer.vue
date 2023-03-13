<script setup>
    const props = defineProps({
        heading: String,
        tiles: Array,
    })
</script>

<template>
    <section>
        <SectionHeading :heading="heading"></SectionHeading>
        <SupportItem v-for="tile in tiles" :tile="tile"></SupportItem>
    </section>
</template>
