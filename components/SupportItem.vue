<script setup>
const props = defineProps({
  tile: Object,
})
</script>

<template>
  <div class="support-tile">
    <div class="img-container">
      <img :src="tile.img_src" :alt="tile.img_alt">
    </div>
    <div v-if="tile" class="text-container">
      {{ tile.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

.support-tile {

    @include padding-v(1.5em);
    @include borderless;
    @include gap;

    display: flex;
    align-items: flex-start;
    flex-flow: column nowrap;
    background-color: $grey;

    &:nth-of-type(2n) {
        background-color: $white;
    }

    @include onScreen('tablet-portrait-up') {
        flex-direction: row;
        align-items: center;
    }

    @include onScreen('tablet-landscape-up') {
        gap: $spacingL;
    }
}

.img-container {
    height: 4rem;
    width: auto;
    margin-bottom: 1rem;
    margin-top: 0.5rem;

    @include onScreen('tablet-portrait-up') {
        @include margin-v(0);

        width: 16.666667%;
        padding-right: 1rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.text-container {
    width: 100%;

    @include onScreen('tablet-portrait-up') {
        width: 83.333333%;
    }
}
</style>
