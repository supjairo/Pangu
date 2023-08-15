<!--



-->

<script setup>
import {ref, watch} from "vue";

const isShow = ref(false)
watch(() => isShow, (val) => {
  console.log(val)
})
</script>

<template>
  <div class="auto-hide">
    <div @mouseenter="isShow = true" @mouseleave="isShow = false">
      <div class="trigger">
        <!--触发元素-->
        <slot name="trigger"/>
      </div>
      <!--过渡动画-->
      <transition name="fade">
        <div v-if="isShow" class="content">
          <!--触发效果-->
          <slot name="content"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.auto-hide {
  position: relative;

  .trigger {
    position: relative;
    z-index: 1;
  }

  .content {
    right: 0;
    position: absolute;
    z-index: 999;
  }
}

/*加载动画*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
