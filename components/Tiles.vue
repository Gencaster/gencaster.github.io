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
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        width: 100%;
        margin-bottom: $spacingS;
        
        @include onScreen('tablet-portrait-up') {
            width: 83.33334%; // 10/12
            margin-bottom: $spacingM;
        }

        @include onScreen('macbook-up') {
            margin-bottom: $spacingL;
        }

    }
</style>

