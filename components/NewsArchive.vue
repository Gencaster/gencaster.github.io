<script setup>
const { data: news } = await useAsyncData('news', () => {
  return queryContent('news').sort({ date: -1 }).find()
})

const filter = ref('All')
const activeTagIndex = ref(0)
const tags = ['All']

news.value.forEach(article => article.tags.forEach((tag) => {
  tag = tag.charAt(0).toUpperCase() + tag.slice(1)
  if (!tags.includes(tag))
    tags.push(tag)
}))

function applyFilter(ev, index) {
  activeTagIndex.value = index
  filter.value = ev.target.dataset.tag
}

const filteredNews = computed(() => {
  if (filter.value === '' || filter.value === 'All')
    return news.value
  else
    return news.value.filter(article => article.tags.includes(filter.value.toLowerCase()))
})

const updateFilter = (tag) => {
  // get index of tags array
  const tagsLowercase = tags.map(tag => tag.toLowerCase())
  const index = tagsLowercase.indexOf(tag)

  activeTagIndex.value = index
  filter.value = tag
  // filter.value = tag
}
</script>

<template>
  <section>
    <div v-if="news">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
          <button :data-tag="tag" :class="{ active: activeTagIndex === index }" @click="applyFilter($event, index)">
            {{ tag }}
          </button>
        </li>
      </ul>
      <SectionHeading heading="News" />
      <div class="news-archive-container">
        <TransitionGroup name="fade">
          <NewsArchiveTile
            v-for="(article, index) in filteredNews" :key="index" :article="article" :show-tags="true"
            counter-ref @clicked-tag="(tag) => updateFilter(tag)"
          />
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // transform: translateX(30px);
}
.news-archive-container {
  @include gap;

  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @include onScreen('tablet-portrait-up') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include onScreen('tablet-landscape-up') {
    grid-template-columns: repeat(3, 1fr);
  }
}

ul {
  padding-left: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  justify-content: center;
  margin-bottom: 1rem;

  @include onScreen('tablet-portrait-up') {
    margin-bottom: 1rem;
  }

  @include onScreen('tablet-landscape-up') {
    margin-bottom: 1rem;
  }

  li {
    @include margin-h(1ch);

    text-decoration: none;
  }

  button {
    color: $darkGrey;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.2;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    background: transparent;
    transition: color 200ms ease-in-out;

    &:hover {
      color: black;
    }

    &.active {
      text-decoration: underline;
    }
  }
}
</style>
