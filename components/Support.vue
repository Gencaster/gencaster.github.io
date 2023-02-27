<script setup>
    const props = defineProps({
        text: String,
        img_src: String,
        img_alt: String,
    })
</script>

<template>
<section>
    <div class="img-container">
        <img :src="img_src" :alt="img_alt">
    </div>
    <div class="text-container">
        {{ text }}
    </div>
</section>
</template>

<style lang="scss" scoped>
section {
    @include padding-v(1em);

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