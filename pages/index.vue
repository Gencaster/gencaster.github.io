<template>
  <main>
      <Hero></Hero>
      <SectionNav></SectionNav>
      <ColoredBgText></ColoredBgText>
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