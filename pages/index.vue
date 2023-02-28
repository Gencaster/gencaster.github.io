<script setup>
const { data: hero } = await useAsyncData("home", () => {
  return queryContent("home").where({ section: 'hero' }).findOne();
});

const { data: features } = await useAsyncData("features", () => {
  return queryContent("home", "features").where({ section: 'features' }).find();
});

const { data: support } = await useAsyncData("support", () => {
  return queryContent("home", "support").where({ section: 'support' }).find();
});


</script>

<template>
  <main>
    <Hero :text="hero.text"></Hero>
    <SectionNav></SectionNav>
    <ColoredBgText heading="General" img_src="/img/spiral.svg" img_alt="Bild"></ColoredBgText>
    <Tiles heading="Features" :tiles="features"></Tiles>
    <NewsArchive></NewsArchive>
    <SupportContainer heading="Support" :tiles="support"></SupportContainer>
  </main>
</template>

<style lang="scss" scoped>
</style>