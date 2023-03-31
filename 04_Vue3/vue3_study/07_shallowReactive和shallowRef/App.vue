<template>
  <h2>shallowReactive和shallowRef</h2>
  <h4>m1:{{ m1 }}</h4>
  <h4>m2:{{ m2 }}</h4>
  <h4>m3:{{ m3 }}</h4>
  <h4>m4:{{ m4 }}</h4>
  <button @click="update">更新</button>
</template>
<script lang='ts'>
import { defineComponent, reactive, shallowReactive, ref, shallowRef } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    // 深度监听，其中嵌套的对象，不管多深都是响应式的
    const m1 = reactive({
      name: "Bread",
      age: 17,
      idol: {
        name: "TEN",
        age: 18
      }
    })
    // 浅监听，只有最外层是响应式的
    const m2 = shallowReactive({
      name: "Bread",
      age: 17,
      idol: {
        name: "TEN",
        age: 18
      }
    })
    // 深度监听，同上面的reactive，调用时带.value
    const m3 = ref({
      name: "Bread",
      age: 17,
      idol: {
        name: "TEN",
        age: 18
      }
    })
    // 最外层都监听不了，只处理了value的响应式, 不进行对象的reactive处理
    const m4 = shallowRef({
      name: "Bread",
      age: 17,
      idol: {
        name: "TEN",
        age: 18
      }
    })
    function update() {
      // m1.name += '++'
      // m1.idol.name += '++'
      // m2.name += '++'
      // m2.idol.name += '++'
      // m3.value.name += '++'
      // m3.value.idol.name += '++'
      // m4.value.name += '++'
      m4.value.idol.name += '++'
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    }
  }
})
</script>