<script setup>
const props = defineProps({
    heading: String,
    tiles: Array
});
</script>

<template>
    <section>
        <SectionHeading :heading=heading></SectionHeading>
        <div>
            <Tile v-for="tile in tiles" :tile="tile"></Tile>
        </div>
    </section>
</template>

<style lang="scss" scoped>
div {
    @include gap;

    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin-bottom: $spacingS;

    @include onScreen('tablet-portrait-up') {
        width: $tenColumns;
        margin-bottom: $spacingM;
    }

    @include onScreen('macbook-up') {
        margin-bottom: $spacingL;
    }

}
</style>

