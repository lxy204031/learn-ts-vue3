<template>
  <h2>Child子组件</h2>
  <h3>name: {{ name }}</h3>
  <h3>length: {{ length }}</h3>
  <h3>state: {{ state }}</h3>
</template>
<script lang='ts'>
import { defineComponent, Ref, computed, toRef, reactive } from 'vue';
// Ref指ref类型
function fun(name: Ref) {
  return computed(() => name.value.length)
}
export default defineComponent({
  name: 'Child',
  // 从父组件接受到的是值，而不是ref
  props: {
    name: {
      type: String,
      reqiured: true
    },
    state: {
      type: Object
    }
  },
  setup(props) {
    console.log(props.state);
    console.log(props.name);
    // const length = fun(props.name)  // error，因为fun需要的是ref类型的参数，而props.name是string类型
    const length = fun(toRef(props, 'name'))
    return {
      length
    }
  }
})
</script>