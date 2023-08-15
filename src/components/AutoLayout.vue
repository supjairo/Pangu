<script setup>
import {onMounted} from "vue";

const props = defineProps({
  mode: {
    type: String,
    default: "horizontal"
  }
})
onMounted(() => {
  console.log(props.mode);
})
</script>

<template>
  <div :class="['auto-layout', mode]">
    <slot>
    </slot>
  </div>
</template>

<style lang="less">
.auto-layout {
  display: flex;
  align-items: center;
  justify-content: center;

  &.horizontal {
    flex-direction: row;

    & > * {
      margin-left: 20px;
    }

    & > *:first-child {
      margin-left: 0;
    }

    & > *:last-child {
      margin-right: 0;
    }
  }


  &.vertical {
    flex-direction: column;

    & > * {
      margin-top: 5px;
    }

    & > *:first-child {
      margin-top: 0;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
