<script setup>
// const sections = ['Origin', 'Techstack', 'Team', 'Support']

const { data: about } = await useAsyncData('about', () => {
  return queryContent('about').where({ section: 'origin' }).findOne()
})

const { data: techstack } = await useAsyncData('techstack', () => {
  return queryContent('about').where({ section: 'techstack' }).findOne()
})

const { data: team } = await useAsyncData('team', () => {
  return queryContent('about', 'team').where({ section: 'team' }).find()
})

const { data: support } = await useAsyncData('support', () => {
  return queryContent('general', 'support').where({ section: 'support' }).find()
})
</script>

<template>
  <main>
    <div v-if="about.heading">
      <PlainText :heading="about.heading" :text="about" />
      <PlainText :heading="techstack.heading" :text="techstack" />
      <TeamTiles heading="Team" :tiles="team" />
      <SupportContainer heading="Support" :tiles="support" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>
