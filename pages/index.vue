<script setup>
const { data: hero } = await useAsyncData("home", () => {
  return queryContent("home").where({ section: 'hero' }).findOne();
});

const { data: general } = await useAsyncData("general", () => {
  return queryContent("home").where({ section: 'general' }).findOne();
});

const { data: features } = await useAsyncData("features", () => {
  return queryContent("home", "features").where({ section: 'features' }).find();
});

const { data: support } = await useAsyncData("support", () => {
  return queryContent("general", "support").where({ section: 'support' }).find();
});

const sections = ["General", "Features", "Editor", "News", "Support"]


</script>

<template>
  <main>
    <Hero :text="hero.text"></Hero>
    <SectionNav :sections="sections"></SectionNav>
    <ColoredBgText :heading="general.heading" :content="general" :img="general.img" :color="general.color"/>
    <FeatureTiles heading="Features" :tiles="features"></FeatureTiles>
    <NewsArchivePreview />
    <SupportContainer heading="Support" :tiles="support"></SupportContainer>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 0; // bc hero
}
</style>