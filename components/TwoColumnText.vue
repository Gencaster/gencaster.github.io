<script setup>
defineProps({
  heading: String,
  text: Object,
})
</script>

<template>
  <section>
    <SectionHeading v-if="heading" :heading="heading" />
    <ContentRenderer :value="text" tag="div">
      <ContentRendererMarkdown :value="text" />
    </ContentRenderer>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

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
