<template>
  <h4>求和为：{{ sum }}</h4>
  <button @click="sum++">点击增加</button>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.jobs.j1.salary }}W</h2>
  <h3>汽车信息：{{ person.car }}</h3>
  <button @click="person.name += '-'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.jobs.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出原始person</button>
  <button @click="addCar">添加车</button>
  <button @click="configCar">修改车</button>
</template>

<script>
import { ref, reactive } from "vue";
import { toRaw } from "vue";
import { markRaw } from "vue";
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

    function showRawPerson() {
      const p = toRaw(person);
      console.log(person);
      console.log(p);
    }

    function addCar() {
      let car = {
        name: "BMW",
        price: "40W",
      };
      person.car = markRaw(car);
    }

    function configCar() {
      person.car.price += "10";
    }

    return { person, sum, showRawPerson, addCar, configCar };
  },
};
</script>

<style>
</style>