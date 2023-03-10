<!-- <template>
    <h1>{{ slug }}</h1>
    <template>
      <main>
        <ContentDoc />
      </main>
    </template>
</template>

<script setup>
const { data: news} = await useAsyncData("news", ({params}) => {
    const slug = params.slug;
    return slug;
})
</script> -->

<script setup>
const { path } = useRoute()
console.log(path)

const { data: article } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
    <main>
        <div class="content-container">
            <ContentDoc />
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .content-container {
        width: 100%;

        @include onScreen('tablet-landscape-up') {
            @include margin-h(auto);

            width: $eightColumns;
        }

        p {
            color: red !important;
        }

        & img {
            width: 40%;

            &.border {
                border: 1px solid black;
            }
        }
    }

    img {
        width: 25%;
    }
</style>


