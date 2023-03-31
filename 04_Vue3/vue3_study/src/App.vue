<template>
  <h3>toRaw和markRaw</h3>
  <h2>state:{{ state }}</h2>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>
<script lang='ts'>
import { defineComponent, toRaw, markRaw, reactive } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: "Bread",
      age: 17,
      idol: {
        name: "TEN",
        age: 18
      }
    })
    return {
      state,
      testToRaw,
      testMarkRaw,
    }
  }
})
</script>