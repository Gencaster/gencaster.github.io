<script setup>
const props = defineProps({
  tile: Object,
})
</script>

<template>
  <div class="tile">
    <div v-if="tile.img" class="img-container">
      <img :src="tile.img.src" :alt="tile.img.alt">
    </div>
    <h4 v-if="tile.heading">
      {{ tile.heading }}
    </h4>
    <p v-if="tile.role" class="role">
      {{ tile.role }}
    </p>
    <ContentRenderer :value="tile" tag="div">
      <ContentRendererMarkdown :value="tile" class="text-container" />
    </ContentRenderer>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

.tile {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        margin-bottom: 0;
        gap: 0;
        justify-content: flex-start;

        @include onScreen('tablet-landscape-up') {
        }

        .role {
            @include margin-v(0);
            @include fontStyle('body');

            color: $darkGrey;
            margin-bottom: 0.7rem;
        }
    }

    .img-container {
        padding-top: 69%;
        width: 100%;
        position: relative;
        margin-bottom: 0.4rem;

        & img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    h4 {
        @include fontStyle('smallHeadline');

        color: $blue;
    }
</style>
