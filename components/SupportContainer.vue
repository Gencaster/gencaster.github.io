<script setup>
defineProps({
  heading: String,
  tiles: Array,
})
</script>

<template>
  <section>
    <SectionHeading :heading="heading" />
    <SupportItem v-for="(tile, index) in tiles" :key="index" :tile="tile" />
  </section>
</template>
