<script setup>

</script>

<template>
  <div class="loading-main">
    <div class="loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"
           preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="#e15b64" stroke-width="10" r="35"
                stroke-dasharray="164.93361431346415 56.97787143782138">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
                            values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="less">
.loading-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
