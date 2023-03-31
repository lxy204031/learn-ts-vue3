<template>
  <h3>ref的另一个作用：可以获取页面中的元素</h3>
  <input type="text" ref="inputNum" v-model="num"><br>
  <input type="text" ref="inputRef">
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    // ref获取元素: 利用ref函数获取组件中的标签元素
    const inputRef = ref<HTMLElement | null>(null)

    var num = ref(0)
    const inputNum = ref<HTMLElement | null>(null)
    onMounted(() => {
      inputRef.value && inputRef.value.focus()
      // inputNum.value && inputNum.value.focus()
    })
    return {
      inputRef,
      inputNum,
      num
    }
  }
})
</script>