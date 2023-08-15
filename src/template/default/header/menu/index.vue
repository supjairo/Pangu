<script setup>
import {useUserStore} from "@/store/userState";
import AutoLayout from "@/components/AutoLayout.vue";

/*菜单聚合收纳组件*/
const userStore = useUserStore();

const close = () => {

};
</script>

<template>
  <div class="header-menu">
    <AutoLayout mode="horizontal">
      <div v-for="item in userStore.menus" :key="item.id">
        <component :is="item.component" v-if="item.isShow"></component>
      </div>
    </AutoLayout>
  </div>
</template>

<style scoped lang="less">
.header-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 10px;

  .item {
    margin-left: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
