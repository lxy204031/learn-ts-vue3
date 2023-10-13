<template>
  <h2>子组件</h2>
  <hr>
  <grand-son />
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import GrandSon from './GrandSon.vue'
export default defineComponent({
  name: "Son",
  components: {
    GrandSon
  },
  setup() {
    return {
    }
  }
});
</script>

<style>
</style>