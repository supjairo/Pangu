<script setup>
import {RouterView} from 'vue-router'
import {useUserStore} from "@/store/userState";

const userStore = useUserStore();

userStore.setMockUser()
userStore.setMockRoles()
userStore.setMockMenus()
</script>

<template>
  <RouterView/>
</template>
<style scoped>
</style>
