<script setup>
defineProps({
  article: Object,
  showTags: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'clickedTag',
])

const clickedTag = (tag) => {
  emit('clickedTag', tag)
}
</script>

<template>
  <div class="container">
    <NuxtLink :to="article._path" class="news-wrapper">
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
    <div v-if="showTags" class="category-filters">
      <div v-for="(tag, index) in article.tags" :key="index" class="tag" @click="clickedTag(tag)">
        <span class="link">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

.container {
  // background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a.news-wrapper {
  display: flex;
  flex-flow: column nowrap;
  background: $grey;
  gap: 0;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  height: 100%;

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

.category-filters {
  cursor: pointer;
  @include padding-v(0.7em);
  display: flex;
  gap: 0.7em;

  .tag {
    background: $grey;
    display: inline-block;
    padding: 5px 8px 5px 8px;
  }

  span {
    display: inline-block;
    font-style: italic;
  }

  .link {
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}

time {
  display: block;
  color: $darkGrey;
}
</style>
