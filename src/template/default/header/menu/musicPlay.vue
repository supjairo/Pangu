<script setup>

import AutoHide from "@/components/AutoHide.vue";
import {useAppState} from "@/store/appState";
import {onMounted, ref, watch} from "vue";
import GCard from "@/components/GCard.vue";

const {apps} = useAppState();
const deg = ref(0)


onMounted(() => {
  /*监听playState状态*/
  let timer = null
  watch(() => apps[0].play, (newVal) => {
    if (newVal) {
      setTimeout(() => {
        const cover = document.querySelector('.cover-box')
        timer = setInterval(() => {
          deg.value += 0.5
          cover.style.transform = `rotate(${deg.value}deg)`
        }, 1000 / 60)
      }, 1000 / 60)
    } else {
      clearInterval(timer)
    }
  })
})
</script>

<template>
  <div class="music_player">
    <AutoHide>
      <template #trigger>
        <icon-music :size="24" v-if="!apps[0].play" class="animate__animated animate__fadeInLeft"></icon-music>
        <div class="music-box animate__animated animate__fadeInRight" v-else>
          <div class="cover-box">
            <img :src="apps[0].cover">
          </div>
          <div class="music-info">
            <div class="music-name">{{ apps[0].name }}</div>
            <div class="music-author">{{ apps[0].author }}</div>
          </div>
        </div>
      </template>
      <template #content>
        <g-card>
          感谢你的使用
        </g-card>
      </template>
    </AutoHide>
  </div>
</template>

<style scoped lang="less">
.music_player {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .music-box {
    display: flex;
    align-items: center;
    justify-content: center;


    .cover-box {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      animation: rotate 5s linear infinite;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .music-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;

      .music-name {
        font-size: 14px;
        font-weight: 500;

      }

      .music-author {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
}
</style>
