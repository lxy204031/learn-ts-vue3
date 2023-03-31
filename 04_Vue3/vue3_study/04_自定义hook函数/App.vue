<template>
  <h3>监听鼠标点击位置</h3>
  <h4>x:{{ x }}</h4>
  <h4>y:{{ y }}</h4>
  <hr>
  <!-- <ul v-if="!loading">
    <li>{{ result?.id }}</li>
    <li>{{ result?.address }}</li>
    <li>{{ result?.info }}</li>
  </ul> -->
  <ul v-for="item in result" :id="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.gender }}</li>
    <li>{{ item.name }}</li>
  </ul>
  <div>{{ result?.length }}</div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import useClick from './hook/useClick'
import useRequest from './hook/useRequest'

export default defineComponent({
  name: 'App',
  setup() {
    const { x, y } = useClick()

    //接口约束地址数据
    interface Address {
      id: number,
      address: string,
      info: string
    }

    // 接口约束产品数据
    interface Product {
      name: string,
      id: string,
      gender: string
    }

    // const { result, loading, errorMsg } = useRequest<Address>('/address.json')
    const { result, loading, errorMsg } = useRequest<Product[]>('/product.json')
    return {
      x,
      y,
      result,
      loading,
      errorMsg
    }
  }
})
</script>