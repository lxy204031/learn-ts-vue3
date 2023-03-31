<template>
  <fieldset>
    <legend>姓名操作</legend>
    名字：<input type="text" placeholder="请输入名字" v-model="name.firstName"><br>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="name.lastName">
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1"><br>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2"><br>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3"><br>
  </fieldset>
</template>
<script lang='ts'>
import { defineComponent, reactive, computed, watch, watchEffect, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const name = reactive({
      firstName: 'Bread',
      lastName: 'Lee'
    })
    // computed参数是一个回调函数，则默认为get方法
    // 因此无法修改computed，修改会报警告，是只读数据
    const fullName1 = computed(() => {
      return name.firstName + '·' + name.lastName
    })
    // 参数是一个对象，可以设置get和set方法
    const fullName2 = computed({
      get() {
        return name.firstName + '·' + name.lastName
      },
      set(value: string) {
        const newName = value.split('·')
        name.firstName = newName[0]
        name.lastName = newName[1]
      }
    })

    var fullName3 = ref('')
    // 监视
    watch(name, ({ firstName, lastName }) => {
      fullName3.value = firstName + '·' + lastName
    }, { immediate: true, deep: true })
    // immediate: 立即执行一次，否则监视对象变化了才执行
    // deep: 深度监视

    //监视，默认立即执行，不需要immediate，也不需要指定监视对象
    // watchEffect(() => {
    //   fullName3.value = name.firstName + '·' + name.lastName
    // })

    // 监视fullName3
    watchEffect(() => {
      var newName = fullName3.value.split('·')
      name.firstName = newName[0]
      name.lastName = newName[1]
    })

    // 监视多个数据
    watch([name.firstName, name.lastName], () => {
      // 这里代码没有执行。因为使用reactive生成的响应式对象name中的属性并不具备响应式
      // 注意：watch只能监视响应式数据
      console.log('监视');
    })
    // 要想监视非响应式的数据需要改代码，在非响应式数据前加：() =>
    watch([() => name.firstName, () => name.lastName], () => {
      // 这里代码没有执行。因为使用reactive生成的响应式对象name中的属性并不具备响应式
      // 注意：watch只能监视响应式数据
      console.log('监视');
    })
    return {
      name,
      fullName1,
      fullName2,
      fullName3
    }
  }
})
</script>