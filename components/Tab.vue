<script export>
// const props = defineProps({
//     title: String,
//     data() {
//         return { 
//             isActive: true
//         }
//     }
// })
</script>

<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>
