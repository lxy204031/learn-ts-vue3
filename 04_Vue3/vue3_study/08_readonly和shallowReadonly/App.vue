<template>
  <h3>readonly和shallowReadonly</h3>
  <h4>{{ msg1 }}</h4>
  <button @click="update">更新</button>
</template>
<script lang='ts'>
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const obj = reactive({
      name: "Bread",
      age: 17,
      idol: {
        name: "TEN",
        age: 18
      }
    })
    // 深度只读，内嵌对象都被设置为只读
    const msg = readonly(obj)
    // 浅只读，只有最外层是只读的，内层嵌套的对象依然可修改
    const msg1 = shallowReadonly(obj)
    const update = () => {
      // msg.name = 'LEE'  // error
      // msg.idol.name += '++' // error

      // msg1.name += '++' // error
      msg1.idol.name += '++'
    }
    return {
      msg1,
      update,
    }
  }
})
</script>