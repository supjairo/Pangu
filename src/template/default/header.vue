<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "default"
  }
})
</script>

<template>
  {{ name }}
</template>

<style scoped>

</style>
