<script setup>
const props = defineProps({
  heading: String,
  items: Array,
})
</script>

<template>
  <section>
    <SectionHeading :heading="heading" />
    <div class="accordion-container">
      <AccordionItem v-for="item in items" :item="item" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
        @include margin-h(auto);

        width: 100%;

        @include onScreen('tablet-portrait-up') {
            width: $tenColumns;
        }

        @include onScreen('macbook-up') {
            width: $eightColumns;
        }
    }

    .accordion-container {
        margin-bottom: 2.5rem;

        @include onScreen('tablet-portrait-up') {
            margin-top: 1.5rem;
            margin-bottom: 3rem;
        }

        @include onScreen('tablet-landscape-up') {
            margin-top: 2.5rem;
            margin-bottom: 5rem;
        }
    }
</style>
