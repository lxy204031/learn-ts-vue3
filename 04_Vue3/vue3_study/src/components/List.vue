<template>
  <div class="list">
    <Item
    v-if="todos.length>0"
      v-for="(todo,index) in todos"
      :key="todo.id"
      :todo="todo"
    />
    <span v-else>暂无任务</span>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Item from "./Item.vue";
import { Todo } from "../type/todo";
export default defineComponent({
  name: "List",
  components: {
    Item
  },
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      }
    },
    // deleteTodo: {
    //   type: Function,
    //   required: true
    // }
  }
});
</script>
 <style scoped>
.list {
  width: 95%;
  max-height: 300px;
  overflow-y: scroll;
  margin: 10px;
  border: 1px solid #c7c6c6;
}
</style>