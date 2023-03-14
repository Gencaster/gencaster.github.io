<script setup>
const { data: hero } = await useAsyncData('home', () => {
  return queryContent('home').where({ section: 'hero' }).findOne()
})

const { data: general } = await useAsyncData('general', () => {
  return queryContent('home').where({ section: 'general' }).findOne()
})

const { data: features } = await useAsyncData('features', () => {
  return queryContent('home', 'features').where({ section: 'features' }).find()
})

const { data: editor_text } = await useAsyncData('editor_text', () => {
  return queryContent('home', 'editor').where({ title: 'Editor' }).findOne()
})

const { data: editor_tabs } = await useAsyncData('editor_tabs', () => {
  return queryContent('home', 'editor', 'tabs').where({ section: 'editor' }).find()
})

const { data: support } = await useAsyncData('support', () => {
  return queryContent('general', 'support').where({ section: 'support' }).find()
})

const sections = ['General', 'Features', 'Editor', 'News', 'Support']
</script>

<template>
  <main>
    <div v-if="hero.text">
      <Hero :text="hero.text" />
      <SectionNav :sections="sections" />
      <ColoredBgText :heading="general.heading" :content="general" :img="general.img" :color="general.color" />
      <FeatureAccordion heading="Features" :items="features" />
      <EditorTabs :text="editor_text" :items="editor_tabs" />
      <NewsArchivePreview />
      <SupportContainer heading="Support" :tiles="support" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 0; // bc hero
}
</style>
