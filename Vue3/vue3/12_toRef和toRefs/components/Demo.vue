<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ jobs.j1.salary }}W</h2>
  <button @click="name += '-'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="jobs.j1.salary++">涨薪</button>
</template>

<script>
import { reactive } from "vue";
import { ref } from "vue";
import { toRef } from "vue";
import { toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "lwh",
      age: 18,
      jobs: {
        j1: {
          salary: 20,
        },
      },
    });

    const name1 = person.name;
    const name2 = ref(person.name);
    // 与源数据进行绑定
    const name3 = toRef(person, "name");
    console.log(name1, name2, name3);

    return { ...toRefs(person) };
  },
};
</script>

<style>
</style>