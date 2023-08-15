<script setup>
const props = defineProps({
  avatar: {
    type: String,
    default: "https://avatars.githubusercontent.com/u/32326973?v=4"
  },
  size: {
    type: Number,
    default: 40
  }
})

</script>

<template>
  <div class="avatar">
    <div class="avatar-img" :style="{width: size + 'px', height: size + 'px'}">
      <img :src="avatar" :style="{width: size + 'px', height: size + 'px'}"/>
    </div>
  </div>
</template>

<style scoped lang="less">
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;

  .avatar-img {
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
