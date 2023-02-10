<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h2>放大十倍为:{{ bigSum }}</h2>
    <h2>我在{{ school }},学习{{ subject }}</h2>
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
    // 借助mapMutations生成对应方法，方法中调用commit去联系mutations
    ...mapMutations({
      increment: "ADD",
      decrement: "DECREMENT",
    }),

    // 借助mapActions，方法中调用dispatch联系actions
    // ...mapActions({
    //   incrementOdd:'incrementOdd',
    //   incrementWait:'incrementWait'
    // })
    ...mapActions(["incrementOdd", "incrementWait"]),
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
