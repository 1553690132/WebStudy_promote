<template>
  <div class="school">
    <h2>学校名: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "ABC",
      address: "BeiJing",
    };
  },
};
</script>

<style>
    .school {
        background-color: #ccc;
    }
</style>