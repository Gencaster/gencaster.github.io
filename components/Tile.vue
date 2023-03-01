<script setup>
    const props = defineProps({
        tile: Object,
    })
</script>

<template>
    <div class="tile">
        <h4 v-if="tile.heading"> {{ tile.heading }}</h4>
        <div v-if="tile.img" class="img-container">
            <img :src="tile.img.src" :alt="tile.img.alt">
        </div>
        <ContentRenderer :value="tile" tag="div">
            <ContentRendererMarkdown :value="tile" class="text-container"/>
        </ContentRenderer>
    </div>
</template>

<style lang="scss" scoped>
    .tile {
        @include padding-h(1.2em);
        @include padding-v(1.5em);
        
        width: 100%;
        background-color: $grey;
        margin-bottom: 0;

        @include onScreen('tablet-landscape-up') {
            width: 49%;
        }
    }

    .img-container {
        padding-top: 40%;
        width: 40%;
        position: relative;
        margin-bottom: 0.7rem;

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
        @include fontStyle('largeBodyText');

        color: $blue;
        margin-bottom: 0.5em;
    }
</style>