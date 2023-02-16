<template>
  <div class="app">
    <h3>App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <!-- 异步引入组件未加载出的代替显示fallback -->
      <template v-slot:fallback>
        <h3>加载中。。。</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import Child from "./compontents/Child.vue";
import { defineAsyncComponent } from "vue";

// 动态引入（异步引入）
const Child = defineAsyncComponent(() => import("./compontents/Child.vue"));

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