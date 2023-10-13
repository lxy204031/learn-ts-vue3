<template>
  <h2 :style="{color}">孙子组件</h2>
  <hr>
</template>
<script lang='ts'>
import { defineComponent, ref, inject } from "vue";
export default defineComponent({
  name: "GrandSon",
  setup() {
    // 注入
    const color = inject('color')
    return {
      color
    }
  }
});
</script>

<style>
</style>