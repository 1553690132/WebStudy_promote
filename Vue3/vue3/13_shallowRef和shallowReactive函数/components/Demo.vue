<template>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.jobs.j1.salary }}W</h2>
  <h2>Test:{{ persons.jobs.j1.salary }}</h2>
  <button @click="person.name += '-'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.jobs.j1.salary++">涨薪</button>
  <button @click="persons.jobs.j1.salary++">涨Test</button>
</template>

<script>
import { shallowReactive } from "vue";
import { reactive } from "vue";

export default {
  name: "Demo",
  setup() {
    // shallowReactive无法转化深层的数据
    let person = shallowReactive({
      name: "lwh",
      age: 18,
      jobs: {
        j1: {
          salary: 20,
        },
      },
    });

    let persons = reactive({
      name: "lwh",
      age: 18,
      jobs: {
        j1: {
          salary: 20,
        },
      },
    });

    console.log(person, persons);

    return { person, persons };
  },
};
</script>

<style>
</style>