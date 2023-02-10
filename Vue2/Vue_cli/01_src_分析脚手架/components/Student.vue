<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生名称: {{ studentName }}</h2>
    <h2>学生地址: {{ age }}</h2>
    <button @click="showName">点击提示学生名称</button>
  </div>
</template>

<script>
//组件交互相关代码(数据、方法等)
export default {
  name: "Student",
  data() {
    return {
      studentName: "LWH",
      age: 18,
    };
  },
  methods: {
    showName() {
      alert(this.studentName);
    },
  },
};
</script>

<style>
/* 组件的样式 */
</style>