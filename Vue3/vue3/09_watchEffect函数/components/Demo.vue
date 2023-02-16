<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点击增加</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!!'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.jobs.j1.salary }}W</h2>
  <button @click="person.name += '-'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.jobs.j1.salary++">涨薪</button>
</template>

<script>
import { ref, watch } from "vue";
import { watchEffect } from "vue";
import { reactive } from 'vue';
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("Hello");
    let person = reactive({
      name: "lwh",
      age: 18,
      jobs: {
        j1: {
          salary: 20,
        },
      },
    });

    watchEffect(() => {
      const _sum = sum.value
      const _msg = msg.value
      const _salary = person.jobs.j1.salary
      console.log("watchEffect回调执行");
    });

    return { sum, msg, person };
  },
};
</script>

<style>
</style>