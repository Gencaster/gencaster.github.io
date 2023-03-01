<script setup>
const sections = ["Origin", "Techstack", "Team", "Support"]

const { data: about } = await useAsyncData("about", () => {
    return queryContent("about").where({ section: 'origin' }).findOne();
});
</script>

<template>
    <main>
        <SectionNav :sections="sections"></SectionNav>
        <TwoColumnText :heading="about.heading" :text="about.description" />
    </main>
</template>

<style lang="scss" scoped>
</style>