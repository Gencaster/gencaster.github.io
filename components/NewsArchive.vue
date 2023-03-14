<script setup>
const { data: news } = await useAsyncData('news', () => {
  return queryContent('news').sort({ date: 1 }).find()
})
</script>

<template>
  <section>
    <SectionHeading heading="News" />
    <div class="news-archive-container">
      <NewsArchiveTile v-for="article in news" :article="article" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
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

    .more-link {
        @include fontStyle('largeBodyText');

        background: $grey;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @include onScreen('tablet-portrait-up') {
            width: $twoColumns;
        }

        a {
            @include padding-v(1.5em);
            @include padding-h(5ch);

            @include onScreen('tablet-portrait-up') {
                @include padding-h(2ch);
            }
        }
    }
</style>
