<script export>
let selectedIndex = 0;
let tabs = [];
onMounted(() => {
    tabs = this.$children;
    console.log(tabs)
});
</script>

<template>
    <div>
        <ul class="tabs__header">
            <li v-for="tab in tabs" :key="tab.title">{{ tab.title }}</li>
        </ul>
        <slot></slot>
    </div>
</template>
