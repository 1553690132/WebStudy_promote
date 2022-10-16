// App.vue 负责管理所有组件
<template>
  <div>
    <img src="./assets/logo.png">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>