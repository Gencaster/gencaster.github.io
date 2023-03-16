<script setup>
defineProps({
  heading: String,
  content: Object,
  color: String,
  img: Object,
})
</script>

<template>
  <section :class="color">
    <div class="text-container">
      <SectionHeading :heading="heading" />
      <ContentRenderer :value="content" tag="div">
        <ContentRendererMarkdown :value="content" />
      </ContentRenderer>
    </div>
    <div v-if="img" class="img-container">
      <img :src="img.src" :alt="img.alt">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

section {
        @include gap;
        @include borderless;
        @include padding-v(2.5rem);

        color: $black;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        @include onScreen('macbook-up') {
            @include padding-v(0);

            flex-direction: row;
        }

        &.blue {
            background-color: $blue;
            color: $white;
        }

        &.green {
            background-color: $green;
        }
    }

    .text-container, .img-container {
        @include padding-v($spacingS);

        width: 100%;

        @include onScreen('tablet-portrait-up') {
            @include padding-v($spacingM);
        }

        @include onScreen('macbook-up') {
            @include padding-v($spacingL);

            width: 50%;
        }
    }

    .img-container {
        @include padding-h(10%);

        @include onScreen('tablet-portrait-up') {
            width: $tenColumns;
        }
    }
</style>
