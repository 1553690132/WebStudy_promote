<template>
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <button @click="test">测试触发hello</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg"],
  emits: ["hello"],
  beforeCreate() {
    console.log("beforeCreate");
  },
  setup(props, context) {
    console.log("setup执行", props);
    console.log(context.attrs); // 相当于Vue2的 $attrs
    console.log(context.emit); // 相当于Vue2的 $emit
    let person = reactive({
      name: "lwh",
      age: 18,
    });
    function test() {
      context.emit("hello", 100);
    }
    return { person, test };
  },
};
</script>

<style>
</style>