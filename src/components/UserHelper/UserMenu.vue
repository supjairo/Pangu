<template>
  <div class="user-menu" @mouseenter="state.showUserMenu = true" @mouseleave="state.showUserMenu = false">
    <img :src="userInfo.avatar" alt="avatar"/>
    <div class="card" v-show="state.showUserMenu">
      <div class="card-header">
        <img :src="userInfo.avatar" alt="avatar"/>
        <span>{{ userInfo.name }}</span>
      </div>
      <div class="card-body">
        <div class="card-item">
          <span>用户名</span>
          <span>{{ userInfo.username }}</span>
        </div>
        <div class="card-item">
          <span>邮箱</span>
          <span>{{ userInfo.email }}</span>
        </div>
        <div class="card-item">
          <span>角色</span>
          <span>{{ userInfo.role }}</span>
        </div>
      </div>
      <div class="card-footer">
        <el-button type="primary" size="small">修改密码</el-button>
        <el-button type="danger" size="small">退出登录</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {reactive, toRefs} from "vue";

const props = defineProps({
  userInfo: {
    type: Object,
    default: () => {
    }
  }
})
const {userInfo} = toRefs(props)

const state = reactive({
  showUserMenu: false
})
</script>
<style scoped lang="less">
.user-menu {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fff;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  .card {
    position: absolute;
    top: 60px;
    right: 20px;
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    z-index: 100;

    .card-header {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #eee;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      span {
        font-size: 16px;
        font-weight: bold;
      }
    }

    .card-body {
      padding: 10px;

      .card-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        span {
          font-size: 14px;
          color: #999;
        }
      }
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-top: 1px solid #eee;
    }

    /*伪元素溢出指向箭头*/

    &:after {
      content: '';
      position: absolute;
      top: -20px;
      right: 5px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-bottom-color: #ffffff;
    }
  }
}

</style>
