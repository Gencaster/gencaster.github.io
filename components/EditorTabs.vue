<script setup>
import { Tab, Tabs } from 'vue3-tabs-component'

const props = defineProps({
  items: Array,
  text: Object,
})
</script>

<template>
  <section>
    <SectionHeading heading="Editor" />
    <ContentRenderer :value="text" tag="div">
      <div class="editor-text">
        <ContentRendererMarkdown v-if="text" :value="text" />
      </div>
    </ContentRenderer>
    <div class="editor-tabs">
      <Tabs>
        <Tab v-for="item in items" :name="item.title">
          <div class="tab-content-container">
            <img :src="item.img.src" :alt="item.img.alt">
          </div>
        </Tab>
      </Tabs>
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

.editor-text {
        width: 100%;
        margin-bottom: 3rem;

        @include onScreen('tablet-portrait-up') {
            width: $tenColumns;
            column-count: 2;
            column-gap: 20px; // TODO
            margin-bottom: 4rem;
        }

        @include onScreen('tablet-landscape-up') {
            margin-bottom: 5rem;
            width: $tenColumns;
        }
    }

    .editor-tabs {
        ul.tabs-component-tabs {
            display: flex;
            flex-flow: row wrap;
            margin-bottom: 0.7rem;
            padding-left: 0;
        }

        li {
            color: $darkGrey;
            margin-right: 1.5ch;
            list-style: none;

            &.is-active {
                color: $black;
            }
        }

        a {
            text-decoration: none;
        }

        .tab-content-container {
            width: 100%;
            height: auto;
            background: $grey;

            @include onScreen('tablet-portrait-up') {
                width: auto;
                height: 50vh;
            }

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
    }
</style>
