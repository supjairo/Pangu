<script setup>
import {ref} from 'vue'

const state = ref([
  {
    id: 1,
    name: '热点',
    path: 'social'
  },
  {
    id: 2,
    name: '商城',
    path: '/game'
  },
  {
    id: 3,
    name: '直播',
    path: '/live'
  }, {
    id: 4,
    name: '音乐',
    path: 'music'
  },
  {
    id: 5,
    name: '电影',
    path: '/movie'
  }, {
    id: 6,
    name: '我的财富',
    path: '/wealth'
  },
  {
    id: 7,
    name: '我的收藏',
    path: '/collect'
  }, {
    id: 8,
    name: '我的关注',
    path: '/attention'
  },
  {
    id: 9,
    name: '市场',
    path: '/market'
  }, {
    id: 10,
    name: '我的企业',
    path: '/enterprise'
  }
])

</script>

<template>
  <div class="top_bar">
    <div class="item" v-for="item in state" :key="item.id">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.top_bar {
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;

  .item {
    font-size: 14px;
    color: #333;
    cursor: pointer;

    &:hover {
      color: #1890ff;
    }
  }
}
</style>
