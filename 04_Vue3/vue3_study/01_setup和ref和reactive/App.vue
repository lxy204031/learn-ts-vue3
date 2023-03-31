<template>
  <h2>学习VUE3+TS</h2>
  <h3>{{ number }}</h3>
  <hr>
  <h2>setup和ref</h2>
  <h3>{{ count }}</h3>
  <button @click="add">增加</button>
  <hr>
  <h2>reactive</h2>
  <h3>{{ person.name }}</h3>
  <h3>{{ person.age }}</h3>
  <h3>{{ person.gender }}</h3>
  <h3>{{ person.obj }}</h3>
  <h3>{{ person.say }}</h3>
  <button @click="change">更改信息</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "App",
  // setup程序开始时就调用
  setup() {
    console.log('setuppppppppppppppp');
    const number = 10

    // vue3中，数据会变化时手动设置为响应式，而vue2是所有数据都是响应式
    // 只将会发生变化的数据设置为响应式提高了效率
    var count = ref(0)
    function add() {
      console.log('add');
      count.value++
    }

    // 上面是定义一个数据的响应式，定义多个数据的响应式使用：reactive
    // 深层次的响应式
    var obj: any = {
      name: 'Bread',
      age: 18,
      gender: 'girl',
      obj: {
        work: 'coder',
        hobby: 'dance'
      }
    }
    var person = reactive(obj)
    function change() {
      console.log('change', person);
      // 不需要.value
      // person.name = 'TEN'
      // person.gender = 'boy'
      // person.obj.work = 'idol'

      // obj.say = 'hihi'
      // person.say = 'hihi'

      // delete obj.age
      delete person.age
    }
    // return的东西模板里面可以直接用
    return {
      number,
      count,
      add,
      person,
      change,
    }
  }
});
</script>

