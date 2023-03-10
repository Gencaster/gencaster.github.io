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
    return queryContent().where({ _path: path }).only(['title']).findOne()
})
</script>

<template>
    <main>
        <!-- <h1>{{ article.title }}</h1> -->
        content
    </main>
</template>



