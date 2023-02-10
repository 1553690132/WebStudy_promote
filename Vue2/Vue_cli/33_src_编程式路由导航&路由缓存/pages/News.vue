<template>
  <ul>
    <li>news001</li>
    <input type="text" />
    <li>news002</li>
    <input type="text" />
    <li>news003</li>
    <input type="text" />
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log('被销毁!');
  },
};
</script>

<style>
</style>