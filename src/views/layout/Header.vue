<script setup>
import {useUserStore} from "@/stores/userStore";
import UserMenu from "@/components/UserHelper/UserMenu.vue";
import {shallowRef} from "vue";
import AppMenu from "@/components/AppHelper/AppMenu.vue";
import MsgMenu from "@/components/MsgHelper/MsgMenu.vue";

const userStore = useUserStore();
console.log(userStore);
const {userInfo} = userStore;
const state = shallowRef({
  headerItems: [
    {
      name: "MsgMenu",
      component: MsgMenu
    },
    {
      name: "AppMenu",
      component: AppMenu
    },
    {
      name: "UserMenu",
      component: UserMenu
    }
  ]
})
</script>

<template>
  <!--盘古系统-->
  <div class="header">
    <div class="header-left">
      <img src="@/assets/images/logo.png" alt="logo"/>
<!--      <span>盘古系统</span>-->
    </div>
    <div class="header-right">
      <div class="header-item" v-for="item in state.headerItems" :key="item.name">
        <component :is="item.component" :userInfo="userInfo"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .header-left {
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
      height: 40px;
      margin-right: 10px;
    }

    span {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    .header-item {
      margin-left: 20px;
    }
  }
}
</style>
