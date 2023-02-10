<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生名称: {{ studentName }}</h2>
    <h2>学生地址: {{ age }}</h2>
    <button @click="sendStudentName">点击上传学生名</button>
    {{ n }}
    <button @click="add">n++</button>
    <!-- 解绑事件 -->
    <button @click="unbind">解绑事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
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
      n: 0,
    };
  },
  methods: {
    add() {
      this.n++;
    },
    sendStudentName() {
      // 触发Student组件身上的method事件
      this.$emit("getStudentName", this.studentName);
      // this.$emit("click");
    },
    unbind() {
      // 解绑一个自定义事件
      this.$off("getStudentName");
      // 解绑多个事件
      // this.$off(["getStudentName", "test1"]);
      // 全部解绑
      // this.$off();
    },
    death() {
      // 销毁当前组件实例
      // 销毁后所有student实例的自定义事件全都不奏效
      this.$destroy();
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