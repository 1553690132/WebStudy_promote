<template>
  <input type="text" v-model=":key="key"">
  <h2>{{ keyWord }}</h2>
</template>

<script>
import { customRef } from "vue";
export default {
  setup() {
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger();
            }, delay);
          },
        };
      });
    }

    let keyWord = myRef("hello", 500);
    return { keyWord };
  },
};
</script>

<style>
</style>