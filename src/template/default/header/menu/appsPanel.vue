<script setup>

import AutoHide from "@/components/AutoHide.vue";
</script>

<template>
  <AutoHide>
    <template #trigger>
      <div class="messagePanel">
        <icon-application-one
            :size="24"
        ></icon-application-one>
      </div>
    </template>
    <template #content>
      <div class="messagePanel">
        <span class="iconfont icon-xiaoxi"></span>
      </div>
    </template>
  </AutoHide>
</template>

<style scoped>

</style>
