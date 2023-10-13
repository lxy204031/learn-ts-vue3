<template>
  <div class="main">
    <Header :addTodo="addTodo" />
    <List :todos="todos" :deleteTodo="deleteTodo" />
    <Footer :todos="todos" :checkAll="checkAll" />
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  toRefs,
  reactive,
  provide,
  watch,
  onMounted
} from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { Todo } from "./type/todo";
import { saveTodos, readTodos } from "./utils/localStorage";

export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer
  },
  setup() {
    //
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        // {
        //   id: 1,
        //   title: "吃饭",
        //   isCompleted: true
        // },
        // {
        //   id: 2,
        //   title: "睡觉",
        //   isCompleted: false
        // },
        // {
        //   id: 3,
        //   title: "打游戏",
        //   isCompleted: false
        // },
        // {
        //   id: 4,
        //   title: "遛狗",
        //   isCompleted: false
        // }
      ]
    });

    // 页面加载完后，缓存中读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos();
      }, 1000);
    });

    // 添加
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    // 删除
    // const deleteTodo = (index: number) => {
    //   state.todos.splice(index,1)
    // };
    const deleteTodo = (id: number) => {
      if (window.confirm("确定要删除吗？")) {
        state.todos.map((item, index) => {
          if (item.id == id) {
            state.todos.splice(index, 1);
          }
        });
      }
    };
    provide("deleteTodo", deleteTodo);

    // 修改
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
      console.log(todo, state);
    };
    provide("updateTodo", updateTodo);

    // 全选
    const checkAll = (isCheckAll: boolean) => {
      state.todos.forEach(todo => {
        todo.isCompleted = isCheckAll;
      });
    };

    // 删除已完成
    const deleteCheck = () => {
      if (window.confirm("确定删除吗？")) {
        state.todos = state.todos.filter(todo => !todo.isCompleted);
      }
    };
    provide("deleteCheck", deleteCheck);

    // 监视state.todos并存到浏览器缓存
    watch(
      () => state.todos,
      value => {
        saveTodos(value);
      },
      {
        deep: true
      }
    );

    return {
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      deleteCheck,
      ...toRefs(state)
    };
  }
});
</script>

<style scoped>
.main {
  /* height: 300px; */
  width: 500px;
  border: 1px solid #c7c6c6;
  /* display: flex; */
  /* flex-direction: column; */
}
</style>