<template>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>工作：{{ person.job.type }}</h2>
  <h2>薪资：{{ person.job.salary }}</h2>
  <h3>测试数据{{ person.job.test1.test2.test3 }}</h3>
  <h3 v-show="person.sex">性别：{{ person.sex }}</h3>
  <ul v-for="h in person.hobby">
    <li>{{ h }}</li>
  </ul>
  <button @click="changInfo">修改信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除name属性</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "lwh",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        test1: {
          test2: {
            test3: 100,
          },
        },
      },
      hobby: ["1", "2", "3"],
    });

    function changInfo() {
      person.name = "Mike";
      person.age = 20;
      person.job.type = "后端工程师";
      person.job.salary = "40k";
      person.job.test1.test2.test3 = 200;
      person.hobby[0] = "5";
      person.hobby[1] = "6";
      person.hobby[2] = "7";
    }

    function addSex() {
      person.sex = "男";
    }

    function deleteName() {
      delete person.name;
    }

    return {
      person,
      changInfo,
      addSex,
      deleteName,
    };
  },
};
</script>

<style>
button {
  margin-right: 10px;
}
</style>
