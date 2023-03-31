<template>
  <h2>我是子组件</h2>
  <div>{{ msg }}</div>
  <div>{{ $attrs.msg2 }}</div>
  <div>{{ $attrs.msg3 }}</div>
  <div>{{ txt }}</div>
  <button @click="update">更新</button>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Child',
  props: ['msg', 'txt'],
  beforeCreate() {
    console.log('beforeCreate');
  },
  // setup在beforeCreated前执行
  // setup(props, contxt) {
  // setup(props, {emit, slot, attrs, }) {
  setup(props, {emit, attrs, }) {
    // 包含props配置声明且传入了的所有属性的对象
    console.log(props);
    // 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    // console.log(contxt.attrs);
    console.log(attrs);
    console.log('-------------------');

    console.log('setup');

    function update() {
      // 用来分发自定义事件的函数, 相当于 this.$emit
      // contxt.emit('fn', '==')
      emit('fn', '==')
      // contxt.attrs.msg2 = 'yes'  //只读，不能修改
    }
    return {
      update
    }
  }
})
</script>