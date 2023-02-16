<template>
  <div class="app">
    <h3>App组件</h3>
    <Child />
  </div>
</template>

<script>
import Child from "./compontents/Child.vue";
export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>