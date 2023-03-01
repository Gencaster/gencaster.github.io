<script setup>
const sections = ["Origin", "Techstack", "Team", "Support"]

const { data: about } = await useAsyncData("about", () => {
    return queryContent("about").where({ section: 'origin' }).findOne();
});

const { data: techstack } = await useAsyncData("techstack", () => {
    return queryContent("about").where({ section: 'techstack' }).findOne();
});
</script>

<template>
    <main>
        <SectionNav :sections="sections"></SectionNav>
        <TwoColumnText :heading="about.heading" :text="about.description" />
        <ColoredBgText :heading="techstack.heading" :content="techstack.description" :color="techstack.color"/>
    </main>
</template>

<style lang="scss" scoped>
</style>