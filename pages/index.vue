<script setup>

// const { data: news } = await useAsyncData("news", () => {
//   return fetchContentNavigation(queryContent("news"));
// });



const { data: features } = await useAsyncData("features", () => {
  return queryContent("home", "features").where({ section: 'features' }).find();
});


</script>

<template>
  <!-- <pre>{{ hero }}</pre> -->
  <main>
    <!-- <Hero :text="hero.text"></Hero> -->
    <Hero></Hero>
    <!-- <Card>
          CARRRD
        </Card> -->
    <ColoredBgText heading="General" img_src="/img/spiral.svg" img_alt="Bild"></ColoredBgText>
    <Tiles heading="Features" :tiles="features"></Tiles>
    <Support img_src="/img/miz.png" img_alt="Logo MIZ"
      text="We are very fortunate to have received the innovation funding by MIZ Babelsberg. They helped support the alpha development of Gencaster 2022 - 2023.">
    </Support>
    <Support img_src="/img/miz.png" img_alt="Logo MIZ"
      text="We are very fortunate to have received the innovation funding by MIZ Babelsberg. They helped support the alpha development of Gencaster 2022 - 2023.">
    </Support>
    <Support img_src="/img/miz.png" img_alt="Logo MIZ"
      text="We are very fortunate to have received the innovation funding by MIZ Babelsberg. They helped support the alpha development of Gencaster 2022 - 2023.">
    </Support>
    <SectionNav></SectionNav>
  </main>
</template>

<style lang="scss" scoped>
</style>