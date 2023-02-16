<template>
  姓：<input type="text" v-model="person.firstName" /> 名：<input
    type="text"
    v-model="person.lastName"
  />
  <span>全名：{{ person.fullName }}</span>
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      firstName: "L",
      lastName: "WH",
    });
    // 计算属性简写形式
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // 计算属性完整写法（考虑读写情况）
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameNew = value.split("-");
        person.firstName = nameNew[0];
        person.lastName = nameNew[1];
      },
    });
    return { person };
  },
};
</script>

<style>
</style>