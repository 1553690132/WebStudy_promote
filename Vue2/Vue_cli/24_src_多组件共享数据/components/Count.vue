<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h2>放大十倍为:{{ bigSum }}</h2>
    <h2>我在{{ school }},学习{{ subject }}</h2>
    <h3 style="color: red">person组件总人数为:{{ personList.length }}</h3>
    <select v-model.number="selectNum">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(selectNum)">+</button>
    <button @click="decrement(selectNum)">-</button>
    <button @click="incrementOdd(selectNum)">当前和为奇数再加</button>
    <button @click="incrementWait(selectNum)">延迟增加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      selectNum: 1,
    };
  },
  methods: {
    ...mapMutations({
      increment: "ADD",
      decrement: "DECREMENT",
    }),
    ...mapActions(["incrementOdd", "incrementWait"]),
  },
  computed: {
    ...mapState(["sum", "school", "subject", "personList"]),
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
