<template>
  <h3>toRefs的使用</h3>
  <!-- <div>name: {{ info.name }}</div>
  <div>age: {{ info.age }}</div> -->
  <div>name: {{ name }}</div>
  <div>age: {{ age }}</div>
  <hr>
  <div>name2: {{ name2 }}</div>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue';

function useToRefs() {
  const info2 = reactive({
    name2: 'Bread',
    age2: 17
  })
  const name2 = toRefs(info2).name2
  setInterval(() => {
    info2.name2 += '=='
  }, 2000)
  return {
    name2
  }
}

export default defineComponent({
  name: 'App',
  setup() {
    const info = reactive({
      name: 'bread',
      age: 18
    })
    const infoToRefs = toRefs(info)
    setInterval(() => {
      info.name += '++'
    }, 2000)

    const { name2 } = useToRefs()

    return {
      // info
      ...infoToRefs,
      name2,
    }
  }
})
</script>