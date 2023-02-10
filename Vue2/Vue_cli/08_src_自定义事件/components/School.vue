<template>
  <div id="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">提交学校名称</button>
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
  props:["getSchoolName"],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  },
};
</script>

<style scoped>
#school {
  color: blue;
  border: 10px solid skyblue;
}
</style>