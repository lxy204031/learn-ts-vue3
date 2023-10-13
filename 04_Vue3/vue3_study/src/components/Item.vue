<template>
  <div
    class="item"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
    @click="todo.isCompleted = !todo.isCompleted"
  >
    <input type="checkbox" v-model="isCompleted" />
    <span class="text">{{todo.title}}</span>
    <button class="btn btn-danger" v-if="isShowBtn" @click.stop="deleteItem(todo.id)">删除</button>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, inject, computed } from "vue";
import { Todo } from "../type/todo";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo // 函数返回的是Todo类型，约束Object
    }
    // deleteTodo: {
    //   type: Function,
    //   required: true
    // },
    // index: {
    //   type:Number,
    //   required:true
    // }
  },
  setup(props) {
    let isShowBtn = ref(false);
    const mouseover = () => {
      isShowBtn.value = true;
    };
    const mouseleave = () => {
      isShowBtn.value = false;
    };
    const deleteItem = inject("deleteTodo");
    const updateItem: any = inject("updateTodo");

    // propsz中的数据不能直接修改，使用computed计算属性
    const isCompleted = computed({
      get() {
        // 加问号是防止对象为undefined情况
        return props.todo?.isCompleted;
      },
      set(val) {
        // 修改todo中的属性
        updateItem(props.todo, val);
      }
    });

    return {
      isShowBtn,
      mouseleave,
      mouseover,
      deleteItem,
      isCompleted
    };
  }
});
</script>

<style scoped>
.item {
  width: 95%;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
}
.item:hover {
  background-color: rgb(250, 202, 210);
}
.text {
  margin-left: 10px;
}
.btn {
  float: right;
}
</style>