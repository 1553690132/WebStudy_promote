<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    let isShowDemo = ref(true);
    return { isShowDemo };
    
  },
};
</script>

<style>
</style>