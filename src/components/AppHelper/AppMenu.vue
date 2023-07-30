<script setup>
import {reactive} from "vue";

const state = reactive({
  showAppMenu: false
})
</script>

<template>
  <div class="app-menu" @mouseenter="state.showAppMenu = true" @mouseleave="state.showAppMenu = false">
    <img src="@/assets/images/app.png" alt="menu"/>
    <div class="card" v-show="state.showAppMenu">
      <div class="card-item">
        <span>应用1</span>
      </div>
      <div class="card-item">
        <span>应用2</span>
      </div>
      <div class="card-item">
        <span>应用3</span>
      </div>
      <div class="card-item">
        <span>应用4</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-menu {
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

    .card-item {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}

</style>
