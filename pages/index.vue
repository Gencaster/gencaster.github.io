<template>
  <main>
      <Hero></Hero>
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