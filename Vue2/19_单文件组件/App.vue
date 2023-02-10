// App.vue 负责管理所有组件
<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./School.vue";
import Student from "./Student.vue";
export default {
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>