<template>
  <div class="footer">
    <div class="left">
      <input type="checkbox" v-model="isCheckAll" />
      已完成 {{count}} / 全部 {{total}}
    </div>
    <div class="right">
      <button class="btn-danger" @click="delCheck">删除已完成任务</button>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, computed,inject } from "vue";
import { Todo } from "../type/todo";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true
    },
    checkAll: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    // 操作props里面的值，最好使用计算属性
    const count = computed(() => {
      return props.todos?.reduce(
        (pre, todo, index) => pre + (todo.isCompleted ? 1 : 0),
        0
      );
    });
    const total = computed(() => {
      return props.todos?.length;
    });

    const isCheckAll = computed({
      get() {
        return count.value && count.value > 0 && count.value == total.value;
      },
      set(val) {
        props.checkAll(val);
      }
    });

    const delCheck = inject('deleteCheck')
    return {
      count,
      total,
      isCheckAll,
      delCheck
    };
  }
});
</script>

<style scoped>
.footer {
  position: relative;
  /* height: 50px; */
  padding: 15px;
  bottom: 15px;
}
.left {
  float: left;
  bottom: 5px;
}
.right {
  float: right;
}
</style>