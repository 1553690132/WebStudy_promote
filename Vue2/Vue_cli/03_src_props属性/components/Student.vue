<template>
  <div class="stu">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ myAge + 2 }}</h2>
    <h2>{{ message }}</h2>
    <button @click="updateAge">修改收到年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      message: "Hello Vue!",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  // 简单声明接收,
  props: ["name", "sex", "age"],

  // 接收同时对数据进行类型限制
  props: {
    name: String,
    age: Number,
    sex: String,
  },

  // 接收的同时对数据进行类型限制+默认值指定+必要性限制
  props: {
    name: {
      type: String,
      required: true, //名字是必填项
    },
    age: {
      type: Number,
      default: 99, // 默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.stu {
  color: rgb(29, 172, 228);
}
</style>