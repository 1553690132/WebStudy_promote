<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // let keyWord = ref("hello"); // 使用 Vue内置ref

    // 自定义ref
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            // track追踪数据的改变
            track();
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              // trigger使Vue重新解析模板
              trigger();
            }, delay);
          },
        };
      });
    }

    let keyWord = myRef("hello", 500); // 使用自定义ref

    return { keyWord, myRef };
  },
};
</script>

<style>
</style>