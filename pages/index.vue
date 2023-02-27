<script setup>
  const { data } = await useAsyncData('home', () => queryContent('/').findOne())
  console.log(data)

  const tiles = [{
    "heading": "Generative storytelling",
    "text": "Having the possibility to access properties from the user allows to create new ways of storytelling. E.g. the current date, location or movement can be used to generate a new path of a story or audio composition. Theoretically we can plug any other content generation system into the audio stream."
  },
  {
  "heading": "Generative storytelling",
    "text": "Having the possibility to access properties from the user allows to create new ways of storytelling. E.g. the current date, location or movement can be used to generate a new path of a story or audio composition. Theoretically we can plug any other content generation system into the audio stream."
  },
  {
  "heading": "Generative storytelling",
    "text": "Having the possihe audio stream."
  },
  {
  "heading": "Generative storytelling",
    "text": "Having the possibility to access properties from the ubility to access properties from the user allows to create new ways of storytelling. E.g. the current date, location or movement can be used to generate a new path of a story or audio composition. Theoretically we can plug any other content generation system into tser allows to create new ways of storytelling. E.g. the current date, location or movement can be used to generate a new path of a story or audio composition. Theoretically we can plug any other content generation system into the audio stream."
  },
  {
  "heading": "Generative storytelling",
    "text": "Having the possibility to access properties from the user allows to create new ways of storytelling. E.g. the current date, location or movement can be used to generate a new path of a story or audio composition. Theoretically we can plug any other content generation system into the audio stream."
  }
  ]
</script>

<template>
  <main>
      <Hero></Hero>
      <!-- <Card>
        CARRRD
      </Card> -->
      <ColoredBgText heading="General" img_src="/img/spiral.svg" img_alt="Bild"></ColoredBgText>
      <Tiles heading="Features" :tiles="tiles"></Tiles>
      <Support img_src="/img/miz.png" img_alt="Logo MIZ" text="We are very fortunate to have received the innovation funding by MIZ Babelsberg. They helped support the alpha development of Gencaster 2022 - 2023."></Support>
      <Support img_src="/img/miz.png" img_alt="Logo MIZ" text="We are very fortunate to have received the innovation funding by MIZ Babelsberg. They helped support the alpha development of Gencaster 2022 - 2023."></Support>
      <Support img_src="/img/miz.png" img_alt="Logo MIZ" text="We are very fortunate to have received the innovation funding by MIZ Babelsberg. They helped support the alpha development of Gencaster 2022 - 2023."></Support>
      <SectionNav></SectionNav>
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