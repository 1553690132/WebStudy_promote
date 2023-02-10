<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btns">点我输出上方的元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
  components: {
    School,
  },
  methods: {
    showDOM() {
      // 输出标签本身
      console.log(this.$refs.title);
      console.log(this.$refs.btns);
      // 输出组件对象
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
</style>