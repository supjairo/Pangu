<script setup>
import {useUserStore} from "@/store/userState";
import User from "@/pages/admin/User.vue";

const userStore = useUserStore();

</script>

<template>
  <div class="header-menu">
    <div class="item" v-for="item in userStore.menus" :key="item.id">
      <component :is="item.component"></component>
    </div>
    <div class="item">
      <user></user>
    </div>
  </div>
</template>

<style scoped>
.header-menu {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
}
</style>
