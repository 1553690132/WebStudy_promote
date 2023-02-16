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
import { ref, watch, reactive } from "vue";
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

    // 情况一：监视ref所定义的一个响应式数据
    // watch(
    //   sum,
    //   (newValue, oldValue) => {
    //     console.log(newValue + "---" + oldValue);
    //   },
    //   { immediate: true, deep: true }
    // );

    // 情况二：监视ref所定义的多个响应式数据
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log(newValue + "---" + oldValue);
    // });

    // 情况三：监视reactive所定义的响应式数据的全部数据
    // 1.此处无法获取正确的 oldValue
    // 2.强制开启了深度监视（deep配置无效）
    // watch(person, (newValue, oldValue) => {
    //   console.log("发生变化");
    //   console.log(newValue, oldValue);
    // });

    // 情况四：监视reactive所定义的响应式数据中的某一个属性
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   }
    // );

    // 情况五：监视reactive所定义的响应式数据中的某些属性
    // watch(
    //   [() => person.name, () => person.jobs],
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   },
    //   { deep: true }
    // );

    // 特殊情况
    watch(
      () => person.jobs,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: true }
    );

    return { sum, msg, person };
  },
};
</script>

<style>
</style>