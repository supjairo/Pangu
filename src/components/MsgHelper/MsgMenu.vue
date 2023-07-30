<script setup>
import {reactive} from "vue";

const state = reactive({
  showMsgMenu: false,
  activeItem: "0",
  msgType: [
    {
      name: "好友",
      count: 0
    },
    {
      name: "系统",
      count: 0
    },
    {
      name: "通知",
      count: 0
    }
  ],
  msgItem: [
    {
      title: '好友1',
      content: '你好',
      time: '2021-08-01 12:00:00',
      count: 0,
      /*已读状态*/
      hasRead: false
    }, {
      title: '好友1',
      content: '你好',
      time: '2021-08-01 12:00:00',
      count: 0,
      /*已读状态*/
      hasRead: false
    }
  ]
})
const handleCommand = () => {
  console.log("handleCommand")
}
</script>

<template>
  <div class="msg-menu" @mouseenter="state.showMsgMenu = true" @mouseleave="state.showMsgMenu = false">
    <img src="@/assets/images/msg.png" alt="menu"/>
    <div class="card" v-show="state.showMsgMenu">
      <div class="msg-type-group">
        <div class="msg-type" v-for="(item, index) in state.msgType" :key="index"
             :class="{'active': state.activeItem === index}" @click="state.activeItem = index">
          <span>{{ item.name }}</span>
          <span class="count">{{ item.count }}</span>
        </div>
      </div>
      <div class="msg-item-client">
        <div class="msg-item" v-for="(item, index) in state.msgItem" :key="index">
          <div class="msg-item-title">
            <span>{{ item.title }}</span>
            <span>{{ item.time }}</span>
          </div>
          <div class="msg-item-content">
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.msg-menu {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fff;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  /*每行三个*/

  .card {
    position: absolute;
    top: 60px;
    right: 0;
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 100;

    .msg-type-group {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .msg-type {
      width: 60px;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 12px;
        color: #999;
      }

      .count {
        font-size: 14px;
        color: #333;
      }

      &.active {
        background-color: #f5f5f5;
      }
    }

    .msg-item-client {
      width: 100%;
      height: 200px;
      overflow-y: auto;

      .msg-item {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #eee;
        cursor: pointer;

        .msg-item-title {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;

          span {
            font-size: 12px;
            color: #999;
          }
        }

        .msg-item-content {
          display: flex;
          justify-content: space-between;

          span {
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
  }
}

</style>
