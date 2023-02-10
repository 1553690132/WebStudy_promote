<template>
  <div id="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "HNU",
      address: "HAERBIN",
    };
  },
  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log(`收到数据${data}`);
    });
  },
  // 解绑
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
#school {
  color: blue;
  border: 10px solid skyblue;
}
</style>