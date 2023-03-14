<script setup>
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

const props = defineProps({
  item: Object,
})

const isOpen = ref(false)
</script>

<template>
  <div class="accordion">
    <div class="accordion__heading">
      <button class="toggle-button" @click="isOpen = !isOpen">
        <h5>{{ item.heading }}</h5>
        <img src="/arrow/arrow.svg" alt="toggle arrow" :class="{ open: isOpen }">
      </button>
    </div>

    <CollapseTransition :duration="200">
      <div v-show="isOpen" class="accordion__content">
        <ContentRenderer :value="item" tag="div">
          <ContentRendererMarkdown :value="item" class="text-container" />
        </ContentRenderer>
      </div>
    </CollapseTransition>
  </div>
</template>

<style lang="scss">
@import "assets/scss/variables.scss";
@import "assets/scss/mixins.scss";

.accordion {
    width: 100%;
    border-bottom: 1px solid $blue;

    &:first-of-type {
        border-top: 1px solid $blue;
    }

    &__heading {
        height: 4rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        margin: 0;
    }

    &__content {
        @include padding-v(1rem);

        border-top: 1px solid $blue;
    }

    .toggle-button {
        all: unset;
        display: flex;
        cursor: pointer;
        height: 2rem;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        h5 {
            @include fontStyle('largeBodyText');

            color: $blue;
            margin: 0;
            margin-right: 4px;
            display: inline-block;

            @include onScreen('tablet-portrait-up') {
                @include fontStyle('headline');
            }
        }

        img {
            display: inline-block;
            height: 16px;
            width: auto;
        }

        img.open {
            transform: rotate(180deg);
        }

    }

    .text-container {
        p {
            margin-bottom: 0;
        }
    }
}
</style>
