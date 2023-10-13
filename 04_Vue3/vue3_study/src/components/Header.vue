<template>
  <div class="header">
    <input type="text" placeholder="请输入任务名称" v-model="title" @keyup.enter="add" />
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    let title = ref("");
    const add = () => {
      const text = title.value;
      // 去空格
      if (!text.trim()) return;
      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false
      };
      // props中定义的内容不能直接用
      props.addTodo(todo);
      title.value = "";
    };

    return {
      title,
      add
    };
  }
});
</script>

<style scoped>
.header {
  height: 20px;
  width: 100%;
  padding: 10px;
}
input {
  width: 94%;
  height: 100%;
}
</style>