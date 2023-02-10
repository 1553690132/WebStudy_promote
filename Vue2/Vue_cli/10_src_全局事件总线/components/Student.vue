<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生名称: {{ studentName }}</h2>
    <h2>学生地址: {{ age }}</h2>
    <button @click="sendStudentName">把学生名给School</button>
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
    sendStudentName() {
      this.$bus.$emit("hello", this.studentName);
    },
  },
};
</script>

<style scoped>
/* 组件的样式 */
.student {
  border: 10px solid pink;
}
</style>