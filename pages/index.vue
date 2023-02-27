<script setup>
  const { data } = await useAsyncData('home', () => queryContent('/').findOne())
  console.log(data)
</script>

<template>
  <main>
    <div>{{ data }}</div>
      <ContentDoc path="/"/>
      <Hero></Hero>
      <!-- <Card>
        CARRRD
      </Card> -->
      <SectionNav></SectionNav>
      <ColoredBgText heading="General" img_src="/img/spiral.svg" img_alt="Bild"></ColoredBgText>
  </main>
</template>

<style lang="scss" scoped>
p {
  color: blue;

  @include onScreen('phone-only') {
    color: red;
  }

}
</style>