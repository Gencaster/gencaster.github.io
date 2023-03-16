<script setup>
defineProps({
  heading: String,
  text: Object,
})
</script>

<template>
  <section>
    <div class="text-container">
      <SectionHeading :heading="heading" />
      <ContentRenderer :value="text" tag="div">
        <ContentRendererMarkdown :value="text" />
      </ContentRenderer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

section {
    @include margin-h(auto);
    color: $black;
    width: 100%;

    @include onScreen('tablet-portrait-up') {
        @include padding-v(0);

        width: $eightColumns;
    }

    @include onScreen('tablet-landscape-up') {
        @include padding-v(0);

        width: $sixColumns;
    }

    @include onScreen('macbook-up') {
        @include padding-v(0);

        width: $fiveColumns;
    }
}
</style>
