<script setup>
    const props = defineProps({
        tile: Object,
    })
</script>

<template>
    <div class="tile">
        <h4>{{ tile.heading }}</h4>
        <img v-if="tile.img" :src="tile.img.src" :alt="tile.img.alt">
        <div class="text-container">{{ tile.description }}</div>
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
    
    h4 {
        @include fontStyle('largeBodyText');

        color: $blue;
        margin-bottom: 0.5em;
    }
</style>