<template>
  <div>
    <p class="typo-test">gencaster v3</p>
  </div>
</template>

<style lang="scss" scoped>
p {
  color: blue;

  @include onScreen('phone-only') {
    color: red;
  }

}
</style>