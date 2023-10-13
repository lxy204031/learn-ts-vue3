<template>
  <h2>toRef的使用以及特点：</h2>
  <h3>state:{{ state }}</h3>
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
  <hr>
  <button @click="update">更新</button>
  <hr>
  <Child :name="name" :state="state"/>
</template>
<script lang='ts'>
import { defineComponent, toRef, reactive, ref } from 'vue';
import Child from './components/Child.vue'
export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup() {
    const state = reactive({
      name: "Bread",
      age: 10
    })
    // toRef: 为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
    const name = toRef(state, 'name')
    // 拷贝了一份新的数据值单独操作, 更新时相互不影响
    const age = ref(state.age)
    console.log('1111111', name);

    const update = () => {
      // name.value += '++'  // state中的name也跟着变化
      // age.value += 1  // state中的age不会跟着变化
      state.name += "=="  // name也会跟着变化
      state.age += 2  // age不会跟着变化
    }
    return {
      state,
      name,
      age,
      update,
    }
  }
})
</script>