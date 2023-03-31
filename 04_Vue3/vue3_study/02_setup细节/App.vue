<template>
  <h2>我是父组件</h2>
  <div>msg:{{ msg }}</div>
  <div>txt:{{ txt }}</div>
  <button @click="msg += '++++++'">更新</button>
  <hr>
  <Child :msg="msg" msg2="msg2" msg3="msg3" :txt="txt" @fn="fn"/>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';
import Child from './components/Child.vue';
export default defineComponent({
  name: 'App',
  components: {
    Child,
  },
  setup() {
    var msg = ref('hello')
    var txt = ref('world')

    function fn(str: string):void {
      txt.value += str
    }
    return {
      msg,
      txt,
      fn
    }
  }
})
</script>