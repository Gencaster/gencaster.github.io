<script setup>
const props = defineProps({
    tile: Object,
})
</script>

<template>
    <div class="support-tile">
        <div class="img-container">
            <img :src="tile.img_src" :alt="tile.img_alt">
        </div>
        <div class="text-container">
            {{ tile.text }}
        </div>
    </div>
</template>
