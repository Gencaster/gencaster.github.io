<script setup>
const { data: hero } = await useAsyncData("home", () => {
    return queryContent("home").where({ title: 'hero' }).findOne();
});
</script>


<template>
    <div class="hero">
        <p>
            {{hero.text}}
        </p>
        <p>
            <slot />
        </p>
    </div>
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