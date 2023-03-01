<script setup>
const { data: news } = await useAsyncData("news", () => {
    return queryContent("news").limit(2).find();
});
</script>

<template>
    <section>
        <SectionHeading heading="News"></SectionHeading>
        <div class="news-archive-container">
            <NewsArchiveTile v-for="article in news" :article="article"></NewsArchiveTile>
            <div class="more-link">
                <a href="/news">More</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .news-archive-container {
        @include gap;

        display: grid;
        grid-template-columns: 5fr 5fr 2fr;
        justify-content: space-between;

        @include onScreen('tablet-portrait-up') {
            flex-direction: row;
        }
    }

    .more-link {
        @include fontStyle('largeBodyText');
        
        background: $grey;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        a {
            @include padding-v(1.5em);
            @include padding-h(5ch);
            
            @include onScreen('tablet-portrait-up') {
                @include padding-h(2ch);
            }
        }
    }
</style>
