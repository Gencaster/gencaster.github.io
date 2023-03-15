<script setup>
const { path } = useRoute()

const { data: article } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
function formatDate(date_string) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  return new Date(date_string).toLocaleDateString('en-US', options)
}
</script>

<template>
  <main class="news-single">
    <div v-if="article" class="content-container">
      <h1>{{ article.title }}</h1>
      <p>
        <time datetime="{article.date}">{{ formatDate(article.date) }}</time>
      </p>
      <ContentDoc />
    </div>
  </main>
</template>

<style lang="scss">
// @import "assets/scss/variables.scss";
// @import "assets/scss/mixins.scss";

.news-single {
    .content-container {
        width: 100%;

        @include onScreen('tablet-landscape-up') {
            @include margin-h(auto);

            width: $eightColumns;
        }

        & img {
            @include margin-v(0.5rem);

            &.border {
                border: 1px solid black;
            }

            @include onScreen('tablet-landscape-up') {
                @include margin-v(1rem);
            }
        }

        h1 {
            @include fontStyle('headline');
        }

        h2 {
            @include fontStyle('headline');

            margin-bottom: 1.5rem;
            font-weight: normal;
        }

        a {
            text-decoration: none;
            cursor: default;
        }

        time {
            color: $darkGrey;
        }
    }
}
</style>
