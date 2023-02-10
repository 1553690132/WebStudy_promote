<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color: blue">count组件求和为:{{ sum }}</h2>
    <h2>列表中第一人名字为{{ firstPersonName }}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addKing">添加King</button>
    <button @click="addPersonServer">添加来自服务器的信息</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
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
      this.$store.commit("person/ADD_PERSON", personObj);
    },
    addKing() {
      const kingObj = {
        id: nanoid(),
        name: this.name,
      };
      this.name = "";
      this.$store.dispatch("person/addPersonKing", kingObj);
    },
    ...mapActions("person", ["addPersonServer"]),
  },
  computed: {
    ...mapState("count", ["sum"]),
    ...mapState("person", ["personList"]),
    firstPersonName() {
      return this.$store.getters["person/firstPersonName"];
    },
  },
};
</script>

<style>
</style>