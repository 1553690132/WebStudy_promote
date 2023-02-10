// App.vue 负责管理所有组件
<template>
  <div class="root">
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    <School />
    <Student />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  data() {
    return {
      msg: "Hello Vue",
    };
  },
  components: {
    School,
    Student,
  },
};
</script>

<style>
.root {
  background-color: #ddd;
}
</style>