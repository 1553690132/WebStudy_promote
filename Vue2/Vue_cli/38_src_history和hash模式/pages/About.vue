<template>
  <h2>About组件</h2>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则进入该组件时调用 to属性固定
  beforeRouteEnter(to, from, next) {
    // ...
  },
  // 通过路由规则离开该组件时调用 from属性固定
  beforeRouteLeave(to, from, next) {
    // ...
  },
};
</script>

<style>
</style>