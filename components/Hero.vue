<script setup>
    const props = defineProps({
        text: String,
    })
</script>


<template>
    <section class="hero">
        <p>
            {{text}}
        </p>
    </section>
</template>

<style lang='scss' scoped>
.hero {
    @include padding-h(15px);
    @include padding-v(20px);

    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0; // overwrite general layout
    
    @include onScreen('tablet-landscape-up') {
        @include padding-h(15%);
        @include padding-v(10%);
    }
    
    p {
        @include fontStyle('headlineLarger');

        margin-bottom: 0;
        text-align: center;

    }
}
</style>