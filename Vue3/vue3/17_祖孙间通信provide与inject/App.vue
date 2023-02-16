<template>
  <div class="app">
    <h2>App组件（祖）, {{ name }} --- {{ price }}</h2>
    <Child :car="car"></Child>
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child.vue";

export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40W",
    });

    // 传递数据
    provide("car", car);

    return { ...toRefs(car), car };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>