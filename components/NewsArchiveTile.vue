<script setup>
const props = defineProps({
  article: Object,
  width: String,
})
</script>

<template>
  <a :href="article._path" class="container" :class="width">
    <div class="img-container">
      <img :src="article.teaser_img.src" :alt="article.teaser_img.alt">
    </div>
    <h4>
      {{ article.title }}
    </h4>
  </a>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

a.container {
        display: flex;
        flex-flow: column nowrap;
        background: $grey;
        gap: 0;
        width: 100%;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }

    }

    .img-container {
        padding-top: 69%;
        position: relative;

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
        @include padding-h(2ch);
        @include padding-v(0.5em);
    }
</style>
