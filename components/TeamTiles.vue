<script setup>
const props = defineProps({
  heading: String,
  tiles: Array,
})
</script>

<template>
  <section>
    <SectionHeading :heading="heading" />
    <div>
      <Tile v-for="tile in tiles" :tile="tile" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

section {
    margin-top: 2rem;

    @include onScreen('tablet-portrait-up') {
        margin-top: 3rem;
    }

    @include onScreen('tablet-landscape-up') {
        margin-top: 5rem;
    }
}

div {
    @include gap;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin-bottom: $spacingS;

    @include onScreen('tablet-portrait-up') {
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: $spacingM;
    }

    @include onScreen('tablet-landscape-up') {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: $spacingL;
    }

}
</style>
