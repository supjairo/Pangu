<script setup>
import {ref, watch} from "vue";

const isShow = ref(false)
watch(() => isShow, (val) => {
  console.log(val)
})
</script>

<template>
  <div @mouseenter="isShow = true" @mouseleave="isShow = false">
    <slot name="trigger"/>
    <div v-show="isShow">
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped>

</style>
