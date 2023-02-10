<template>
  <ul>
    <li :style="{ opacity }"><h1>欢迎学习Vue</h1></li>
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
  data() {
    return {
      opacity: 1,
    };
  },
  // 被激活时调用
  activated() {
    this.timer = setInterval(() => {
      if (this.opacity >= 0) {
        this.opacity -= 0.1;
      } else {
        this.opacity = 1;
      }
      console.log(1);
    }, 100);
  },
  // 取消激活时调用
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>