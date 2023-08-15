<script setup>
import {onMounted, ref, watch} from "vue";
import {useAppState} from "@/store/appState";
import {useSound} from "@vueuse/sound";
import mp3 from "@/assets/123.mp3";

const play = useSound(mp3, {
  volume: 0.5,
  autoplay: false,
  loop: true,
})
const {apps} = useAppState()

const deg = ref(0)
onMounted(() => {
  /*获取封面元素*/
  const cover = document.querySelector('.cover')
  /*监听playState状态*/
  let timer = null
  watch(() => apps[0].play, (newVal) => {
    console.log(newVal)
    /*如果为true，播放*/
    if (newVal) {
      timer = setInterval(() => {
        deg.value += 0.5
        cover.style.transform = `rotate(${deg.value}deg)`
      }, 1000 / 60)
    } else {
      /*如果为false，暂停*/
      clearInterval(timer)
    }
  })
})
</script>

<template>

  {{ apps[0].play }}
  <div class="music_main">
    <div class="disc">
      <div class="cover">
        <img :src="apps[0].cover">
      </div>
    </div>
    <div class="music_player">
      <!--上一首-->
      <div class="music_player_btn">
        <icon-go-start size="30">

        </icon-go-start>
      </div>
      <!--播放/暂停-->
      <div class="music_player_btn" v-if="apps[0].play" @click.stop="apps[0].play = !apps[0].play;play.pause()">
        <icon-pause></icon-pause>
      </div>
      <div class="music_player_btn" v-else @click.stop="apps[0].play = !apps[0].play;play.play()">
        <icon-play></icon-play>
      </div>
      <!--下一首-->
      <div class="music_player_btn">
        <icon-go-end size="30">

        </icon-go-end>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.music_main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .disc {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #000;

    .cover {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: #fff;
      margin: 50px auto;
      animation: rotate 5s linear infinite;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .music_player {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .music_player_btn {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      cursor: pointer;
    }
  }
}


</style>
