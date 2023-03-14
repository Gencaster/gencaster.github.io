<script setup>
const { data: imprint } = await useAsyncData('imprint', () => {
  return queryContent('/').where({ page: 'imprint' }).findOne()
})
</script>

<template>
  <main v-if="imprint">
    <ContentRenderer :value="imprint" tag="section">
      <ContentRendererMarkdown :value="imprint" />
    </ContentRenderer>
  </main>
</template>

<style lang="scss" scoped>
    main {
        padding-top: 20vh;
        padding-bottom: 35vh;
    }
</style>
