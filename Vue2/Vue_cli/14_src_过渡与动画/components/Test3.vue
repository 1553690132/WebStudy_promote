<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__heartBeat"
      appear
    >
      <h1 v-show="!isShow" key="k1">LWH</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  color: #fff;
  background-color: orange;
}
</style>