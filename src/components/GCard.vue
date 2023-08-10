<script setup>

</script>

<template>
  <div class="g-card">
    <slot name="content">
    </slot>
  </div>
</template>

<style scoped>
.g-card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  padding: 10px;
}
</style>
