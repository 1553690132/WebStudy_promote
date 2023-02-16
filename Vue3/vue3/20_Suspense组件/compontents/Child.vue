<template>
  <div class="child">
    <h3>Child组件</h3>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Child",
  async setup() {
    let sum = ref(0);
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum });
      }, 2000);
    });

    return await p;
  },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>