<script setup>
const props = defineProps({
    tile: Object,
})
</script>

<template>
    <div class="support-tile">
        <div class="img-container">
            <img :src="tile.img_src" :alt="tile.img_alt">
        </div>
        <div class="text-container">
            {{ tile.text }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.support-tile {
    @include padding-v(1em);
    @include borderless;

    display: flex;
    flex-flow: column nowrap;
    gap: $spacingS;
    background-color: $grey;

    &:nth-of-type(2n) {
        background-color: $white;
    }
    
    @include onScreen('tablet-portrait-up') {
        flex-direction: row;
        align-items: center;
        gap: $spacingM;
    }
           
}

.img-container {
    width: 16.666667%;
}

.text-container {
    width: 83.333333%;
}
</style>