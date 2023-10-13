<template>
  <h2>AsyncComp组件</h2>
  <!-- <p>{{msg}}</p> -->
  <p>{{result}}</p>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import axios from 'axios'
export default defineComponent({
  name: "AsyncComp",
  async setup() {
    // const msg = 'hello!!!'
    // return {
    //   msg
    // }
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //    resolve({
    //     msg: 'abc'
    //    })
    //   }, 2000);
    // })
    var result = await axios.get('/data.json')
    return {
      result: result.data
    }
  }
});
</script>