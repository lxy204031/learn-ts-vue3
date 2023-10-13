<template>
  <h2>vue3的新组建</h2>
  <p>不需要根标签</p>
  <button @click="isShowModal = true">打开弹窗</button>
  <hr />
  <!-- 包裹元素不在当前标签中，而是在指定元素body中 -->
  <teleport to="body">
    <div v-if="isShowModal">
      我是弹窗
      <button @click="isShowModal = false">关闭弹窗</button>
    </div>
  </teleport>
  <hr />
  <!-- 加载异步组件 -->
  <suspense>
    <template #default>
      <AsyncComp />
    </template>
    <template #fallback>
      loading.....
    </template>
  </suspense>
</template>
<script lang='ts'>
import { defineComponent, ref, provide, defineAsyncComponent } from "vue";
// vue3动态加载
const AsyncComp = defineAsyncComponent(() => import("./AsyncComp.vue"));
export default defineComponent({
  name: "App",
  components: {
    AsyncComp
  },
  setup() {
    const isShowModal = ref(false);
    return {
      isShowModal
    };
  }
});
</script>

<style>
</style>