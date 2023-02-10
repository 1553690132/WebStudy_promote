<template>
  <div>
    <Student name="LWH" :age="18" sex="男" />
    <hr />
    <Student />
    <hr />
    <Student />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student },
};
</script>

<style>
</style>