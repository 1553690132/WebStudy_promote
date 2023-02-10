<template>
  <div class="demo">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生名给School</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    return {
      name: "Vue",
      age: 18,
    };
  },
  methods: {
    // 提供数据
    sendStudentName() {
      pubsub.publish('hello', this.name)
    },
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: orange;
}
</style>