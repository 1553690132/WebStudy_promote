<template>
  <div class="son">
    <h3>Son组件</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  name: "Son",
  components: { Dialog },
};
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>