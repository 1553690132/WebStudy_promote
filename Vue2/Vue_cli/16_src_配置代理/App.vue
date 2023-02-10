// App.vue 负责管理所有组件
<template>
  <div>
    <img src="./assets/logo.png" />
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getCars() {
      // 找代理服务器要数据
      axios.get("http://localhost:8080/api/cars").then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>