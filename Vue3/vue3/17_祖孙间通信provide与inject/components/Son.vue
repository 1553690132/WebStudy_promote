<template>
  <div class="son">
    <h3>Son组件（孙）{{ name }} --- {{ price }}</h3>
  </div>
</template>

<script>
import { inject } from "vue";
import { toRefs } from "vue";
export default {
  name: "Son",
  setup() {
    let car = inject("car");
    return { ...toRefs(car) };
  },
};
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>