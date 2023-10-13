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
    // 加一个泛型，可以向里面加新的属性，否则报错
    const state = reactive<any>({
      name: "Bread",
      age: 17,
      idol: {
        name: "TEN",
        age: 18
      }
    })
    // toRaw：将数据还原成普通对象
    const testToRaw = () => {
      const user = toRaw(state)
      user.name += '=='
      console.log(user);  // 改值页面不会响应，但值变了
    }
    // markRaw：标记一个对象，使其永远不会转换为代理
    const testMarkRaw = () => {
      const like = ['a', 'b']
      // state.like = like
      state.like = markRaw(like)
      setInterval(() => {
        state.like[0] += '++'
        console.log('1');
      }, 1000)
    }
    return {
      state,
      testToRaw,
      testMarkRaw,
    }
  }
})
</script>