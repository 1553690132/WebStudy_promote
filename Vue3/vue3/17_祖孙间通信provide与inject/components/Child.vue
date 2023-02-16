<template>
  <div class="Child">
    <h3>Child组件（子）</h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  components: { Son },
  props: ["car"],
  setup(props, context) {
    console.log(props.car);
  },
};
</script>

<style>
.Child {
  background-color: skyblue;
  padding: 10px;
}
</style>