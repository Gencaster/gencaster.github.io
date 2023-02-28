<script setup>
const props = defineProps({
    article: Object,
})
</script>

<template>
    <div class="container">
        <div class="img-container">
            <img :src="article.teaser_img.src" :alt="article.teaser_img.alt">
        </div>
        <h4>
            {{article.title}}
        </h4>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-flow: column nowrap;
        background: $grey;
        gap: 0;
        width: 100%;

        @include onScreen('tablet-portrait-up') {
            width: 40%;
        }
    }

    h4 {
        @include padding-h(2ch);
        @include padding-v(1em);
    }
</style>