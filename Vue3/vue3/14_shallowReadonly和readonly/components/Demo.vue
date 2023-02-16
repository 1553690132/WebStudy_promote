<template>
  <h4>求和为：{{ sum }}</h4>
  <button @click="sum++">点击增加</button>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.jobs.j1.salary }}W</h2>
  <button @click="person.name += '-'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.jobs.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive } from "vue";
import { readonly } from "vue";
import { shallowReadonly } from "vue";

export default {
  name: "Demo",
  setup() {
    let sum = ref(10);

    let person = reactive({
      name: "lwh",
      age: 18,
      jobs: {
        j1: {
          salary: 20,
        },
      },
    });

    // 修改为只读！
    sum = readonly(sum);
    // 修改为浅只读！
    person = shallowReadonly(person);

    return { person, sum };
  },
};
</script>

<style>
</style>