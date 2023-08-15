<script setup>
import AutoHide from "@/components/AutoHide.vue";
import GCard from "@/components/GCard.vue";
</script>

<template>
  <AutoHide>
    <template #trigger>
      <div class="messagePanel">
        <icon-message-one
            :size="24"
        />
      </div>
    </template>
    <template #content>
      <div class="messagePanel">
        <g-card>
          123
        </g-card>
      </div>
    </template>
  </AutoHide>
</template>

<style scoped>
.messagePanel {
}

</style>
