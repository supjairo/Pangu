<script setup>
import {useSystemState} from "@/store/systemState";
import {defineAsyncComponent} from "vue";
import Loading from "@/components/Loading.vue";

const systemState = useSystemState();
const theme = defineAsyncComponent(() => import(`@/template/${systemState.theme}/index.vue`));

</script>

<template>
  <template v-if="systemState.theme">
    <component :is="theme"/>
  </template>
  <template v-else>
    <div class="loading">
      <loading/>
    </div>
  </template>
</template>

<style scoped>

</style>
