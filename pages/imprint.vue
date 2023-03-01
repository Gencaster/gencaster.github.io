<script setup>
const { data: imprint } = await useAsyncData("imprint", () => {
    return queryContent("/").where({ page: 'imprint' }).findOne();
});
</script>

<template>
    <main>
        <ContentRenderer :value="imprint" tag="section">
             <ContentRendererMarkdown :value="imprint" />
        </ContentRenderer>
    </main>
</template>
