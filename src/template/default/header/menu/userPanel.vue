<script setup>
import AutoHide from "@/components/AutoHide.vue";
import GCard from "@/components/GCard.vue";
import Avatar from "@/components/Avatar.vue";
import AutoLayout from "@/components/AutoLayout.vue";
import {useUserStore} from "@/store/userState";

const {user} = useUserStore();
</script>

<template>
  <auto-hide>
    <template #trigger>
      <AutoLayout mode="horizontal">
        <avatar :size="40" :avatar="user.avatar"></avatar>
        <AutoLayout mode="vertical">
          <span class="fontStyle">
            {{ user.name }}
          </span>
          <span class="fontStyle">
            在线:{{ user.isLogin ? '是' : '否' }}
          </span>
        </AutoLayout>
      </AutoLayout>
    </template>
    <template #content>
      <g-card>
        我是个人中心
      </g-card>
    </template>
  </auto-hide>
</template>

<style scoped>
.fontStyle {
  font-size: 14px;
  font-weight: 500;
}

</style>
