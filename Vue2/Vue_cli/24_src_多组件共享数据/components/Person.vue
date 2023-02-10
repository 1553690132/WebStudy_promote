<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:blue">count组件求和为:{{sum}}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      this.name = "";
      this.$store.commit("ADD_PERSON", personObj);
    },
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
};
</script>

<style>
</style>