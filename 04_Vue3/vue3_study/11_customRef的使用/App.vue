<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{keyword}}</p>
</template>
<script lang='ts'>
import { defineComponent, ref, customRef } from "vue";
// 自定义防抖hook函数
// value传入的数据类型不确定，所以使用泛型
function useDebouncedRef<T>(value: T, delay = 200) {
  // 存定时器
  let time: number;
  return customRef((track, trigger) => {
    return {
      // 返回数据的
      get() {
        // 告诉vue追踪数据
        track();
        return value;
      },
      // 设置数据的
      set(newValue: T) {
        // 先清理定时器
        clearTimeout(time);
        // 开启定时器
        time = setTimeout(() => {
          value = newValue;
          // 告诉vue更新界面
          trigger();
        }, delay);
      }
    };
  });
}
export default defineComponent({
  name: "App",
  setup() {
    // const keyword = ref('abc')
    const keyword = useDebouncedRef("abc", 500);
    return {
      keyword
    };
  }
});
</script>