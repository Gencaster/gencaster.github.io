<script setup>
    const props = defineProps({
        heading: String,
    })
</script>

<template>
    <h2 :id="heading.toLowerCase()">{{ heading }}</h2>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

h2 {
    @include fontStyle('headline');

    font-weight: normal;
    margin-top: 0;
    margin-bottom: 0.5em;
    scroll-margin-top: $bodyPadding_H;
    
    @include onScreen('tablet-portrait-up') {
        scroll-margin-top: $bodyPaddingM_H;
    }
    
    @include onScreen('macbook-up') {
        scroll-margin-top: $bodyPaddingL_H;
    }
}
</style>