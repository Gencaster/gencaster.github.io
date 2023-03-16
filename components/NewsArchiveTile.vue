<script setup>
defineProps({
  article: Object,
})
</script>

<template>
  <NuxtLink :to="article._path" class="container">
    <div class="img-container">
      <img :src="article.teaser_img.src" :alt="article.teaser_img.alt">
    </div>
    <div class="title-container">
      <time :datetime="article.date">{{ formatDate(article.date) }}</time>
      <h4>
        {{ article.title }}
      </h4>
    </div>
  </NuxtLink>
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

            time {
              color: $black;
            }
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

    .title-container {
        @include padding-h(2ch);
        @include padding-v(0.7em);
    }

    time {
      display: block;
      color: $darkGrey;
    }
</style>
