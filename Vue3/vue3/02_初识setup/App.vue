<template>
  <h1 @click="sayHello">Message</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let name = "lwh";
    let age = 18;

    // 方法
    function sayHello() {
      alert(`我叫${name}，${age}岁，你好！`);
    }

    // 返回对象
    return {
      name,
      age,
      sayHello,
    };

    // 返回渲染函数
    // return () => {
    //   return h("h1", "HM7");
    // };
  },
};
</script>

<style>
</style>
