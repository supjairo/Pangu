<script setup>
import Menu from "./menu/index.vue";
</script>

<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-logo">
        <img src="../common/images/logo.png"/>
      </div>
      <div class="header-left-title">
        <span>通用</span>
      </div>
    </div>
    <div class="header-center">
    </div>
    <div class="header-right">
      <Menu/>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .header-left {
    display: flex;
    flex-direction: row;
    align-items: center;

    .header-left-logo {
      height: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .header-left-title {
      margin-left: 10px;
      font-size: 20px;
      font-weight: 600;
    }
  }

  .header-center {
    flex: 1;
  }

  .header-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
}
</style>
