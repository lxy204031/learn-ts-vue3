<template>
  <h2>provide与inject</h2>
  <p>当前颜色：{{color}}</p>
  <button @click="color='red'">红色</button>
  <button @click="color='green'">绿色</button>
  <button @click="color='blue'">蓝色</button>
  <hr>
  <son />
</template>
<script lang='ts'>
import { defineComponent, ref, provide } from "vue";
import Son from './components/Son.vue'
export default defineComponent({
  name: "App",
  components: {
    Son
  },
  setup() {
    const color = ref('red')
    // 提供
    provide('color', color)
    return {
      color
    }
  }
});
</script>

<style>
</style>