// App.vue 负责管理所有组件
<template>
  <div class="root">
    <img src="./assets/logo.png" />
    <h1>{{ msg }} 名称为: {{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型props实现子组件给父组件传值 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定自定义事件实现子组件给父组件传值 -->
    <!-- <Student v-on:getStudentName="getStudentName" /> -->
    <Student ref="student" @test1="test1" @click.native="show" />
    <Demo @test="test" />
    <Demo v-on:test="test" />
    <Demo ref="demo"/>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  data() {
    return {
      msg: "Hello Vue",
      studentName: "",
    };
  },
  components: {
    School,
    Student,
  },
  methods: {
    getSchoolName(name) {
      console.log(`收到学校名称为${name}`);
    },
    getStudentName(name) {
      console.log(`收到学生名称为${name}`);
      this.studentName = name;
    },
    test1() {
      console.log("test1");
    },
    show() {
      alert(123);
    },
  },
  mounted() {
    this.$refs.student.$on("getStudentName", this.getStudentName);
    this.$refs.demo.$on("test", this.test)
  },
};
</script>

<style>
.root {
  background-color: #ddd;
}
</style>