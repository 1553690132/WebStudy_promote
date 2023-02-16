<template>
  <Demo msg="hello" @hello="showHelloMsg">
    <template v-slot:cc>
      <h2>插槽</h2>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(value);
    }
    return {
      showHelloMsg,
    };
  },
};
</script>

<style>
</style>