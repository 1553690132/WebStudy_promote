<template>
  <div class="demo">
    <h2 @click="showName">学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ age }}</h2>
  </div>
</template>

<script>
// 引入混合
import { hunhe, hunhe2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "Vue",
      age: 18,
    };
  },
  mixins: [hunhe, hunhe2],
};
</script>

<style lang="less" scoped>
.demo {
  background-color: orange;
}
</style>