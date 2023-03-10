<script lang="ts" setup>
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

export interface MenuProps {
  data: data
}

export interface data {
  _createdAt: Date
  _id: string
  _rev: string
  _type: string
  _updatedAt: Date
  active: boolean
  addition: string
  location: string
  orderRank: string
  text1: Text1[]
  text2: Text2[]
  text3: string
  title: string
}

export interface Text1 {
  _key: string
  _type: string
  children: Child[]
  markDefs: any[]
  style: string
}

export interface Child {
  _key: string
  _type: string
  marks: any[]
  text: string
}

export interface Text2 {
  _key: string
  _type: string
  children: Child[]
  level: number
  listItem: string
  markDefs: any[]
  style: string
}

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps<MenuProps>()

const isOpen = ref(false)
</script>

<template>
  <div class="job">
    <div class="job-toggle">
      <button class="toggle hairline-underline" @click="isOpen = !isOpen">
        <p>{{ data.location }} — {{ data.title }} {{ data.addition }}</p>
        <img src="/arrows/arrow-down.svg" alt="toggle arrow" :class="{ open: isOpen }">
      </button>
    </div>

    <CollapseTransition>
      <div v-show="isOpen">
        <div class="job-info">
          <div class="left">
            <p class="title">
              Requirements
            </p>
            <ElementsTextContent class="content" :blocks="data.text1" />
          </div>
          <div class="middle">
            <p class="title">
              Description
            </p>
            <ElementsTextContent class="content" :blocks="data.text2" />
          </div>

          <div class="right">
            <p class="title">
              Send Applications to:
            </p>
            <a href="" class="content hairline-underline reverse-link">{{ data.text3 }}</a>
          </div>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<style lang="scss" scoped>
.job {
  width: 100%;
  border-bottom: 1px solid $lightGrey;

  .job-toggle {
    height: calc(2 * $desktop-grid-gap);
    display: flex;
    align-items: center;
    border-bottom: 1px solid $borderGrey;
    border-top: 1px solid $borderGrey;
    box-sizing: border-box;
    margin: 0;
  }

  .toggle {
    all: unset;
    display: flex;
    cursor: pointer;
    height: $desktop-grid-gap;
    align-items: center;
    justify-content: flex-start;

    p {
      margin: 0;
      margin-right: 4px;
      display: inline-block;
    }

    img {
      display: inline-block;
      height: 16px;
      width: auto;
    }

    img.open {
      transform: rotate(180deg);
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .job-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    padding-top: 16px;

    .title {
      text-decoration: underline;
      text-decoration-thickness: 1px !important;
      text-underline-offset: 0.3em;
      margin-bottom: 0.5em;
    }
  }
}
</style>
