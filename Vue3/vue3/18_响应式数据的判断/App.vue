<template>
  <div class="app">
    <h2>App组件（祖）, {{ name }} --- {{ price }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { isRef } from "vue";
import { isReactive } from "vue";
import { isReadonly } from "vue";
import { isProxy } from "vue";

export default {
  name: "App",

  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40W",
    });

    let sum = ref(0),
      sum2 = 1;

    console.log(isRef(sum), isReactive(car), isReadonly(sum), isProxy(sum));

    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>