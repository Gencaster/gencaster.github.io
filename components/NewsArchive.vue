<script setup>
const { data: news } = await useAsyncData("news", () => {
    return queryContent("news").limit(2).find();
});
</script>

<template>
    <SectionHeading heading="News"></SectionHeading>
    <div>
        <NewsArchiveTile v-for="article in news" :article="article"></NewsArchiveTile>
        <a href="/news">More</a>
    </div>
</template>

<style lang="scss" scoped>
    div {
        @include gap;

        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        @include onScreen('tablet-portrait-up') {
            flex-direction: row;
        }
    }
</style>
